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

<footer>
        <div class="container footer-container">
            <div class="footer-section">
                <h3>О компании</h3>
                <ul>
                    <li><a href="#">О нас</a></li>
                    <li><a href="#">Наша команда</a></li>
                    <li><a href="#">Карьера</a></li>
                    <li><a href="#">Новости</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Продукты</h3>
                <ul>
                    <li><a href="#">Коптра Мини</a></li>
                    <li><a href="#">Коптра Базовый</a></li>
                    <li><a href="#">Аксессуары</a></li>
                    <li><a href="#">Запчасти</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Поддержка</h3>
                <ul>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Документация</a></li>
                    <li><a href="#">Обучение</a></li>
                    <li><a href="#">Контакты</a></li>
                </ul>
            </div>
            <div class="footer-section contact-info">
                <h3>Свяжитесь с нами</h3>
                <p><i class="fas fa-envelope"></i> info@coptra.ru</p>
                <p><i class="fas fa-phone"></i> +7 (123) 456-78-90</p>
                <div class="social-icons">
                    <a href="#" aria-label="VKontakte"><i class="fab fa-vk"></i></a>
                    <a href="#" aria-label="Telegram"><i class="fab fa-telegram-plane"></i></a>
                    <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                </div>
            </div>
        </div>
        <div class="copyright">
            <p>&copy; <span id="current-year"></span> Коптра. Все права защищены.</p>
        </div>
    </footer>
    <script type="module" src="<?php echo $root_path; ?>scripts/main.js"></script>
