<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="/assets/icons/favicon.ico" type="image/x-icon">
    <link rel="shortcut icon" href="/assets/icons/favicon.ico" type="image/x-icon">
    <title>Коптра - Производство и продажа дронов</title>
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    />
    <link rel="stylesheet" href="/styles/main.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
</head>
<body>
    <header>
        <div class="container header-container">
            <a href="../index.php" class="logo">
            <img src="<?php echo dirname($_SERVER['PHP_SELF']) === '/' ? '' : '/'; ?>assets/images/header-logo.png" alt="Коптра лого" />                <span>КОПТРА</span>
            </a>
            <nav>
                <ul>
                    <li><a href="../index.php">Главная</a></li>
                    <li class="dropdown">
                        <a href="products.html">Продукты</a>
                        <ul class="dropdown-menu">
                            <li><a href="products.html#koptra-mini">Коптра Мини</a></li>
                            <li><a href="products.html#koptra-basic">Коптра Базовый</a></li>
                            <li><a href="products.html#accessories">Аксессуары</a></li>
                            <li><a href="products.html#spare-parts">Запчасти</a></li>
                        </ul>
                    </li>
                    <li><a href="/docs/index.php">Документация</a></li>
                    <li><a href="blog.html">Блог</a></li>
                    <li><a href="contacts.html">Контакты</a></li>
                </ul>
            </nav>
        <?php endif; ?>
    </div>
</header>