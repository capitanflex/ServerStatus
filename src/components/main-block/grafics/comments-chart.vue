<script setup>
import Chart from 'chart.js/auto';
import { onMounted, ref, watch } from 'vue';
import axios from 'axios';
import { useGameStore } from '@/store/store.js';

const gameStore = useGameStore();
let chartInstance = null; // Переменная для хранения экземпляра графика

onMounted(() => {
    const canvas = document.getElementById('myChart');
    if (canvas instanceof HTMLCanvasElement) {
        chartInstance = new Chart(canvas, {
            type: 'bar',
            data: {
                labels: [],
                datasets: [{
                    label: 'Reports',
                    data: [],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        fetchDayComments(gameStore.game.id);
    }
});

async function fetchDayComments(gameId) {
    const params = { "gameid": gameId };

    try {
        const response = await axios.post('https://server-status.na4u.ru/api/comments-day/', params);

        if (response.data && response.data.length > 0) {
            updateChartData(response.data);
        } else {
            console.error('Received empty or invalid data from the server');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

function updateChartData(lastComments) {
    const data = createChartData(lastComments);

    // Обновляем данные графика
    chartInstance.data.labels = data.labels;
    chartInstance.data.datasets[0].data = data.datasets[0].data;

    // Не забываем обновить график после изменения данных
    chartInstance.update();
}

function createChartData(lastComments) {
    const data = {
        labels: [],
        datasets: [{
            label: 'Reports',
            data: [],
            borderWidth: 1
        }]
    };

    const currHour = new Date().getHours();
    for (let i = currHour - 23; i <= currHour; i++) {
        data.labels.push(i < 0 ? String(i + 24) : String(i));
    }

    data.datasets[0].data = countReports(lastComments, data.labels);

    return data;
}

function countReports(lastComments, labels) {
    const hoursReports = lastComments.map(el => {
        const commentDate = new Date(el.date);
        commentDate.setHours(commentDate.getHours() + 2);

        return commentDate.toLocaleTimeString().slice(0, -6);
    });

    const counts = new Array(24).fill(0);

    hoursReports.forEach(hour => counts[labels.indexOf(hour)]++);

    return counts;
}

watch(
    () => gameStore.game.id,
    (gameid) => {
        fetchDayComments(gameid);
    }
);

</script>

<template>
    <div class="chart-container">
        <canvas id="myChart"></canvas>
    </div>
</template>

<style scoped lang="scss">
.chart-container {
    padding: 30px 30px 30px 50px;
    max-width: 80%;
    width: 100%;

    @media (max-width: 440px) {
        padding: 10px 10px 10px 20px;
    }
}
</style>
