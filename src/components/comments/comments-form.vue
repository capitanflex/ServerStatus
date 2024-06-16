<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import {useGameStore} from "../../store/store.js";

const gameStore = useGameStore();

const commentAuthor = ref('');
const commentText = ref('');

const submitForm = () => {
  sendComment(commentAuthor.value, commentText.value)

  commentAuthor.value = '';
  commentText.value = '';
};

async function sendComment(author: string, text: string) {
  const date = formatDate(Date.now());
  const currentGameId = ref<number>(gameStore.game.id);
  const data = {
    gameid: currentGameId.value,
    comment: text,
    author: author,
    date: date
  };

  try {
    const response = await axios.post('http://server-status.na4u.ru/api/comments/', data, {});

  } catch (error) {
    console.error('Error:', error);
  }
}

function formatDate(dateString: number) {
    const date = new Date(dateString);

    const moscowOffset = 3 * 60 * 60 * 1000;
    const moscowTime = new Date(date.getTime() + moscowOffset);

    const year = moscowTime.getUTCFullYear();
    const month = String(moscowTime.getUTCMonth() + 1).padStart(2, '0');
    const day = String(moscowTime.getUTCDate()).padStart(2, '0');
    const hours = String(moscowTime.getUTCHours()).padStart(2, '0');
    const minutes = String(moscowTime.getUTCMinutes()).padStart(2, '0');

    return `${year}-${month}-${day}T${hours}:${minutes}`;
}
</script>

<template>
<form class="comments-form component"  @submit.prevent="submitForm">
  <div class="comments-form__form-report form-report">
      <p class="form-report__placeholder">Name:</p>
      <input type="text" class="form-report__name" v-model="commentAuthor" />
  </div>
  <div class="comments-form__form-report form-report">
      <textarea  class="form-report__message" placeholder="Problem description..." v-model="commentText"></textarea>
  </div>
  <button class="component-form__send-btn send-btn" type="submit">Send comment</button>
</form>
</template>

<style scoped lang="scss">
.comments-form {
    margin: 30px 0 30px 0;
    padding: 13px 31px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 24px;

    &__form-report{
        display: flex;
        background: #8D8D8D;
        border-radius: 11px;
        margin: 0 17px 10px 17px;
        padding: 8px 11px;
        width: 100%;
    }

    .form-report{
        &__placeholder{
            margin-right: 5px;
        }
        &__name{
            background: none;
            width: 100%;
        }
        &__message {
            width: 100% !important;
            min-height: 237px;
            overflow: hidden;
            box-sizing: border-box;
            word-wrap: break-word;
        }
    }
    &__send-btn {
        margin: auto;
        border-radius: 11px;
        max-width: 160px;
        width: 100%;
        background: #E3F3FE;
    }
}

@media (max-width: 630px) {
    .comments-form {
        border-radius: 0 20px 20px 2px;
    }
}
</style>