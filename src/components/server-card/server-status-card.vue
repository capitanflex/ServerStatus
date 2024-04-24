<template>
    <div class="card-list__nice-border nice-border">
        <div class="nice-border__status-card status-card">
            <div class="status-card__image image" v-if="game">
                <img :src="game.imageUrl" alt="" class="image__logo">
            </div>
            <card-info v-if="game" :key="game.id" :title="game.title" :ping="game.ping" :incidents="game.incidents"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import CardInfo from "./card-info.vue";

const props = defineProps({
    game: Object,

})

console.log(props)
</script>


<style scoped lang="scss">
    .nice-border{
        box-shadow: 0px 0px 10px 5px rgba(255, 0, 0, 0.5);
        border-radius: 10px;
    }
    .status-card{
        background-color: transparent;
        width: 170px;
        height: 400px;
        border-radius: 10px;
        transition: all 200ms ease;
        &__image{
            width: 100%;
            max-width: 100%;
        }

        &.card-title{
            font-size: 28px;
        }
    }

    .nice-border:hover{
        cursor: pointer;
        box-shadow: 0px 0px 10px 5px rgba(255, 0, 0, 0.9);
    }
    .status-card:hover {
        box-shadow: 0px 0px 100px 10px rgba(255, 0, 0, 0.2) inset;
        border: 3px rgba(255, 0, 0, 0.9);
        width: 190px;
        height: 420px;
        font-size: 18px;

    }

    .image{
        height: 40%;

        &__logo{
            width: 100%;
            max-width: calc(100% - 40px);
            margin: 15px 20px;
            border-radius: 10px;
        }
    }
</style>