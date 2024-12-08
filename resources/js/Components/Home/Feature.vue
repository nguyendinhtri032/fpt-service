<template>
    <!-- Features Section -->
    <section id="features" class="features section">

        <!-- Section Title -->
        <div class="container section-title" data-aos="fade-up">
            <h2>{{ $t('message.chooseService') }}</h2>
            <p>{{ $t('message.chooseServiceDescription') }}</p>
        </div><!-- End Section Title -->
        <div class="container">
            <div class="d-flex justify-content-center">
                <ul class="nav nav-tabs" data-aos="fade-up" data-aos-delay="100">
                    <li class="nav-item">
                        <a class="nav-link active show" data-bs-toggle="tab" data-bs-target="#features-tab-1">
                            <h4>250 MBPS</h4>
                        </a>
                    </li><!-- End tab nav item -->
                    <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-2">
                            <h4>500 MBPS</h4>
                        </a><!-- End tab nav item -->
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-3">
                            <h4>800 MBPS</h4>
                        </a>
                    </li><!-- End tab nav item -->
                </ul>
            </div>

            <div class="tab-content feature-custom" data-aos="fade-up" data-aos-delay="200">
                <div class="tab-pane fade active show" id="features-tab-1">
                    <div class="row ml-5" style="flex: 0 0 70%; max-width: 70%;">
                        <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                            <h3>545K <span class="fs-6">/ 1 Tháng</span></h3>
                            <ul class="ml-3">
                                <li><i class="bi bi-check2-all"></i><span>Thiết bị Modem: 01 Mikrotik RB760iGS/
                                        EdgeRouter X SFP/ AX1800GZ.</span></li>
                                <li><i class="bi bi-check2-all"></i> <span>Tặng 1 tháng cước hoặc thiết bị 01 Aruba
                                        Instant On AP11.</span></li>
                            </ul>
                        </div>
                    </div>
                </div><!-- End tab content item -->

                <div class="tab-pane fade" id="features-tab-2">
                    <div class="row ml-5" style="flex: 0 0 70%; max-width: 70%;">
                        <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                            <h3>800K<span class="fs-6">/ 1 Tháng</span></h3>

                            <ul class="ml-3 mr-10">
                                <li><i class="bi bi-check2-all"></i> <span>2 Modem Wi-Fi 6.</span></li>
                                <li><i class="bi bi-check2-all"></i> <span>Tặng 1 tháng sử dụng.</span></li>
                            </ul>
                        </div>
                    </div>
                </div><!-- End tab content item -->

                <div class="tab-pane fade" id="features-tab-3">
                    <div class="row ml-5" style="flex: 0 0 70%; max-width: 70%;">
                        <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                            <h3>1.000K <span class="fs-6">/ 1 Tháng</span></h3>
                            <ul class="ml-3 mr-10">
                                <li><i class="bi bi-check2-all"></i> <span>2 Modem Wi-Fi 6.</span></li>
                                <li><i class="bi bi-check2-all"></i> <span>Tặng 1 tháng sử dụng.</span></li>
                            </ul>
                        </div>
                    </div>
                </div><!-- End tab content item -->
            </div>
        </div>
    </section><!-- /Features Section -->

    <!-- Features Cards Section -->
</template>