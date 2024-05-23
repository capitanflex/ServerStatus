<template>
    <h1 class="info__title title">
        {{title}}
    </h1>
    <div class="status-card__info info">
        <div class="api__status status">
            <h2>Server status: </h2>
            <p class="info__ping ping" v-if="ping" >
                <img class="ping__image" src="@/assets/images/ok.png" alt="server ok" title="server ok">
            </p>
            <p class="info__ping ping" v-else>
                <img class="ping__image" src="@/assets/images/not-ok.png" alt="server not ok" title="server not ok">
            </p>
        </div>
        
        <div class="info__problems problems" :class="!incidents">
            <h2>Server  problems  :</h2>
            <div class="problems__fade-container fade-container" >
                <p
                    class="fade-container__problems-list problems-list"
                    v-if="incidents"
                    v-for="incident in incidents"
                >
                    {{incident}}
                </p>
                <div class="fade-container__nothing" v-else >nothing</div>
            </div>

        </div>
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
        display: flex;
        justify-content: space-between;
        color: #FFFFFFCC;
        height: 500px;
        &__card-title{
            text-align: center;
        }
    }
    .status {
      display: flex;
    }
    .problems {

    }

    .fade-container {
        background: linear-gradient(#252525, #27272700);
        height: 170px;
        width: 400px;
        font-size: 1.5em;
        padding: 10px 20px;
        &__nothing {

        }
    }

    .ping {
        &__image{
            max-width: 30px;
            margin: 8px 10px ;
        }
    }

</style>