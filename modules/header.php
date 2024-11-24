<?php
// Определяем базовый путь с учетом вложенных директорий
$root_path = '';
$project_folder = '';
$current_script = $_SERVER['SCRIPT_FILENAME'];
$document_root = $_SERVER['DOCUMENT_ROOT'];
$server_name = isset($_SERVER['SERVER_NAME']) ? $_SERVER['SERVER_NAME'] : '';

// Определяем, работаем ли мы локально
$is_local = (strpos($server_name, 'localhost') !== false || 
             strpos($server_name, '127.0.0.1') !== false ||
             empty($server_name)); // Считаем пустой SERVER_NAME как локальный

// Определяем относительный путь от текущего скрипта к корню сайта
$relative_path = str_replace($document_root, '', dirname($current_script));
$depth = substr_count($relative_path, DIRECTORY_SEPARATOR);

// Генерируем путь наверх в зависимости от глубины вложенности
$root_path = str_repeat('../', $depth);

// Убираем лишний слеш в конце, если он есть
$root_path = rtrim($root_path, '/');
if (!empty($root_path)) {
    $root_path .= '/';
}

// Если мы на продакшен сервере, добавляем папку проекта
if (!$is_local) {
    $root_path = '/';
}
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="<?php echo $root_path; ?>assets/icons/favicon.ico" type="image/x-icon">
    <link rel="shortcut icon" href="<?php echo $root_path; ?>assets/icons/favicon.ico" type="image/x-icon">
    <title>Коптра - Производство и продажа дронов</title>
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    />
    <link rel="stylesheet" href="<?php echo $root_path; ?>styles/main.css" />
    <link rel="stylesheet" href="<?php echo $root_path; ?>styles/components/sidebar.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    <script src="https://unpkg.com/imask"></script>
    <script src="https://api-maps.yandex.ru/2.1/?apikey=1cff0148-de87-458e-a968-48f0c089c477&lang=ru_RU" type="text/javascript">
    </script>
    <script type="text/javascript">
    ymaps.ready(init);
    function init(){
        // Проверяем существование элемента карты
        const mapElement = document.getElementById('map');
        if (!mapElement) return;

        try {
            var myMap = new ymaps.Map("map", {
                // Координаты центра карты.
                // Порядок по умолчанию: «широта, долгота».
                center: [52.976048, 36.069789],
                // Уровень масштабирования
                zoom: 16
            });

            // Создаем метку
            var myPlacemark = new ymaps.Placemark([52.976048, 36.069789], {
                balloonContent: 'КОПТРА<br>Наугорское шоссе, 29'
            }, {
                preset: 'islands#redDotIcon'
            });

            // Добавляем метку на карту
            myMap.geoObjects.add(myPlacemark);
        } catch (error) {
            console.error('Ошибка инициализации карты:', error);
        }
    }
    </script>
    <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>

</head>
<body>
<div class="preloader">
    <div class="preloader-content">
        <img src="<?php echo $root_path; ?>assets/images/header-logo.png" alt="Коптра" class="preloader-logo">
        <div class="preloader-spinner"></div>
        <div class="preloader-text">Загрузка...</div>
    </div>
