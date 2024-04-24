<template>
    <div class="status-card__info info">
        <h2 class="info__card-title card-title">{{title}}</h2>
        <p class="info__ping ping">Server  response time: {{ping}} ms</p>
        <p class="info__problems problems">Server  problems  :</p>
        <p
            class="info__problems problems-list"
            v-for="incident in incidents"
        >
            {{incident}}
        </p>
    </div>
</template>

<script setup lang="ts">
    // import {ref} from "vue";

    // const server_ping = ref("0");
    // const server_problems = ref(["nothing"]);
    defineProps({
        title: String,
        ping: String,
        incidents: [],

    });
</script>

<style lang="scss" scoped>
    .info {
        margin: 0 20px;
        text-align: left;

        &__card-title{
            text-align: center;
        }
    }


</style>