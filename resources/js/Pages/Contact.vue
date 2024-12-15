<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import AOS from 'aos';
import { onMounted, ref } from 'vue';
import '../../css/bootstrap-app.css';
import Carousel from '@/Components/Home/Carousel.vue';
import Hero from '@/Components/Home/Hero.vue';
import Header from '@/Components/Home/Header.vue';
import Spinner from '@/Components/Home/Spinner.vue';
import Contact from '@/Components/Home/Contact.vue';
import ContactAction from '@/Components/Home/ContactAction.vue';
import Footer from '@/Components/Home/Footer.vue';
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

    <Head title="FPT Telecom" />
    <Header />
    <main class="main">
        <Carousel />
        <Hero />
        <Contact />
    </main>
    <Footer />
    <ContactAction />
    <Spinner />
</template>
