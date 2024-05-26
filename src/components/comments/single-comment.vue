<script setup lang="ts">
const props = defineProps({
    author: String,
    message: String
})
</script>

<template>
    <div class="comment">
        <p class="comment__name">{{author}}</p>
        <p class="comment__message">{{message}}</p>
    </div>
</template>

<style scoped lang="scss">
  .comment {
      background: #8D8D8D;
      border-radius: 0 20px 20px 20px;
      padding: 5px;
      margin: 14px 0;
  }
</style>