<script setup lang="ts">
const props = defineProps({
    author: String,
    message: String,
    date: String
})


const currentDate = new Date();
const commentDate = new Date(props.date);
let formattedDate = '';

if (
    currentDate.getDate() === commentDate.getDate() &&
    currentDate.getMonth() === commentDate.getMonth() &&
    currentDate.getFullYear() === commentDate.getFullYear()
) {
    // Если дата сегодня, отображаем только время
    formattedDate = commentDate.toLocaleTimeString().slice(0, -3);
} else {
    // Иначе отображаем полную дату и время
    formattedDate = commentDate.toLocaleString().slice(0, -3);
}
</script>

<template>
    <div class="comment">
        <p class="comment__name">{{author}}</p>
        <p class="comment__message">{{message}}</p>
        <p class="comment__date">{{formattedDate}}</p>
    </div>
</template>

<style scoped lang="scss">
  .comment {
      background: #8D8D8D;
      border-radius: 0 20px 20px 20px;
      padding: 5px 13px;
      margin: 14px 0;

      &__name {
          font-size: 20px;
      }

      &__date {
        text-align: right;
        color: #1a1a1a;
      }
  }
</style>