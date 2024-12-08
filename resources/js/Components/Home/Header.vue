<template>
    <header id="header" class="header d-flex align-items-center fixed-top">
        <div
            class="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

            <a href="#" class="logo d-flex align-items-center me-auto me-xl-0">
                <h1 class="sitename"><img src="/images/fpt-tel.svg" alt=""></h1>
            </a>
            <nav id="navmenu" class="navmenu">
                <ul>
                    <li><a href="#hero" class="active">{{ $t('message.home') }}</a></li>
                    <li><a href="#about">{{ $t('message.about') }}</a></li>
                    <li><a href="#features">{{ $t('message.features') }}</a></li>
                    <li><a href="#services">{{ $t('message.services') }}</a></li>
                    <li><a href="#pricing">{{ $t('message.pricing') }}</a></li>
                    <li class="dropdown"><a href="#"><span>{{ $t('message.dropdown') }}</span> <i
                                class="bi bi-chevron-down toggle-dropdown"></i></a>
                        <ul>
                            <li><a href="#">Dropdown 1</a></li>
                            <li class="dropdown"><a href="#"><span>{{ $t('message.deepDropdown') }}</span> <i
                                        class="bi bi-chevron-down toggle-dropdown"></i></a>
                                <ul>
                                    <li><a href="#">Deep Dropdown 1</a></li>
                                    <li><a href="#">Deep Dropdown 2</a></li>
                                    <li><a href="#">Deep Dropdown 3</a></li>
                                    <li><a href="#">Deep Dropdown 4</a></li>
                                    <li><a href="#">Deep Dropdown 5</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Dropdown 2</a></li>
                            <li><a href="#">Dropdown 3</a></li>
                            <li><a href="#">Dropdown 4</a></li>
                        </ul>
                    </li>
                    <li><a href="#contact">{{ $t('message.contact') }}</a></li>
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
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const language = ref('vi');
const changeLanguage = (lang: string) => {
    language.value = lang;
    locale.value = lang;
};
</script>