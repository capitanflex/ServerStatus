<script setup lang="ts">

import CardsHolder from "./cards/cards-holder.vue";
import GameInfo from "./info-block/game-info.vue";
import Grafic from "../grafics/grafic.vue";
</script>

<template>
    <div class="main">
        <cards-holder/>
        <game-info/>
        <grafic/>
    </div>


</template>

<style scoped lang="scss">
.main {
    display: flex;
    flex-direction: column;
    min-width: 0;
    width: 100%;
}

@media (max-width: 1158px) {
    
}
</style>