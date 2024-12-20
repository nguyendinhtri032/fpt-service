<template>
    <header id="header" class="header d-flex align-items-center fixed-top">
        <div
            class="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
            <Link href="/" class="logo d-flex align-items-center me-auto me-xl-0">
            <h1 class="sitename"><img src="/images/fpt-tel.svg" alt=""></h1>
            </Link>
            <nav id="navmenu" class="navmenu">
                <ul>
                    <li>
                        <Link href="/" :class="{ active: route().current() === 'home' }">{{ $t('message.home') }}</Link>
                    </li>
                    <li>
                        <Link href="/dich-vu-it" :class="{ active: route().current() === 'it' }">{{
                            $t('message.it') }}</Link>
                    </li>
                    <li>
                        <Link href="/dich-vu-internet" :class="{ active: route().current() === 'internet' }">{{
                            $t('message.internet') }}</Link>
                    </li>
                    <!-- <li>
                        <Link href="/camera" :class="{ active: route().current() === 'camera' }">{{ $t('message.camera')
                        }}</Link>
                    </li>
                    <li>
                        <Link href="/tin-tuc" :class="{ active: route().current() === 'tin-tuc' }">{{ $t('message.news')
                        }}</Link>
                    </li> -->
                    <li>
                        <Link href="/lien-he" :class="{ active: route().current() === 'contact' }">{{
                            $t('message.contact') }}</Link>
                    </li>
                </ul>


                <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
            </nav>

            <button class="btn-getstarted" :class="{ hidden: language === 'vi' }" href="index.html#about"
                @click="changeLanguage('vi')">
                <img src="/images/vi.png" alt="flag-vi" style="border-radius: 10px;" width="50px" height="25px">
            </button>
            <button class="btn-getstarted" :class="{ hidden: language === 'en' }" href="index.html#about"
                @click="changeLanguage('en')">
                <img src="/images/en.png" alt="flag-en" style="border-radius: 10px;" width="50px" height="25px">
            </button>
        </div>
    </header>
</template>
<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const language = ref('vi');
const changeLanguage = (lang: string) => {
    language.value = lang;
    locale.value = lang;
};
</script>