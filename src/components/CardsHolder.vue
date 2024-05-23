<template>
    <div class="card-list component">
        <server-status-card  v-for="game in gameCards" :key="game.id" :game="game" />
    </div>
</template>

<script setup lang="ts">
import { GameCard } from "./scripts/GameCard.ts";
import ServerStatusCard from "./server-card/server-status-card.vue";
import { ref } from "vue";

const gameCards = ref<GameCard[]>([]);

const gameCardsData = [
    { id: 1, title: 'Valorant', imageUrl: 'src/assets/images/valorant/val-logo.png' },
    { id: 2, title: 'Steam',  imageUrl: 'src/assets/images/steam/steam.png' },
];

Promise.all(gameCardsData.map(async (cardData) => {
    const card = new GameCard(cardData.id, cardData.title, cardData.imageUrl);
    await card.fetchCardInfo();
    return card;
})).then(cards => {
    gameCards.value = cards;
    console.log(gameCards.value)
});
</script>

<style scoped>
 .card-list {
     display: flex;
     align-items: center;
     gap: 50px;
     border-radius: 0px 20px 20px 2px;
     margin: 30px 30px 30px 0;
     padding: 30px 60px;
 }
</style>