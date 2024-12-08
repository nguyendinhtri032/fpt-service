<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
</script>

<template>
    <!-- Pricing Section -->
    <section id="pricing" class="pricing section light-background">

        <!-- Section Title -->
        <div class="container section-title" data-aos="fade-up">
            <h2>{{ $t('message.price') }}</h2>
            <p>{{ $t('message.outsourcingItServices') }}</p>
        </div><!-- End Section Title -->

        <div class="container" data-aos="fade-up" data-aos-delay="100">

            <div class="row g-4 justify-content-center">

                <!-- Basic Plan -->
                <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                    <div class="pricing-card">
                        <h3>Gói Basic</h3>
                        <div class="price">
                            <!-- <span class="currency">VND</span> -->
                            <span class="amount">990K</span>
                            <span class="period">/ tháng</span>
                        </div>
                        <p class="description">Duy trì hệ thống CNTT ổn định, hỗ trợ xử lý sự cố từ xa..</p>

                        <h4>{{  $t('message.featuredIncluded') }}:</h4>
                        <ul class="features-list">
                            <li>
                                <i class="bi bi-check-circle-fill"></i>
                                Ổn định hệ thống CNTT.
                            </li>
                            <li>
                                <i class="bi bi-check-circle-fill"></i>
                                Xây dựng giải pháp bảo vệ an toàn dữ liệu.
                            </li>
                            <li>
                                <i class="bi bi-check-circle-fill"></i>
                                Hỗ trợ tận nơi & từ xa
                            </li>
                        </ul>

                        <a href="#" class="btn btn-primary">
                            {{ $t('message.registerNow') }}
                            <i class="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>

                <!-- Standard Plan -->
                <div class="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                    <div class="pricing-card popular">
                        <div class="popular-badge">{{ $t('message.mostPopular') }}</div>
                        <h3>Gói Pro</h3>
                        <div class="price">
                            <!-- <span class="currency">VND</span> -->
                            <span class="amount">990K</span>
                            <span class="period">/ tháng</span>
                        </div>
                        <p class="description">Tăng cường bảo mật dữ liệu, hỗ trợ tận nơi và từ xa không giới hạn.</p>

                        <h4>{{  $t('message.featuredIncluded') }}:</h4>
                        <ul class="features-list">
                            <li>
                                <i class="bi bi-check-circle-fill"></i>
                                Ổn định hệ thống CNTT.
                            </li>
                            <li>
                                <i class="bi bi-check-circle-fill"></i>
                                Xây dựng giải pháp bảo vệ an toàn dữ liệu.
                            </li>
                            <li>
                                <i class="bi bi-check-circle-fill"></i>
                                Hỗ trợ tận nơi & từ xa
                            </li>
                        </ul>

                        <Link :href="route('contact')" class="btn btn-light">
                            {{ $t('message.registerNow') }}
                            <i class="bi bi-arrow-right"></i>
                        </Link>
                    </div>
                </div>

                <!-- Premium Plan -->
                <div class="col-lg-4" data-aos="fade-up" data-aos-delay="300">
                    <div class="pricing-card popular">
                        <div class="popular-badge">{{ $t('message.mostPopular') }}</div>
                        <h3>Gói VIP</h3>
                        <div class="price">
                            <span class="amount">Liên hệ</span>
                            <!-- <span class="period">/ month</span> -->
                        </div>
                        <p class="description">Giải pháp toàn diện, ưu tiên hỗ trợ 24/7, bảo đảm an toàn và hiệu suất tối đa.</p>

                        <h4>{{  $t('message.featuredIncluded') }}:</h4>
                        <ul class="features-list">
                            <li>
                                <i class="bi bi-check-circle-fill"></i>
                                Ổn định hệ thống CNTT.
                            </li>
                            <li>
                                <i class="bi bi-check-circle-fill"></i>
                                Xây dựng giải pháp bảo vệ an toàn dữ liệu.
                            </li>
                            <li>
                                <i class="bi bi-check-circle-fill"></i>
                                Hỗ trợ tận nơi & từ xa
                            </li>
                        </ul>

                        <a href="#" class="btn btn-primary">
                            {{ $t('message.registerNow') }}
                            <i class="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>

            </div>

        </div>

    </section><!-- /Pricing Section -->
</template>