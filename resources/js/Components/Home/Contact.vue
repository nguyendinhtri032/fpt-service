<template>
    <section id="contact" class="contact section light-background">

        <!-- Section Title -->
        <div class="container section-title" data-aos="fade-up">
            <h2>{{ $t('contact.title') }}</h2>
            <p>{{ $t('contact.description') }}</p>
        </div><!-- End Section Title -->

        <div class="container" data-aos="fade-up" data-aos-delay="100">

            <div class="row g-4 g-lg-5">
                <div class="col-lg-5">
                    <div class="info-box" data-aos="fade-up" data-aos-delay="200">
                        <h3>{{ $t('contact.contactInfo') }}</h3>
                        <p>{{ $t('contact.description') }}</p>

                        <div class="info-item" data-aos="fade-up" data-aos-delay="300">
                            <div class="icon-box">
                                <i class="bi bi-geo-alt"></i>
                            </div>
                            <div class="content">
                                <h4>{{ $t('contact.location') }}</h4>
                                <a
                                    href="https://www.google.com/maps/search/86+Road+Broklyn+Street,+600+New+York,+USA/@40.6897806,-74.0278086,12z/data=!3m1!4b1">
                                    <p>{{ $t('contact.address') }}</p>
                                </a>
                            </div>
                        </div>

                        <div class="info-item" data-aos="fade-up" data-aos-delay="400">
                            <div class="icon-box">
                                <i class="bi bi-telephone"></i>
                            </div>
                            <div class="content">
                                <h4>{{ $t('contact.phone') }}</h4>
                                <p><a href="tel:0909873192">0909873192</a></p>
                            </div>
                        </div>

                        <div class="info-item" data-aos="fade-up" data-aos-delay="500">
                            <div class="icon-box">
                                <i class="bi bi-envelope"></i>
                            </div>
                            <div class="content">
                                <h4>{{ $t('contact.email') }}</h4>
                                <p><a href="mailto:anhdtn23@fpt.com">anhdtn23@fpt.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-7">
                    <div class="contact-form" data-aos="fade-up" data-aos-delay="300">
                        <h3>{{ $t('contact.getInTouch') }}</h3>
                        <p>{{ $t('contact.description') }}</p>

                        <form action="forms/contact.php" method="post" class="php-email-form" data-aos="fade-up"
                            data-aos-delay="200">
                            <div class="row gy-4">

                                <div class="col-md-6">
                                    <label for="fullName">Tên</label>
                                    <input id="fullName" type="text" name="name" class="form-control">
                                </div>

                                <div class="col-md-6">
                                    <label for="email">Email</label>
                                    <input id="email" type="email" class="form-control" name="email">
                                </div>

                                <div class="col-12">
                                    <label for="subject">Tiêu đề</label>
                                    <input id="subject" type="text" class="form-control" name="subject">
                                </div>

                                <div class="col-12">
                                    <label for="message">Nội dung</label>
                                    <textarea id="message" class="form-control" name="message" rows="6"></textarea>
                                </div>

                                <div class="col-12 text-center">
                                    <div class="loading">{{ $t('contact.form.loading') }}</div>
                                    <div class="error-message">{{ $t('contact.form.errorMessage') }}</div>
                                    <div class="sent-message">{{ $t('contact.form.sentMessage') }}</div>

                                    <button type="submit" class="btn">{{ $t('contact.form.sendMessage') }}</button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>