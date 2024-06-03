<script setup lang="ts">
import SingleComment from "@/components/comments/single-comment.vue";
import {onMounted, ref, watch} from "vue";
import axios from "axios";
import {useGameStore} from "../../store/store.js";

const gameStore = useGameStore();
const lastComments = ref([]);

async function fetchComments(gameId: number) {
    const params = {
        "gameid": gameId
    };

    try {
        const response = await axios.post('http://localhost:8080/api/comments-read/',  params );
        lastComments.value = response.data;

    } catch (error) {
        console.error('Error:', error);
    }
}

// function loadMoreComments() {
//
// }

watch(
    () => gameStore.game,
    (newGameData) => {
        fetchComments(newGameData.id);
    },
    {deep: true, immediate: true}
);

</script>

<template>
<div class="comments-read component">
    <div class="comments-read__title">Last comments:</div>
    <div class="comments-read__content">
        <single-comment
            v-for="comment in lastComments"
            :key="comment.id"
            :author="comment.author"
            :message="comment.comment"
            :date="comment.date"
        />
    </div>
</div>
</template>

<style scoped lang="scss">
.comments-read {
    border-radius: 20px;

    max-width: 300px;


    &__title {
        height: 35px;
        padding: 2px 10px;
        background: #8D8D8D;
        font-size: 24px;
        border-radius: 20px 20px 0 0;
    }

    &__content {
        padding: 0 15px 15px 15px;
        height: 500px;
        overflow: auto;
    }
}
@media (max-width: 630px) {
    .comments-read {
        border-radius: 0 20px 20px 2px;
        max-width: 100%;
        &__title {

            border-radius: 0 20px 0 0 ;
        }

    }
}
</style>