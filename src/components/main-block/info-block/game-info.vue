<template>
    <div class="game-info component">
        <div class="game-info__container container">
            <h1 class="status-card__title title">
                {{ title }}
            </h1>
            <div class="status-card__info info">
                <div class="api__status status">
                    <h2>Server status: </h2>
                    <p class="info__ping ping">
                        <img
                            class="ping__image"
                            :src="ping !== null ? 'src/assets/images/ok.png' : 'src/assets/images/not-ok.png'"
                            :alt="ping !== null ? 'server ok' : 'server not ok'"
                            :title="ping !== null ? 'server ok' : 'server not ok'"
                        />
                    </p>
                </div>
                <div class="info__problems problems" :class="{ 'no-incidents': !incidents || incidents.length === 0 }">
                    <h2 class="problems__connection">Server problems:</h2>
                    <div class="problems__fade-container fade-container">
                        <p
                            class="fade-container__problems-list problems-list"
                            v-for="(incident, index) in incidents"
                            v-if="incidents && incidents[0] !== '' "
                            :key="index"
                        >
                            {{ incident }}
                        </p>
                        <div class="fade-container__nothing" v-else>unable to purchase in-game currencies and transfers disabled (russia only)</div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import {useGameStore} from "@/store/store";
import {onMounted, ref, watch} from "vue";

const gameStore = useGameStore();
const currentGameId = ref<number>(null);
const title = ref<string>(null);
const ping = ref<number | null>(null);
const incidents = ref<string[] | null>(null);

interface GameData {
    id: number;
    title: string;
    ping: number;
    incidents: string[];
}
const updateGameData = (data: GameData) => {
    currentGameId.value = data.id;
    title.value = data.title;
    ping.value = data.ping;
    incidents.value = data.incidents;

};

watch(
    () => gameStore.game,
    (newGameData: GameData) => {
        updateGameData(newGameData);
    },
    {deep: true, immediate: true}
);

</script>

<style scoped lang="scss">
.game-info {
    border-radius: 0 20px 20px 2px;
    margin: 0 30px 30px 0;
    padding: 30px 30px;
}

.container {
    min-height: 100%;
    margin: 0 20px 10px 30px;
}
.title {
    font-size: 42px;
    color: #ffffff;
}

.info {
    display: flex;
    flex-direction: column;
    color: #FFFFFFCC;

    &__card-title {
        text-align: center;
        font-size: 32px;
    }

    & h2 {
        font-size: 32px;
    }
}

.status {
    display: flex;
    height: fit-content;
    align-items: center;
    margin: 0 40px 0 0;
}

.problems {
    width: 100%;

    &__connection {
        width: fit-content;
    }
}

.fade-container {
    background: linear-gradient(#252525, #27272700);
    height: 170px;
    max-width: 400px;
    font-size: 1.5em;
    padding: 10px 20px;
}

.ping {
    &__image {
        max-width: 30px;
        margin: 13px 10px 0 10px;
    }
}

@media (max-width: 774px) {
    .title {
        font-size: 32px;
    }
    .info {
        & h2 {
            font-size: 24px;
        }
    }
}

@media (max-width: 774px) {
    .container {
        margin: 0 20px 10px 10px;
    }
}
</style>