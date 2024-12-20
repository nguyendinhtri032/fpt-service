<!DOCTYPE html>
<html>

<head>
    <title>Khách hàng liên hệ</title>
</head>

<body>
    <h1>Khách hàng liên hệ</h1>
    <p>Tiêu đề: {{ $data['subject'] ?? '' }}</p>
    <p>Tên khách hàng: {{ $data['name'] ?? '' }}</p>
    <p>Email: {{ $data['email'] ?? '' }}</p>
    <p><strong>Nội dung:</strong> {{ $data['message'] ?? '' }}</p>
</body>

</html>
