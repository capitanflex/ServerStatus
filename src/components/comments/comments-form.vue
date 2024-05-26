<script setup lang="ts">

</script>

<template>
<div class="comments-form component">
    <div class="comments-form__form-report form-report">
        <p class="form-report__placeholder">Name:</p>
        <input type="text" class="form-report__name">
    </div>
    <div class="comments-form__form-report form-report">
        <textarea  class="form-report__message" placeholder="Problem description..."></textarea>
    </div>
    <button class="component-form__send-btn send-btn">Send comment</button>
</div>
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