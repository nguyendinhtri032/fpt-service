<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia></title>
    <title>FPT Telecom - FPT Business</title>
    <link rel="canonical" href="{{ config('app.url') }}" />
    <meta property="og:locale" content="vi_VN" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="FPT Telecom - FPT Business" />
    <meta property="og:description"
        content="GIẢI PHÁP IT OUTSOURCE TOÀN DIỆN 990K/ 1 Tháng NHÂN TƯ VẤN Dịch vụ INTERNET &#8211; WIFI DOANH NGHIỆP 545K/ 1 Tháng Công nghệ &amp; thiết bị Wi-Fi 6 ĐĂNG KÝ NGAY! GIẢI PHÁP TỪ FPT TELECOM Dịch Vụ Đề Xuất INTERNET CAMERA FPT Truyền hình Smart-Home IT OUTSOURCE BEST INTERNET Giải Pháp Internet Dành [&hellip;]" />
    <meta property="og:url" content="https://fpt-doanhnghiep.com/" />
    <meta property="og:site_name" content="FPT Business" />
    <meta property="article:modified_time" content="2024-07-17T04:25:54+00:00" />
    <meta property="og:image" content="{{ config('app.url') }}/Navy-Blue-Futuristic-Virtual-Technology-Banner-3.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <!-- Google Tag Manager -->
    <script>
        (function(w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-K2H4RM28');
    </script>
    <!-- End Google Tag Manager -->
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- Scripts -->
    <!-- Favicons -->
    <link href="/images/fpt-favicon.png" rel="icon">
    <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com" rel="preconnect">
    <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet">
    @routes
    @vite(['resources/js/app.ts', "resources/js/Pages/{$page['component']}.vue"])
    @inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>
