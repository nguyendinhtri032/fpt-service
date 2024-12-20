<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
</script>

<template>
    <footer id="footer" class="footer">

        <div class="container footer-top">
            <div class="row gy-4">
                <div class="col-lg-8 col-md-8 footer-about">
                    <a href="index.html" class="logo d-flex align-items-center">
                        <span class="sitename">FPT Telecom</span>
                    </a>
                    <div class="footer-contact pt-3">
                        <p> <strong>{{ $t('contact.location') }}:</strong>
                            <a
                                href="https://www.google.com/maps/search/86+Road+Broklyn+Street,+600+New+York,+USA/@40.6897806,-74.0278086,12z/data=!3m1!4b1">
                                <p>{{ $t('contact.address') }}</p>
                            </a>
                        </p>

                        <p><strong>{{ $t('contact.phone') }}: </strong><a href="tel:0909873192">0909873192</a></p>
                        <p><strong>Email: </strong><a href="mailto:anhdtn23@fpt.com">
                                anhdtn23@fpt.com</a></p>
                    </div>
                </div>

                <div class="col-lg-4 col-md-4 footer-links">
                    <h4>{{ $t('outService') }}</h4>
                    <ul>
                        <li>
                            <Link href="/">{{ $t('message.home') }}</Link>
                        </li>
                        <li>
                            <Link href="/dich-vu-it" :class="{ active: route().current() === 'it' }">{{
                                $t('message.it') }}</Link>
                        </li>
                        <li>
                            <Link href="/dich-vu-internet" :class="{ active: route().current() === 'internet' }">{{
                                $t('message.internet') }}</Link>
                        </li>
                        <li>
                            <Link href="/lien-he" :class="{ active: route().current() === 'contact' }">{{
                                $t('message.contact') }}</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="container copyright text-center mt-4">
            <p>© <span>Copyright</span> <strong class="px-1 sitename">FPT Telecom</strong> <span>All Rights
                    Reserved</span>
            </p>
        </div>
    </footer>
</template>