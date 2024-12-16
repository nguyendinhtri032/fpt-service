<template>
            <!-- Stats Section -->
            <section id="stats" class="stats section">
            <div class="container" data-aos="fade-up" data-aos-delay="100">
                <div class="row gy-4">
                    <div class="col-lg-3 col-md-6">
                        <div class="stats-item text-center w-100 h-100">
                            <div class="d-inline-flex">
                                <span data-purecounter-start="0" data-purecounter-end="1000"
                                    data-purecounter-duration="1" class="purecounter">1000</span>+
                            </div>
                            <p>{{ $t('message.corporateClients') }}</p>
                        </div>
                    </div><!-- End Stats Item -->
                    <div class="col-lg-3 col-md-6">
                        <div class="stats-item text-center w-100 h-100">
                            <span data-purecounter-start="0" data-purecounter-end="63" data-purecounter-duration="1"
                                class="purecounter">63</span>
                            <p>{{ $t('message.coverageAcrossProvincesAndCities') }}</p>
                        </div>
                    </div><!-- End Stats Item -->
                    <div class="col-lg-3 col-md-6">
                        <div class="stats-item text-center w-100 h-100">
                            <div class="d-inline-flex">
                                <span data-purecounter-start="0" data-purecounter-end="1400"
                                    data-purecounter-duration="1" class="purecounter">1400</span>
                                +
                            </div>
                            <p>{{ $t('message.personnel') }}</p>
                        </div>
                    </div><!-- End Stats Item -->
                    <div class="col-lg-3 col-md-6">
                        <div class="stats-item text-center w-100 h-100">
                            <div class="d-inline-flex">
                                <span data-purecounter-start="0" data-purecounter-end="35" data-purecounter-duration="1"
                                    class="purecounter">35</span>+
                            </div>
                            <p>{{ $t('message.experience') }}</p>
                        </div>
                    </div>
                </div>
            </div>

        </section><!-- /Stats Section -->
</template>