<script setup lang="ts">
import Chart from 'chart.js/auto';
import {onMounted, ref} from "vue";
import axios from "axios";
import {useGameStore} from "../../store/store.js";

const gameStore = useGameStore();
const chartData = ref({});
onMounted(() => {
    fetchDayComments(gameStore.game.id);

})

async function fetchDayComments(gameId: number) {
    const params = {
        "gameid": gameId
    };

    try {
        const response = await axios.post('http://localhost:8080/api/comments-day/', params);

        if (response.data && response.data.length > 0) {
            chartData.value = createChartData(response.data);
            BuildChart();
        } else {
            console.error('Received empty or invalid data from the server');
        }
    } catch (error) {
        console.error('Error:', error);
    }
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

    data.datasets[0].data = countReports(lastComments)

    return data;
}

function countReports(lastComments) {
    const hoursReports = lastComments.map((el) => {
        return el.date.slice(11, -11)
    })
    console.log(hoursReports)
    const counts = new Array(24).fill(0);

    hoursReports.forEach(hour => {
        const index = parseInt(hour)+3; // Преобразуем час в число
        counts[index]++; // Увеличиваем счетчик для соответствующего часа
    });

    return counts;
}

function BuildChart() {
    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
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
</script>

<template>
    <div class="chart-container">
        <canvas id="myChart"></canvas>
    </div>
</template>

<style scoped lang="scss">
    .chart-container{
        padding: 30px 30px 30px 50px;
        width: 1080px;
    }
    
    @media (max-width: 1440px) {
        .chart-container{
            width: 710px;
        }
    }
    @media (max-width: 1130px) {
        .chart-container{
            width: unset;
        }
    }
</style>