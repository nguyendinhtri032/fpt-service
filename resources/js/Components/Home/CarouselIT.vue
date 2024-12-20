<script setup lang="ts">
import { Swiper } from 'swiper';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { onMounted } from 'vue';

onMounted(() => {
    // Register Swiper modules
    Swiper.use([Autoplay, Pagination, EffectFade]);

    const swiper = new Swiper('.init-swiper', {
        loop: true,
        speed: 1000,
        modules: [Autoplay, Pagination, EffectFade],
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        effect: 'fade',
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            992: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
        },
    });
});
</script>
<template>
    <!-- Clients Section -->
    <section id="clients" class="clients section position-relative swiper-custom mt-20" style="padding: 0px !important;">
        <div class="" data-aos="fade-up" data-aos-delay="100">
            <div class="swiper init-swiper">
                <div class="swiper-wrapper align-items-center">
                    <div class="swiper-slide"><img src="/images/swiper/it-basic.jpg" class="img-fluid" alt="">
                    </div>
                    <div class="swiper-slide"><img src="/images/swiper/it-pro.jpg" class="img-fluid" alt="">
                    </div>
                    <div class="swiper-slide"><img src="/images/swiper/it-vip.jpg" class="img-fluid" alt="">
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
    </section><!-- /Clients Section -->
</template>