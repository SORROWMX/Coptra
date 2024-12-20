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
             empty($server_name));

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
<aside class="sidebar">
    <div class="search-container">
        <div class="search-wrapper">
            <input type="text" id="docs-search" class="search-input" placeholder="Поиск по документации...">
            <button type="button" id="search-button" class="search-button">
                <svg class="search-icon" viewBox="0 0 24 24">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                </svg>
            </button>
        </div>
    </div>
    <nav class="sidebar-nav">
        <div class="sidebar-section">
            <h3>РУКОВОДСТВА:</h3>
        </div>
        <div class="sidebar-item">
            <a href="<?php echo $root_path; ?>docs/documentation.php" class="sidebar-link" data-ajax-load>Введение</a>
        </div>
        <!-- =<div class="sidebar-item">
            <a href="boards" class="sidebar-link">Полётный контроллер</a>
        </div> -->
        <div class="sidebar-item expandable">
            <span class="sidebar-link">
                Учебные дроны
                <span class="arrow"></span>
            </span>
            <ul class="sub-menu extended-submenu">
                <li><a href="<?php echo $root_path; ?>docs/drones/Training/drone1.php" data-ajax-load>Дрон1</a></li>
                <li><a href="<?php echo $root_path; ?>docs/drones/Training/drone2.php" data-ajax-load>Дрон2</a></li>
                <li><a href="<?php echo $root_path; ?>docs/drones/Training/drone3.php" data-ajax-load>Дрон3</a></li>
            </ul>
        </div>
        <div class="sidebar-item expandable">
            <span class="sidebar-link">
                Сельскохозяйственные дроны
                <span class="arrow"></span>
            </span>
            <ul class="sub-menu extended-submenu">
                <li><a href="<?php echo $root_path; ?>docs/drones/Agricultural/drone1.php" data-ajax-load>Дрон1</a></li>
                <li><a href="<?php echo $root_path; ?>docs/drones/Agricultural/drone2.php" data-ajax-load>Дрон2</a></li>
                <li><a href="<?php echo $root_path; ?>docs/drones/Agricultural/drone3.php" data-ajax-load>Дрон3</a></li>
            </ul>
        </div>
        <div class="sidebar-item expandable">
            <span class="sidebar-link">
                FPV дроны
                <span class="arrow"></span>
            </span>
            <ul class="sub-menu extended-submenu">
                <li><a href="<?php echo $root_path; ?>docs/drones/FPV/drone1.php" data-ajax-load>Дрон1</a></li>
                <li><a href="<?php echo $root_path; ?>docs/drones/FPV/drone2.php" data-ajax-load>Дрон2</a></li>
                <li><a href="<?php echo $root_path; ?>docs/drones/FPV/drone3.php" data-ajax-load>Дрон3</a></li>
            </ul>
        </div>
        <div class="sidebar-item expandable">
            <span class="sidebar-link">
                Грузовые дроны
                <span class="arrow"></span>
            </span>
            <ul class="sub-menu extended-submenu">
                <li><a href="<?php echo $root_path; ?>docs/drones/Cargo/drone1.php" data-ajax-load>Дрон1</a></li>
                <li><a href="<?php echo $root_path; ?>docs/drones/Cargo/drone2.php" data-ajax-load>Дрон2</a></li>
                <li><a href="<?php echo $root_path; ?>docs/drones/Cargo/drone3.php" data-ajax-load>Дрон3</a></li>
            </ul>
        </div>
        <div class="sidebar-item">
            <a href="<?php echo $root_path; ?>docs/remotecontroller.php" class="sidebar-link" data-ajax-load>Пульт управления</a>
        </div>
        <div class="sidebar-item expandable">
            <span class="sidebar-link">
                Системы навигации
                <span class="arrow"></span>
            </span>
            <ul class="sub-menu extended-submenu">
                <li><a href="<?php echo $root_path; ?>docs/navigationsystems/infrared.php" data-ajax-load>Система ИК навигации</a></li>
                <li><a href="<?php echo $root_path; ?>docs/navigationsystems/ultrasonic.php" data-ajax-load>Система УЗ навигации</a></li>
                <li><a href="<?php echo $root_path; ?>docs/navigationsystems/optical.php" data-ajax-load>Сиcтема оптической навигации</a></li>
            </ul>
        </div>
        <div class="sidebar-item expandable">
            <span class="sidebar-link">
                Полезная нагрузка
                <span class="arrow"></span>
            </span>
            <ul class="sub-menu extended-submenu">
                <li><a href="<?php echo $root_path; ?>docs/Payload/option-board.php" data-ajax-load>Плата подключения дополнительных модулей</a></li>
            </ul>
        </div>
        <div class="sidebar-item expandable">
            <span class="sidebar-link">
                Программное обеспечение
                <span class="arrow"></span>
            </span>
            <ul class="sub-menu extended-submenu">
                <li><a href="<?php echo $root_path; ?>docs/Software/coptra-station.php" data-ajax-load>Coptra drone control system</a></li>
                <li><a href="<?php echo $root_path; ?>docs/Software/coptra-drone-sim.php" data-ajax-load>Coptra Sim</a></li>
            </ul>
        </div>
        <div class="sidebar-item expandable">
            <span class="sidebar-link">
                Программирование
                <span class="arrow"></span>
            </span>
            <ul class="sub-menu extended-submenu">
                <li><a href="<?php echo $root_path; ?>docs/Programming/python.php" data-ajax-load>Python</a></li>
                <li><a href="<?php echo $root_path; ?>docs/Programming/trik-studio.php" data-ajax-load>TRIK Studio</a></li>
                <li><a href="<?php echo $root_path; ?>docs/Programming/lua.php" data-ajax-load>LUA</a></li>
            </ul>
        </div>
        <div class="sidebar-item expandable">
            <span class="sidebar-link">
                Дополнительные материалы
                <span class="arrow"></span>
            </span>
            <ul class="sub-menu extended-submenu">
                <li><a href="<?php echo $root_path; ?>docs/additionalmaterials/database.php" data-ajax-load>База знаний</a></li>
                <li><a href="<?php echo $root_path; ?>docs/additionalmaterials/downloads.php" data-ajax-load>Загрузки</a></li>
                <li><a href="<?php echo $root_path; ?>docs/additionalmaterials/methods-and-cases.php" data-ajax-load>Методики и кейсы</a></li>
            </ul>
        </div>
    </nav>
</aside>
