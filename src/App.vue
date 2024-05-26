<template>
    <side-bar/>
    <div class="container">
        <main-block/>
        <comments/>
    </div>

</template>

<script setup lang="ts">

import SideBar from "./components/SideBar/side-bar.vue";
import MainBlock from "./components/main-block/main-block.vue";
import Comments from "./components/comments/comments.vue";
</script>

<style scoped>
.container {
    background: #252525;
    min-height: 100vh;
    width: 100%;
    border-radius: 30px 0 0 30px;
    display: flex;
}

@media (max-width: 1130px) {
    .container {
        flex-wrap: wrap;
    }
}
</style>
