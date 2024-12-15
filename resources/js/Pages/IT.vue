<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import AOS from 'aos';
import { onMounted, ref } from 'vue';
import '../../css/bootstrap-app.css';
import Carousel from '@/Components/Home/Carousel.vue';
import Hero from '@/Components/Home/Hero.vue';
import Header from '@/Components/Home/Header.vue';
import Feature from '@/Components/Home/Feature.vue';
import Spinner from '@/Components/Home/Spinner.vue';
import ServiceIT from '@/Components/Home/ServiceIT.vue';
import Card from '@/Components/Home/Card.vue';
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

    <Head title="FPT Telecom" />
    <Header />
    <main class="main">
        <Carousel />
        <Hero />
        <!-- Stats Section -->
        <section id="stats" class="stats section">
            <div class="container" data-aos="fade-up" data-aos-delay="100">
                <div class="row gy-4">
                    <div class="col-lg-3 col-md-6">
                        <div class="stats-item text-center w-100 h-100">
                            <div class="d-inline-flex">
                                <span data-purecounter-start="0" data-purecounter-end="1000"
                                    data-purecounter-duration="1" class="purecounter"></span>+
                            </div>
                            <p>{{ $t('message.corporateClients') }}</p>
                        </div>
                    </div><!-- End Stats Item -->
                    <div class="col-lg-3 col-md-6">
                        <div class="stats-item text-center w-100 h-100">
                            <span data-purecounter-start="0" data-purecounter-end="63" data-purecounter-duration="1"
                                class="purecounter"></span>
                            <p>{{ $t('message.coverageAcrossProvincesAndCities') }}</p>
                        </div>
                    </div><!-- End Stats Item -->
                    <div class="col-lg-3 col-md-6">
                        <div class="stats-item text-center w-100 h-100">
                            <div class="d-inline-flex">
                                <span data-purecounter-start="0" data-purecounter-end="1400"
                                    data-purecounter-duration="1" class="purecounter"></span>
                                +
                            </div>
                            <p>{{ $t('message.personnel') }}</p>
                        </div>
                    </div><!-- End Stats Item -->
                    <div class="col-lg-3 col-md-6">
                        <div class="stats-item text-center w-100 h-100">
                            <div class="d-inline-flex">
                                <span data-purecounter-start="0" data-purecounter-end="35" data-purecounter-duration="1"
                                    class="purecounter"></span>+
                            </div>
                            <p>{{ $t('message.experience') }}</p>
                        </div>
                    </div>
                </div>
            </div>

        </section><!-- /Stats Section -->
        <!-- About Section -->
        <section id="about" class="about section">
            <div class="container" data-aos="fade-up" data-aos-delay="100">
                <div class="row gy-4 align-items-center justify-content-between">
                    <div class="col-xl-5" data-aos="fade-up" data-aos-delay="200">
                        <span class="about-meta">{{  $t('')  }}</span>
                        <h2 class="about-title">{{ $t('companyMembership')  }}</h2>
                        <p class="about-description">{{ $t('companyMission')  }}</p>
                        <div class="row feature-list-wrapper">
                            <div class="col-md-6">
                                <ul class="feature-list">
                                    <li><i class="bi bi-check-circle-fill"></i> {{ $t('servicesTelecomInfrastructure') }}</li>
                                    <li><i class="bi bi-check-circle-fill"></i> {{ $t('servicesValueAdded') }}</li>
                                    <li><i class="bi bi-check-circle-fill"></i> {{ $t('servicesPaidTv')  }}</li>
                                </ul>
                            </div>
                            <div class="col-md-6">
                                <ul class="feature-list">
                                    <li><i class="bi bi-check-circle-fill"></i> {{ $t('servicesMobileServices') }}</li>
                                    <li><i class="bi bi-check-circle-fill"></i> {{$t('servicesNetworkInfrastructure')}}</li>
                                    <li><i class="bi bi-check-circle-fill"></i> {{ $t('servicesImportExport') }}</li>
                                    <li><i class="bi bi-check-circle-fill"></i> {{ $t('servicesOthers') }}</li>
                                </ul>
                            </div>
                        </div>

                        <div class="info-wrapper">
                            <div class="row gy-4">
                                <div class="col-lg-5">
                                    <div class="profile d-flex align-items-center gap-3">
                                        <img src="assets/img/avatar-1.webp" alt="CEO Profile" class="profile-image">
                                        <div>
                                            <h4 class="profile-name">Mario Smith</h4>
                                            <p class="profile-position">CEO &amp; Founder</p>
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
                                <h3>35<sup>+</sup><span>{{ $t('message.years')}}</span></h3>
                                <p>{{  $t('message.experienceInTelecommunicationService') }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section><!-- /About Section -->

        <Feature />
        <Card />

        <!-- Features 2 Section -->
        <section id="features-2" class="features-2 section">

            <div class="container" data-aos="fade-up" data-aos-delay="100">

                <div class="row align-items-center">

                    <div class="col-lg-4">

                        <div class="feature-item text-end mb-5" data-aos="fade-right" data-aos-delay="200">
                            <div class="d-flex align-items-center justify-content-end gap-4">
                                <div class="feature-content">
                                    <h3>Use On Any Device</h3>
                                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                                        Curae; In ac dui quis mi consectetuer lacinia.</p>
                                </div>
                                <div class="feature-icon flex-shrink-0">
                                    <i class="bi bi-display"></i>
                                </div>
                            </div>
                        </div><!-- End .feature-item -->

                        <div class="feature-item text-end mb-5" data-aos="fade-right" data-aos-delay="300">
                            <div class="d-flex align-items-center justify-content-end gap-4">
                                <div class="feature-content">
                                    <h3>Feather Icons</h3>
                                    <p>Phasellus ullamcorper ipsum rutrum nunc nunc nonummy metus vestibulum volutpat
                                        sapien arcu sed augue aliquam erat volutpat.</p>
                                </div>
                                <div class="feature-icon flex-shrink-0">
                                    <i class="bi bi-feather"></i>
                                </div>
                            </div>
                        </div><!-- End .feature-item -->

                        <div class="feature-item text-end" data-aos="fade-right" data-aos-delay="400">
                            <div class="d-flex align-items-center justify-content-end gap-4">
                                <div class="feature-content">
                                    <h3>Retina Ready</h3>
                                    <p>Aenean tellus metus bibendum sed posuere ac mattis non nunc vestibulum fringilla
                                        purus sit amet fermentum aenean commodo.</p>
                                </div>
                                <div class="feature-icon flex-shrink-0">
                                    <i class="bi bi-eye"></i>
                                </div>
                            </div>
                        </div><!-- End .feature-item -->

                    </div>

                    <div class="col-lg-4" data-aos="zoom-in" data-aos-delay="200">
                        <div class="phone-mockup text-center">
                            <img src="assets/img/phone-app-screen.webp" alt="Phone Mockup" class="img-fluid">
                        </div>
                    </div><!-- End Phone Mockup -->

                    <div class="col-lg-4">

                        <div class="feature-item mb-5" data-aos="fade-left" data-aos-delay="200">
                            <div class="d-flex align-items-center gap-4">
                                <div class="feature-icon flex-shrink-0">
                                    <i class="bi bi-code-square"></i>
                                </div>
                                <div class="feature-content">
                                    <h3>W3c Valid Code</h3>
                                    <p>Donec vitae sapien ut libero venenatis faucibus nullam quis ante etiam sit amet
                                        orci eget eros faucibus tincidunt.</p>
                                </div>
                            </div>
                        </div><!-- End .feature-item -->

                        <div class="feature-item mb-5" data-aos="fade-left" data-aos-delay="300">
                            <div class="d-flex align-items-center gap-4">
                                <div class="feature-icon flex-shrink-0">
                                    <i class="bi bi-phone"></i>
                                </div>
                                <div class="feature-content">
                                    <h3>Fully Responsive</h3>
                                    <p>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit amet
                                        adipiscing sem neque sed ipsum.</p>
                                </div>
                            </div>
                        </div><!-- End .feature-item -->

                        <div class="feature-item" data-aos="fade-left" data-aos-delay="400">
                            <div class="d-flex align-items-center gap-4">
                                <div class="feature-icon flex-shrink-0">
                                    <i class="bi bi-browser-chrome"></i>
                                </div>
                                <div class="feature-content">
                                    <h3>Browser Compatibility</h3>
                                    <p>Nullam dictum felis eu pede mollis pretium integer tincidunt cras dapibus vivamus
                                        elementum semper nisi aenean vulputate.</p>
                                </div>
                            </div>
                        </div><!-- End .feature-item -->

                    </div>
                </div>

            </div>

        </section><!-- /Features 2 Section -->

        <!-- Call To Action Section -->
        <section id="call-to-action" class="call-to-action section">

            <div class="container" data-aos="fade-up" data-aos-delay="100">

                <div class="row content justify-content-center align-items-center position-relative">
                    <div class="col-lg-8 mx-auto text-center">
                        <h2 class="display-4 mb-4">Maecenas tempus tellus eget condimentum</h2>
                        <p class="mb-4">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                            Curae; Donec velit neque, auctor sit amet aliquam vel</p>
                        <a href="#" class="btn btn-cta">Call To Action</a>
                    </div>

                    <!-- Abstract Background Elements -->
                    <div class="shape shape-1">
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M47.1,-57.1C59.9,-45.6,68.5,-28.9,71.4,-10.9C74.2,7.1,71.3,26.3,61.5,41.1C51.7,55.9,35,66.2,16.9,69.2C-1.3,72.2,-21,67.8,-36.9,57.9C-52.8,48,-64.9,32.6,-69.1,15.1C-73.3,-2.4,-69.5,-22,-59.4,-37.1C-49.3,-52.2,-32.8,-62.9,-15.7,-64.9C1.5,-67,34.3,-68.5,47.1,-57.1Z"
                                transform="translate(100 100)"></path>
                        </svg>
                    </div>

                    <div class="shape shape-2">
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M41.3,-49.1C54.4,-39.3,66.6,-27.2,71.1,-12.1C75.6,3,72.4,20.9,63.3,34.4C54.2,47.9,39.2,56.9,23.2,62.3C7.1,67.7,-10,69.4,-24.8,64.1C-39.7,58.8,-52.3,46.5,-60.1,31.5C-67.9,16.4,-70.9,-1.4,-66.3,-16.6C-61.8,-31.8,-49.7,-44.3,-36.3,-54C-22.9,-63.7,-8.2,-70.6,3.6,-75.1C15.4,-79.6,28.2,-58.9,41.3,-49.1Z"
                                transform="translate(100 100)"></path>
                        </svg>
                    </div>

                    <!-- Dot Pattern Groups -->
                    <div class="dots dots-1">
                        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <pattern id="dot-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                            </pattern>
                            <rect width="100" height="100" fill="url(#dot-pattern)"></rect>
                        </svg>
                    </div>

                    <div class="dots dots-2">
                        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <pattern id="dot-pattern-2" x="0" y="0" width="20" height="20"
                                patternUnits="userSpaceOnUse">
                                <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                            </pattern>
                            <rect width="100" height="100" fill="url(#dot-pattern-2)"></rect>
                        </svg>
                    </div>

                    <div class="shape shape-3">
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M43.3,-57.1C57.4,-46.5,71.1,-32.6,75.3,-16.2C79.5,0.2,74.2,19.1,65.1,35.3C56,51.5,43.1,65,27.4,71.7C11.7,78.4,-6.8,78.3,-23.9,72.4C-41,66.5,-56.7,54.8,-65.4,39.2C-74.1,23.6,-75.8,4,-71.7,-13.2C-67.6,-30.4,-57.7,-45.2,-44.3,-56.1C-30.9,-67,-15.5,-74,0.7,-74.9C16.8,-75.8,33.7,-70.7,43.3,-57.1Z"
                                transform="translate(100 100)"></path>
                        </svg>
                    </div>
                </div>

            </div>

        </section><!-- /Call To Action Section -->



        <!-- Testimonials Section -->
        <section id="testimonials" class="testimonials section light-background">

            <!-- Section Title -->
            <div class="container section-title" data-aos="fade-up">
                <h2>Testimonials</h2>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div><!-- End Section Title -->

            <div class="container">

                <div class="row g-5">

                    <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <div class="testimonial-item">
                            <img src="assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt="">
                            <h3>Saul Goodman</h3>
                            <h4>Ceo &amp; Founder</h4>
                            <div class="stars">
                                <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                                    class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                                    class="bi bi-star-fill"></i>
                            </div>
                            <p>
                                <i class="bi bi-quote quote-icon-left"></i>
                                <span>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit
                                    rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                                    risus at semper.</span>
                                <i class="bi bi-quote quote-icon-right"></i>
                            </p>
                        </div>
                    </div><!-- End testimonial item -->

                    <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                        <div class="testimonial-item">
                            <img src="assets/img/testimonials/testimonials-2.jpg" class="testimonial-img" alt="">
                            <h3>Sara Wilsson</h3>
                            <h4>Designer</h4>
                            <div class="stars">
                                <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                                    class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                                    class="bi bi-star-fill"></i>
                            </div>
                            <p>
                                <i class="bi bi-quote quote-icon-left"></i>
                                <span>Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid
                                    cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet
                                    legam anim culpa.</span>
                                <i class="bi bi-quote quote-icon-right"></i>
                            </p>
                        </div>
                    </div><!-- End testimonial item -->

                    <div class="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                        <div class="testimonial-item">
                            <img src="assets/img/testimonials/testimonials-3.jpg" class="testimonial-img" alt="">
                            <h3>Jena Karlis</h3>
                            <h4>Store Owner</h4>
                            <div class="stars">
                                <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                                    class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                                    class="bi bi-star-fill"></i>
                            </div>
                            <p>
                                <i class="bi bi-quote quote-icon-left"></i>
                                <span>Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem
                                    veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint
                                    minim.</span>
                                <i class="bi bi-quote quote-icon-right"></i>
                            </p>
                        </div>
                    </div><!-- End testimonial item -->

                    <div class="col-lg-6" data-aos="fade-up" data-aos-delay="400">
                        <div class="testimonial-item">
                            <img src="assets/img/testimonials/testimonials-4.jpg" class="testimonial-img" alt="">
                            <h3>Matt Brandon</h3>
                            <h4>Freelancer</h4>
                            <div class="stars">
                                <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                                    class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                                    class="bi bi-star-fill"></i>
                            </div>
                            <p>
                                <i class="bi bi-quote quote-icon-left"></i>
                                <span>Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim
                                    fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem
                                    dolore labore illum veniam.</span>
                                <i class="bi bi-quote quote-icon-right"></i>
                            </p>
                        </div>
                    </div><!-- End testimonial item -->

                </div>

            </div>

        </section><!-- /Testimonials Section -->



        <!-- Services Section -->
        <section id="services" class="services section light-background">

            <!-- Section Title -->
            <div class="container section-title" data-aos="fade-up">
                <h2>Services</h2>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div><!-- End Section Title -->

            <div class="container" data-aos="fade-up" data-aos-delay="100">

                <div class="row g-4">

                    <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <div class="service-card d-flex">
                            <div class="icon flex-shrink-0">
                                <i class="bi bi-activity"></i>
                            </div>
                            <div>
                                <h3>Nesciunt Mete</h3>
                                <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus
                                    dolores iure perferendis tempore et consequatur.</p>
                                <a href="service-details.html" class="read-more">Read More <i
                                        class="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div><!-- End Service Card -->

                    <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                        <div class="service-card d-flex">
                            <div class="icon flex-shrink-0">
                                <i class="bi bi-diagram-3"></i>
                            </div>
                            <div>
                                <h3>Eosle Commodi</h3>
                                <p>Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque
                                    eum hic non ut nesciunt dolorem.</p>
                                <a href="service-details.html" class="read-more">Read More <i
                                        class="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div><!-- End Service Card -->

                    <div class="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                        <div class="service-card d-flex">
                            <div class="icon flex-shrink-0">
                                <i class="bi bi-easel"></i>
                            </div>
                            <div>
                                <h3>Ledo Markt</h3>
                                <p>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id
                                    voluptas adipisci eos earum corrupti.</p>
                                <a href="service-details.html" class="read-more">Read More <i
                                        class="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div><!-- End Service Card -->

                    <div class="col-lg-6" data-aos="fade-up" data-aos-delay="400">
                        <div class="service-card d-flex">
                            <div class="icon flex-shrink-0">
                                <i class="bi bi-clipboard-data"></i>
                            </div>
                            <div>
                                <h3>Asperiores Commodit</h3>
                                <p>Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea
                                    fuga sit provident adipisci neque.</p>
                                <a href="service-details.html" class="read-more">Read More <i
                                        class="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div><!-- End Service Card -->

                </div>

            </div>

        </section><!-- /Services Section -->

       <ServiceIT />

    </main>

    <footer id="footer" class="footer">

        <div class="container footer-top">
            <div class="row gy-4">
                <div class="col-lg-4 col-md-6 footer-about">
                    <a href="index.html" class="logo d-flex align-items-center">
                        <span class="sitename">FPT Telecom</span>
                    </a>
                    <div class="footer-contact pt-3">
                        <p> <strong>Address:</strong>
                            <a
                                href="https://www.google.com/maps/search/86+Road+Broklyn+Street,+600+New+York,+USA/@40.6897806,-74.0278086,12z/data=!3m1!4b1">
                                <p>124 Đường Sương Nguyệt Anh, Phường Bến Thành, </p>
                                <p>Quận 1, Thành phố Hồ Chí Minh</p>
                            </a>
                        </p>

                        <p><strong>Phone: </strong><a href="tel:0909873192">0909873192</a></p>
                        <p><strong>Email: </strong><a href="mailto:anhdtn23@fpt.com">
                                anhdtn23@fpt.com</a></p>
                    </div>
                    <div class="social-links d-flex mt-4">
                        <a href=""><i class="bi bi-twitter-x"></i></a>
                        <a href=""><i class="bi bi-facebook"></i></a>
                        <a href=""><i class="bi bi-instagram"></i></a>
                        <a href=""><i class="bi bi-linkedin"></i></a>
                    </div>
                </div>

                <div class="col-lg-2 col-md-3 footer-links">
                    <h4>Useful Links</h4>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Terms of service</a></li>
                        <li><a href="#">Privacy policy</a></li>
                    </ul>
                </div>

                <div class="col-lg-2 col-md-3 footer-links">
                    <h4>Our Services</h4>
                    <ul>
                        <li><a href="#">Web Design</a></li>
                        <li><a href="#">Web Development</a></li>
                        <li><a href="#">Product Management</a></li>
                        <li><a href="#">Marketing</a></li>
                        <li><a href="#">Graphic Design</a></li>
                    </ul>
                </div>

                <div class="col-lg-2 col-md-3 footer-links">
                    <h4>Hic solutasetp</h4>
                    <ul>
                        <li><a href="#">Molestiae accusamus iure</a></li>
                        <li><a href="#">Excepturi dignissimos</a></li>
                        <li><a href="#">Suscipit distinctio</a></li>
                        <li><a href="#">Dilecta</a></li>
                        <li><a href="#">Sit quas consectetur</a></li>
                    </ul>
                </div>

                <div class="col-lg-2 col-md-3 footer-links">
                    <h4>Nobis illum</h4>
                    <ul>
                        <li><a href="#">Ipsam</a></li>
                        <li><a href="#">Laudantium dolorum</a></li>
                        <li><a href="#">Dinera</a></li>
                        <li><a href="#">Trodelas</a></li>
                        <li><a href="#">Flexo</a></li>
                    </ul>
                </div>

            </div>
        </div>

        <div class="container copyright text-center mt-4">
            <p>© <span>Copyright</span> <strong class="px-1 sitename">FPT Telecom</strong> <span>All Rights
                    Reserved</span>
            </p>
            <div class="credits">
                <!-- All the links in the footer should remain intact. -->
                <!-- You can delete the links only if you've purchased the pro version. -->
                <!-- Licensing information: https://bootstrapmade.com/license/ -->
                <!-- Purchase the pro version with working PHP/AJAX contact form: [buy-url] -->
                Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
        </div>

    </footer>

    <!-- Scroll Top -->
    <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center"><i
            class="bi bi-arrow-up-short"></i></a>
    <div class="fix_tel" style="bottom: 85px !important;">
        <div class="ring-alo-phone ring-alo-green ring-alo-show">
            <div class="ring-alo-ph-circle" style="background-color: #0088cc;"></div>
            <div class="ring-alo-ph-circle-fill" style="background-color: #0088cc;"></div>
            <div class="ring-alo-ph-img-circle" style="background-color: #0088cc;">
                <a target="_blank" href="https://zalo.me/0909873192">
                    <img class="" src="/images/zalo.png">
                </a>
            </div>
        </div>
        <div class="tel" style="height: 0px; border: none !important;">
            <!-- <p class="fone">zalo</p> -->
        </div>
    </div>
    <div class="fix_tel">
        <div class="ring-alo-phone ring-alo-green ring-alo-show">
            <div class="ring-alo-ph-circle"></div>
            <div class="ring-alo-ph-circle-fill"></div>
            <div class="ring-alo-ph-img-circle">
                <a href="tel:0909873192">
                    <img class="" src="/images/phone.png">
                </a>
            </div>
        </div>
        <div class="tel">
            <a href="tel:0909873192">
                <p class="fone">0909873192</p>
            </a>
        </div>
    </div>
<Spinner/>
</template>
