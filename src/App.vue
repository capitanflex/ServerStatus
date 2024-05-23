<template>
    <side-bar/>
    <div class="container">
        <main-block/>
        <comments/>
    </div>

</template>

<script setup lang="ts">

import SideBar from "./components/SideBar.vue";
import MainBlock from "./components/Main-block.vue";
import Comments from "./components/comments/Comments.vue";
</script>

<style scoped>
.container {
    background: #252525;
    height: 100vh;
    width: 100%;
    border-radius: 30px 0 0 30px;
    display: flex;
}
</style>
