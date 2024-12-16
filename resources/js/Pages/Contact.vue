<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import AOS from 'aos';
import { onMounted, ref } from 'vue';
import '../../css/bootstrap-app.css';
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

    <Head title="FPT Telecom - FPT Business" />
    <Header />
    <main class="main">
        <div class="mt-10">
            <Contact />
        </div>
    </main>
    <Footer />
    <ContactAction />
    <Spinner />
</template>
