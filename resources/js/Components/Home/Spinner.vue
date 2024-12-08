<script setup lang="ts">
import { onMounted, ref } from 'vue';
const isLoading = ref(true);
onMounted(() => {
    setTimeout(() => {
        isLoading.value = false;
    }, 1000);
});
</script>

<template>
    <div class="loadingspinner-container" v-if="isLoading">
        <img class="mb-15" src="/images/fpt-tel.svg" alt="">
        <div class="loadingspinner">
            <div id="square1"></div>
            <div id="square2"></div>
            <div id="square3"></div>
            <div id="square4"></div>
            <div id="square5"></div>
        </div>
    </div>
</template>