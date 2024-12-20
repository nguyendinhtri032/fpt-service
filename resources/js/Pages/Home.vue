<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import AOS from 'aos';
import { onMounted } from 'vue';
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
import Contact from '@/Components/Home/Contact.vue';
import About from '@/Components/Home/About.vue';
import CallToAction from '@/Components/Home/CallToAction.vue';
import Stats from '@/Components/Home/Stats.vue';
import CarouselIT from '@/Components/Home/CarouselIT.vue';
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
        <CarouselIT />
        <Hero />
        <Stats />
        <About />
        <Feature />
        <Card />
        <CallToAction />
        <ServiceIT />
        <Contact />
    </main>
    <Footer />
    <ContactAction />
    <Spinner />
</template>
