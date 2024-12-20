<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import AOS from 'aos';
import { onMounted } from 'vue';
import '../../css/bootstrap-app.css';
import Header from '@/Components/Home/Header.vue';
import Spinner from '@/Components/Home/Spinner.vue';
import ServiceIT from '@/Components/Home/ServiceIT.vue';
import Footer from '@/Components/Home/Footer.vue';
import ContactAction from '@/Components/Home/ContactAction.vue';
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
        <div class="mt-10">
            <CarouselIT />
            <ServiceIT />
        </div>
    </main>
    <Footer />
    <ContactAction />
    <Spinner />
</template>
