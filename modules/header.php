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
    <link rel="stylesheet" href="/styles/components/sidebar.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
</head>
<body>
<header>
    <div class="container header-container">
        <a href="../index.php" class="logo">
            <img src="<?php echo dirname($_SERVER['PHP_SELF']) === '/' ? '' : '/'; ?>assets/images/header-logo.png" alt="Коптра лого" />
            <span>КОПТРА</span>
        </a>
        <?php 
        // Получаем путь к текущему файлу
        $current_file = $_SERVER['SCRIPT_FILENAME'];
        
        // Проверяем, находимся ли мы в папке docs
        if (strpos(strtolower($current_file), 'docs') !== false): 
        ?>
            <!-- Навигация для документации (видима только на десктопе) -->
            <nav class="docs-nav desktop-only">
                <ul>
                    <li><a href="../index.php">Главная</a></li>
                    <li class="dropdown">
                        <a href="../products.html">Продукты</a>
                        <ul class="dropdown-menu">
                            <li><a href="../products.html#koptra-mini">Коптра Мини</a></li>
                            <li><a href="../products.html#koptra-basic">Коптра Базовый</a></li>
                            <li><a href="../products.html#accessories">Аксессуары</a></li>
                            <li><a href="../products.html#spare-parts">Запчасти</a></li>
                        </ul>
                    </li>
                    <li><a href="/docs/index.php">Документация</a></li>
                    <li><a href="../blog.html">Блог</a></li>
                    <li><a href="../contacts.html">Контакты</a></li>
                </ul>
            </nav>
            <!-- Кнопка для сайдбара (видима только на мобильных) -->
            <button class="sidebar-mobile-btn">
                <span></span>
                <span></span>
                <span></span>
            </button>
        <?php else: ?>
            <!-- Мобильное меню и навигация для остальных страниц -->
            <button class="mobile-menu-btn">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <nav class="main-nav">
                <ul>
                    <li><a href="../index.php">Главная</a></li>
                    <li class="dropdown">
                        <a href="products.php">Продукты</a>
                        <ul class="dropdown-menu">
                            <li class="dropdown-submenu">
                                <a href="products.php#agriculture">Сельское хозяйство</a>
                                <div class="submenu">
                                    <a href="products.php#agro-scout">Агроскаут X1</a>
                                    <a href="products.php#agro-scout-pro">Агроскаут X1 Pro</a>
                                    <a href="products.php#agro-mapper">Агроскаут Картограф</a>
                                    <a href="products.php#agro-sprayer">Агроскаут Опрыскиватель</a>
                                </div>
                            </li>
                            <li class="dropdown-submenu">
                                <a href="products.php#education">Образование</a>
                                <div class="submenu">
                                    <a href="products.php#edu-basic">Коптра Пионер</a>
                                    <a href="products.php#edu-advanced">Коптра Пионер Pro</a>
                                    <a href="products.php#edu-kit">Образовательный набор</a>
                                </div>
                            </li>
                            <li class="dropdown-submenu">
                                <a href="products.php#fpv">FPV</a>
                                <div class="submenu">
                                    <a href="products.php#fpv-racer">FPV Racer 5"</a>
                                    <a href="products.php#fpv-freestyle">FPV Freestyle</a>
                                    <a href="products.php#fpv-cinewhoop">Cinewhoop 3"</a>
                                </div>
                            </li>
                            <li class="dropdown-submenu">
                                <a href="products.php#cargo">Грузовые</a>
                                <div class="submenu">
                                    <a href="products.php#cargo-light">Грузовой X4</a>
                                    <a href="products.php#cargo-medium">Грузовой X6</a>
                                    <a href="products.php#cargo-heavy">Грузовой X8</a>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li><a href="/docs/index.php">Документация</a></li>
                    <li><a href="blog.html">Блог</a></li>
                    <li><a href="contacts.html">Контакты</a></li>
                </ul>
            </nav>
        </div>
    </header>