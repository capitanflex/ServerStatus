<template>
    <div class="game-info component">
        <div class="game-info__api api">

        </div>
        <div class="game-info__container container">
            <card-info/>
        </div>

    </div>
</template>

<script setup lang="ts">

import CardInfo from "./server-card/card-info.vue";

</script>

<style scoped lang="scss">
.game-info {
    border-radius: 0 20px 20px 2px;
    margin: 0 30px 30px 0;
    padding: 30px 30px;
}

.container{
    min-height: 100%;
    margin: 70px 0 20px 10px;
}
</style>