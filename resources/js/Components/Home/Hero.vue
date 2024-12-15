<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
</script>

<template>
    <!-- Hero Section -->
    <section id="hero" class="hero section" style="padding-top: 20px !important;">
        <div class="container" data-aos="fade-up" data-aos-delay="100">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="hero-content" data-aos="fade-up" data-aos-delay="200">
                        <div class="company-badge mb-4">
                            <i class="bi bi-globe2 me-2"></i> 
                            {{ $t('message.togetherTowardsSuccess') }}
                        </div>

                        <h1 class="mb-4">
                            {{ $t('message.solution') }}<br>

                            <span class="accent-text">Internet</span><br>
                            {{ $t('message.exclusiveForBusinesses') }}
                        </h1>

                        <p class="mb-4 mb-md-5 text-justify">
                            <i class="bi bi-check2-all"></i> {{ $t('message.wifi') }}<br>
                            <i class="bi bi-check2-all"></i> {{ $t('message.noAdditionalApNeeded') }} <br>
                            <i class="bi bi-check2-all"></i> {{ $t('message.packageLossRateReduced') }}
                        </p>

                        <div class="hero-buttons">
                            <Link :href="route('contact')" class="btn btn-primary me-0 me-sm-2 mx-1">
                                {{ $t('message.registerNow') }}
                            </Link>
                            <a href="https://www.youtube.com/watch?v=gxkitkfHmxU"
                                class="btn btn-link mt-2 mt-sm-0 glightbox">
                                <i class="bi bi-play-circle me-1"></i>
                                {{ $t('message.playVideo') }}
                            </a>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="hero-image" data-aos="zoom-out" data-aos-delay="300">
                        <img src="/images/2.png" alt="Hero Image" class="img-fluid hero-image-custom">

                        <div class="customers-badge">
                            <div class="customer-avatars">
                                <img src="assets/img/avatar-1.webp" alt="Customer 1" class="avatar">
                                <img src="assets/img/avatar-2.webp" alt="Customer 2" class="avatar">
                                <img src="assets/img/avatar-3.webp" alt="Customer 3" class="avatar">
                                <img src="assets/img/avatar-4.webp" alt="Customer 4" class="avatar">
                                <img src="assets/img/avatar-5.webp" alt="Customer 5" class="avatar">
                                <span class="avatar more">12+</span>
                            </div>
                            <p class="mb-0 mt-2">
                                {{ $t('message.coverageExpanded25') }} <br>
                                {{ $t('message.supports30Devices') }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- <div class="row stats-row gy-4 mt-5" data-aos="fade-up" data-aos-delay="500">
                    <div class="col-lg-3 col-md-6">
                        <div class="stat-item">
                            <div class="stat-icon">
                                <i class="bi bi-trophy"></i>
                            </div>
                            <div class="stat-content">
                                <h4>1000+</h4>
                                <p class="mb-0">{{ $t('message.corporateClients') }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="stat-item">
                            <div class="stat-icon">
                                <i class="bi bi-briefcase"></i>
                            </div>
                            <div class="stat-content">
                                <h4>63</h4>
                                <p class="mb-0">{{ $t('message.coverageAcrossProvincesAndCities') }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="stat-item">
                            <div class="stat-icon">
                                <i class="bi bi-graph-up"></i>
                            </div>
                            <div class="stat-content">
                                <h4>1400+</h4>
                                <p class="mb-0">{{ $t('message.personnel') }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="stat-item">
                            <div class="stat-icon">
                                <i class="bi bi-award"></i>
                            </div>
                            <div class="stat-content">
                                <h4>35+</h4>
                                <p class="mb-0">{{ $t('message.experience') }}</p>
                            </div>
                        </div>
                    </div>
                </div> -->

        </div>

    </section><!-- /Hero Section -->
</template>