<template>
    <!-- About Section -->
    <section id="about" class="about section">
        <div class="container" data-aos="fade-up" data-aos-delay="100">
            <div class="row gy-4 align-items-center justify-content-between">
                <div class="col-xl-5" data-aos="fade-up" data-aos-delay="200">
                    <span class="about-meta">{{ $t('message.contact') }}</span>
                    <h2 class="about-title">{{ $t('companyMembership') }}</h2>
                    <p class="about-description">{{ $t('companyMission') }}</p>
                    <div class="row feature-list-wrapper">
                        <div class="col-md-6">
                            <ul class="feature-list">
                                <li><i class="bi bi-check-circle-fill"></i> {{ $t('servicesTelecomInfrastructure') }}
                                </li>
                                <li><i class="bi bi-check-circle-fill"></i> {{ $t('servicesValueAdded') }}</li>
                                <li><i class="bi bi-check-circle-fill"></i> {{ $t('servicesPaidTv') }}</li>
                            </ul>
                        </div>
                        <div class="col-md-6">
                            <ul class="feature-list">
                                <li><i class="bi bi-check-circle-fill"></i> {{ $t('servicesMobileServices') }}</li>
                                <li><i class="bi bi-check-circle-fill"></i> {{ $t('servicesNetworkInfrastructure') }}</li>
                                <li><i class="bi bi-check-circle-fill"></i> {{ $t('servicesImportExport') }}</li>
                                <li><i class="bi bi-check-circle-fill"></i> {{ $t('servicesOthers') }}</li>
                            </ul>
                        </div>
                    </div>

                    <div class="info-wrapper">
                        <div class="row gy-4">
                            <div class="col-lg-5">
                                <div class="profile d-flex align-items-center gap-3">
                                    <img src="/images/female.jpg" alt="CEO Profile" class="profile-image">
                                    <div>
                                        <h4 class="profile-name">Ngoc Anh</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-7">
                                <div class="contact-info d-flex align-items-center gap-2">
                                    <i class="bi bi-telephone-fill"></i>
                                    <div>
                                        <p class="contact-label">{{ $t('message.callUsAnytime') }}</p>
                                        <p class="contact-number"><a href="tel:0909873192">0909873192</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-6" data-aos="fade-up" data-aos-delay="300">
                    <div class="image-wrapper">
                        <div class="images position-relative" data-aos="zoom-out" data-aos-delay="400">
                            <img src="images/employer.jpg" alt="Business Meeting"
                                class="img-fluid main-image rounded-4">
                            <img src="images/fpt-telecom.webp" alt="Team Discussion"
                                class="img-fluid small-image rounded-4">
                        </div>
                        <div class="experience-badge floating">
                            <h3>35<sup>+</sup><span>{{ $t('message.years') }}</span></h3>
                            <p>{{ $t('message.experienceInTelecommunicationService') }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section><!-- /About Section -->
</template>