<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <link rel="icon" href="/favicon.ico">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Coptra Vue App</title>
    <link rel="stylesheet" href="/styles/main.css" />
</head>
<body>
    <div id="app" data-authenticated="<?php echo isset($_SESSION['user']) ? 'true' : 'false'; ?>"></div>
    <script type="module" src="/src/main.js"></script>
</body>
</html>