</div>
<header>
    <div class="container header-container">
        <a href="<?php echo $root_path; ?>index.php" class="logo">
            <img src="<?php echo $root_path; ?>assets/images/header-logo.png" alt="Коптра лого" />
            <span>КОПТРА</span>
        </a>
        <?php 
        $current_file = $_SERVER['SCRIPT_FILENAME'];
        
        if (strpos(strtolower($current_file), 'docs') !== false): 
        ?>
            <!-- СТРАНИЦА ДОКУМЕНТАЦИИ ДЛЯ ДЕСКТОПА -->
            <nav class="docs-nav desktop-only">
                <ul>
                    <li><a href="<?php echo $root_path; ?>index.php">Главная</a></li>
                    <li class="dropdown">
                        <a href="<?php echo $root_path; ?>products.php">Продукты</a>
                        <ul class="dropdown-menu">
                            <li class="dropdown-submenu">
                                <a href="<?php echo $root_path; ?>products.php#agriculture">Сельское хозяйство</a>
                                <div class="submenu">
                                    <a href="<?php echo $root_path; ?>products.php#agro-scout">Агроскаут X1</a>
                                    <a href="<?php echo $root_path; ?>products.php#agro-scout-pro">Агроскаут X1 Pro</a>
                                    <a href="<?php echo $root_path; ?>products.php#agro-mapper">Агроскаут Картограф</a>
                                    <a href="<?php echo $root_path; ?>products.php#agro-sprayer">Агроскаут Опрыскиватель</a>
                                </div>
                            </li>
                            <li class="dropdown-submenu">
                                <a href="<?php echo $root_path; ?>products.php#education">Образование</a>
                                <div class="submenu">
                                    <a href="<?php echo $root_path; ?>products.php#edu-basic">Коптра Пионер</a>
                                    <a href="<?php echo $root_path; ?>products.php#edu-advanced">Коптра Пионер Pro</a>
                                    <a href="<?php echo $root_path; ?>products.php#edu-kit">Образовательный набор</a>
                                </div>
                            </li>
                            <li class="dropdown-submenu">
                                <a href="<?php echo $root_path; ?>products.php#fpv">FPV</a>
                                <div class="submenu">
                                    <a href="<?php echo $root_path; ?>products.php#fpv-racer">FPV Racer 5"</a>
                                    <a href="<?php echo $root_path; ?>products.php#fpv-freestyle">FPV Freestyle</a>
                                    <a href="<?php echo $root_path; ?>products.php#fpv-cinewhoop">Cinewhoop 3"</a>
                                </div>
                            </li>
                            <li class="dropdown-submenu">
                                <a href="<?php echo $root_path; ?>products.php#cargo">Грузовые</a>
                                <div class="submenu">
                                    <a href="<?php echo $root_path; ?>products.php#cargo-light">Грузовой X4</a>
                                    <a href="<?php echo $root_path; ?>products.php#cargo-medium">Грузовой X6</a>
                                    <a href="<?php echo $root_path; ?>products.php#cargo-heavy">Грузовой X8</a>
                                </div>
                            </li>
                            <li><a href="<?php echo $root_path; ?>products.php#flight-controller">Полётный контроллер</a></li>
                        </ul>
                    </li>
                    <li><a href="<?php echo $root_path; ?>docs/documentation.php">Документация</a></li>
                    <li><a href="<?php echo $root_path; ?>blog.php">Блог</a></li>
                    <li><a href="<?php echo $root_path; ?>contacts.php">Контакты</a></li>
                </ul>
            </nav>
            <div class="header-actions">
                <button class="action-button theme-toggle" aria-label="Сменить тему">
                    <i class="fas fa-sun"></i>
                </button>
                <a href="<?php echo $root_path; ?>login.php" class="action-button login-button">
                    <i class="fas fa-user"></i>
                    <span>Войти</span>
                </a>
            </div>
            <div class="header-actions-mobile">
                <button class="action-button theme-toggle" aria-label="Сменить тему">
                    <i class="fas fa-sun"></i>
                </button>
                <a href="<?php echo $root_path; ?>login.php" class="action-button login-button">
                    <i class="fas fa-user"></i>
                    <span>Войти</span>
                </a>
            </div>
            <button class="mobile-menu-btn header-btn" aria-label="Toggle sidebar">
                <span></span>
                <span></span>
                <span></span>
            </button>
        <?php else: ?>
            <div class="header-actions-mobile">
                <button class="action-button theme-toggle" aria-label="Сменить тему">
                    <i class="fas fa-sun"></i>
                </button>
                <a href="<?php echo $root_path; ?>login.php" class="action-button login-button">
                    <i class="fas fa-user"></i>
                    <span>Войти</span>
                </a>
            </div>
            <button class="mobile-menu-btn">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <!-- ГЛАВНАЯ СТРАНИЦА ДЛЯ ДЕСКТОПА И МОБИЛКИ -->
            <nav class="main-nav">
                <ul>
                    <li><a href="<?php echo $root_path; ?>index.php">Главная</a></li>
                    <li class="dropdown">
                        <a href="<?php echo $root_path; ?>products.php">Продукты</a>
                        <ul class="dropdown-menu">
                            <li class="dropdown-submenu">
                                <a href="<?php echo $root_path; ?>products.php#agriculture">Сельское хозяйство</a>
                                <div class="submenu">
                                    <a href="<?php echo $root_path; ?>products.php#agro-scout">Агроскаут X1</a>
                                    <a href="<?php echo $root_path; ?>products.php#agro-scout-pro">Агроскаут X1 Pro</a>
                                    <a href="<?php echo $root_path; ?>products.php#agro-mapper">Агроскаут Картограф</a>
                                    <a href="<?php echo $root_path; ?>products.php#agro-sprayer">Агроскаут Опрыскиватель</a>
                                </div>
                            </li>
                            <li class="dropdown-submenu">
                                <a href="<?php echo $root_path; ?>products.php#education">Образование</a>
                                <div class="submenu">
                                    <a href="<?php echo $root_path; ?>products.php#edu-basic">Коптра Пионер</a>
                                    <a href="<?php echo $root_path; ?>products.php#edu-advanced">Коптра Пионер Pro</a>
                                    <a href="<?php echo $root_path; ?>products.php#edu-kit">Образовательный набор</a>
                                </div>
                            </li>
                            <li class="dropdown-submenu">
                                <a href="<?php echo $root_path; ?>products.php#fpv">FPV</a>
                                <div class="submenu">
                                    <a href="<?php echo $root_path; ?>products.php#fpv-racer">FPV Racer 5"</a>
                                    <a href="<?php echo $root_path; ?>products.php#fpv-freestyle">FPV Freestyle</a>
                                    <a href="<?php echo $root_path; ?>products.php#fpv-cinewhoop">Cinewhoop 3"</a>
                                </div>
                            </li>
                            <li class="dropdown-submenu">
                                <a href="<?php echo $root_path; ?>products.php#cargo">Грузовые</a>
                                <div class="submenu">
                                    <a href="<?php echo $root_path; ?>products.php#cargo-light">Грузовой X4</a>
                                    <a href="<?php echo $root_path; ?>products.php#cargo-medium">Грузовой X6</a>
                                    <a href="<?php echo $root_path; ?>products.php#cargo-heavy">Грузовой X8</a>
                                </div>
                            </li>
                            <li><a href="<?php echo $root_path; ?>products.php#flight-controller">Полётный контроллер</a></li>
                        </ul>
                    </li>
                    <li><a href="<?php echo $root_path; ?>docs/documentation.php">Документация</a></li>
                    <li><a href="<?php echo $root_path; ?>blog.php">Блог</a></li>
                    <li><a href="<?php echo $root_path; ?>contacts.php">Контакты</a></li>
                </ul>
            </nav>
            <div class="header-actions">
                <button class="action-button theme-toggle" aria-label="Сменить тему">
                    <i class="fas fa-sun"></i></i>
                </button>
                <a href="<?php echo $root_path; ?>login.php" class="action-button login-button">
                    <i class="fas fa-user"></i>
                    <span>Войти</span>
                </a>
            </div>
        <?php endif; ?>
    </div>
</header>
