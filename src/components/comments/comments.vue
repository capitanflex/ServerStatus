<script setup lang="ts">

import CommentsForm from "@/components/comments/comments-form.vue";
import CommentsRead from "@/components/comments/comments-read.vue";
</script>

<template>
  <div class="comments">
    <comments-form/>
    <comments-read/>
  </div>
</template>

<style scoped lang="scss">
  .comments {
    height: 100vh;
    width: 330px;
    margin-right: 30px;
  }

  @media (max-width: 630px) {
      .comments {
          height: 100vh;
          width: 100%;
          margin-right: 30px;
      }
  }
</style>