<script setup lang="ts">

import CardsHolder from "./CardsHolder.vue";
import GameInfo from "./GameInfo.vue";
</script>

<template>
    <div class="main">
        <cards-holder/>
        <game-info/>
    </div>


</template>

<style scoped lang="scss">
.main {
    display: flex;
    flex-direction: column;
    width: 100%;
}
</style>