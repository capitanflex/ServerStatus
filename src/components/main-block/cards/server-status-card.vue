<template>
    <div class="card-list__game-card game-card "  v-if="game" @click="changeSelectedGame" :class="{'selected': select}">
            <img :src="game.imageUrl" alt="" class="game-card__image__logo">
    </div>
</template>

<script setup lang="ts">
import {useGameStore} from "@/store/store";
import {onMounted, ref, watch} from "vue";

const select = ref(false);
const props = defineProps({
    game: Object,

})

const gameStore = useGameStore();


const changeSelectedGame = () => {
    gameStore.updateGame(props.game);
};

const selectCard = (gameid : number) => {
    if (props.game.id == gameid){
        select.value = !select.value;
    }
    else {
        select.value = false;
    }
}

watch(
    () => gameStore.game.id,
    (gameid) => {
        selectCard(gameid)
    }
);

onMounted(() => {
    selectCard(gameStore.game.id)
})
</script>


<style scoped lang="scss">

    .game-card {
        background-color: #AC3434;
        border-radius: 11px;
        width: 170px;
        height: 140px;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        margin: auto 0;

        &:hover {
            box-shadow: 0 0 10px 5px #ECECEC;
        }

        &__image__logo {
            max-width: calc(100% - 45px);
            width: 100%;
            height: auto;
            display: block;
        }
    }

    @media (max-width: 774px) {
        .game-card {
            width: 120px;
            height: 90px;
        }
    }
    .selected {
        box-shadow: 0 0 8px 5px #ECECEC;
    }

</style>