
<template>
    <div class="side-bar">
        <div class="side-bar__logo logo">
            <h1 class="logo__abbr">GS</h1>
            <h2 class="logo__subtitle subtitle">Game Status</h2>
            <h2 class="logo__subtitle subtitle">Servers tracking</h2>
        </div>

    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.side-bar {
    min-width: 230px;
    height: 100vh;

}

.logo {
    &__abbr {
        font-size: 128px;
        margin: 40px 20px 0 10px;
    }

    &__subtitle {
        margin: -10px 0 0 14px;
        font-size: 24px;
        display: block;
    }
}

@media (max-width: 630px) {
    .side-bar {
        min-width: 145px;
    }
    .logo {
        &__abbr {
            font-size: 84px;
            margin: 40px 20px 0 10px;
        }

        &__subtitle {
            margin: -10px 0 0 14px;
            font-size: 18px;
            display: block;
        }
    }
}

@media (max-width: 530px) {
   .side-bar {
       height: unset;

       &__logo {
           display: flex;
           align-items: flex-end;
       }
   }
    .logo {
        &__abbr {
            margin: 0 0 0 40px;
        }
        &__subtitle {
            margin: -10px 0 25px 14px;
        }
    }
}

</style>