<script setup>
import Chart from 'chart.js/auto';
import {onMounted, ref} from 'vue';
import axios from 'axios';
import {useGameStore} from '@/store/store.js';

const gameStore = useGameStore();
const chartData = ref({
    labels: [],
    datasets: [{
        label: 'Reports',
        data: [],
        borderWidth: 1
    }]
});

onMounted(() => {
    fetchDayComments(gameStore.game.id);
});

async function fetchDayComments(gameId) {
    const params = {"gameid": gameId};

    try {
        const response = await axios.post('http://server-status.na4u.ru/api/comments-day/', params);

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
    chartData.value.labels = data.labels;
    chartData.value.datasets[0].data = data.datasets[0].data;

    // После обновления данных вызываем функцию для создания или обновления графика
    BuildChart();
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

    hoursReports.forEach(hour => counts[labels.indexOf(hour)]++);// Увеличиваем счетчик для соответствующего часа


    return counts;
}

function BuildChart() {
    const canvas = document.getElementById('myChart');
    if (canvas instanceof HTMLCanvasElement) {
        new Chart(canvas, {
            type: 'bar',
            data: chartData.value,
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
}

// watch(
//     () => gameStore.game.id,
//     (gameid) => {
//         fetchDayComments(gameid)
//     }
// );
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
