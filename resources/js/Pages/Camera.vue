<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import AOS from 'aos';
import { onMounted, ref } from 'vue';
import '../../css/bootstrap-app.css';
import Carousel from '@/Components/Home/Carousel.vue';
import Hero from '@/Components/Home/Hero.vue';
import Header from '@/Components/Home/Header.vue';
import Feature from '@/Components/Home/Feature.vue';
import Spinner from '@/Components/Home/Spinner.vue';
import ServiceIT from '@/Components/Home/ServiceIT.vue';
import Card from '@/Components/Home/Card.vue';
import Footer from '@/Components/Home/Footer.vue';
import ContactAction from '@/Components/Home/ContactAction.vue';
defineProps<{
}>();




onMounted(() => {
    import('../app.js');
    AOS.init({
        duration: 500,
        easing: 'ease',
        once: true,
    });
});
</script>
<template>

    <Head title="FPT Telecom - FPT Business" />
    <Header />
    <main class="main">

    </main>
    <Footer />
    <ContactAction />
    <Spinner />
</template>
