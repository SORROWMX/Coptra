<?php
// Определяем базовый путь с учетом вложенных директорий
$root_path = '';
$project_folder = 'rework';
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
    $root_path = '/' . $project_folder . '/';
}
?>
<aside class="sidebar">
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
