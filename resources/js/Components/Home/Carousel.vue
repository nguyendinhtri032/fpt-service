<script setup lang="ts">
import Swiper from 'swiper';
import { onMounted } from 'vue';
onMounted(() => {
    const swiper = new Swiper('.init-swiper', {
        loop: true,
        speed: 600,
        autoplay: {
            delay: 3000,
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
    <section id="clients" class="clients section position-relative swiper-custom" style="padding: 0px !important;">
        <div class="" data-aos="fade-up" data-aos-delay="100">
            <div class="swiper init-swiper">
                <div class="swiper-wrapper align-items-center">
                    <div class="swiper-slide"><img src="/images/swiper/banner1.webp" class="img-fluid" alt="">
                    </div>
                    <div class="swiper-slide"><img src="/images/swiper/banner2.jpg" class="img-fluid" alt="">
                    </div>
                    <div class="swiper-slide"><img src="/images/swiper/banner3.webp" class="img-fluid" alt="">
                    </div>
                    <div class="swiper-slide"><img src="/images/swiper/banner4.webp" class="img-fluid" alt="">
                    </div>
                </div>
                <!-- <div class="swiper-pagination"></div> -->
            </div>
        </div>
    </section><!-- /Clients Section -->
</template>