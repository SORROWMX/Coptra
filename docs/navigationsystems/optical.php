<?php
$isAjax = isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest';
$root_path = '';
$project_folder = '';
if(isset($_SERVER['REQUEST_URI']) && strpos($_SERVER['REQUEST_URI'], $project_folder) !== false) {
    $root_path = '/docs/';
}
if ($isAjax) {
    // Если это AJAX-запрос, возвращаем только содержимое документации
    ?>
            <main class="content-docs">
                <section id="documentation-content" class="documentation-content">
                    <section id="documentation" class="documentation">
                    <h1>Документация</h1>
                        <div class="documentation-grid">
                        <h3>Система оптической навигации</h3>
                        <h4>Совершенные технологии для точного ориентирования дронов</h4>

                        <p>Система оптической навигации от Коптра представляет собой высокотехнологичное решение, обеспечивающее надежное позиционирование и ориентирование беспилотных летательных аппаратов в сложных условиях. Использование оптических технологий позволяет дронам эффективно определять свое местоположение и избегать препятствий, что делает их идеальными для применения в различных сферах.</p>

                        <h4>Ключевые особенности системы оптической навигации</h4>

                        <p>Система оптической навигации включает в себя ряд уникальных функций, обеспечивающих высокую точность и надежность работы дронов:</p>

                        <ul>
                            <li><strong>Точное определение положения:</strong> Оптические датчики позволяют дрону точно определять свое местоположение относительно окружающей среды, что особенно важно при выполнении задач в закрытых помещениях и сложных ландшафтах.</li>
                            <li><strong>Автоматическое обнаружение препятствий:</strong> Система может автоматически распознавать препятствия на пути полета, что значительно повышает безопасность операций и минимизирует риск столкновений.</li>
                            <li><strong>Работа в любых условиях освещения:</strong> Оптическая навигация адаптируется к различным условиям освещения, что позволяет эффективно работать как в яркий день, так и в условиях низкой видимости.</li>
                        </ul>

                        <h4>Области применения системы оптической навигации</h4>

                        <p>Система оптической навигации от Коптра может быть использована в различных областях, включая:</p>

                        <ul>
                            <li><strong>Сельское хозяйство:</strong> Для мониторинга состояния растений и выполнения точных операций по внесению удобрений.</li>
                            <li><strong>Строительство:</strong> Для контроля за выполнением строительных работ и обеспечения точности измерений.</li>
                            <li><strong>Аэросъемка:</strong> Для создания высококачественных изображений и видео с воздуха, благодаря точному позиционированию и стабилизации.</li>
                        </ul>

                        <h4>Надежность и безопасность</h4>

                        <p>Система оптической навигации спроектирована с акцентом на безопасность и надежность. Она включает в себя функции автоматического возврата на базу и предотвращения столкновений, что делает полеты безопасными даже в сложных условиях.</p>

                        <h4>Преимущества для пользователей</h4>

                        <p>Система оптической навигации от Коптра предлагает множество преимуществ, включая высокую точность работы, улучшение качества выполнения задач и расширение возможностей применения дронов. Это делает систему важным инструментом для профессионалов, стремящихся оптимизировать свои процессы и повысить эффективность своей работы.</p>

                        <p>С системой оптической навигации от Коптра вы можете быть уверены в надежности и точности своих операций, что открывает новые горизонты для применения беспилотных летательных аппаратов в вашей деятельности.</p>

                        </div>
                        <div class="page-navigation">
                    <?php
                    $prev_page = 'docs/navigationsystems/ultrasonic.php'; // Путь к предыдущей странице
                    $next_page = 'docs/Payload/option-board.php'; // Путь к следующей странице
                    
                    if ($prev_page): ?>
                        <a href="<?php echo $prev_page; ?>" class="nav-button prev" data-ajax-load>
                            Предыдущая страница
                        </a>
                    <?php endif; ?>
                    
                    <?php if ($next_page): ?>
                        <a href="<?php echo $next_page; ?>" class="nav-button next" data-ajax-load>
                            Следующая страница
                        </a>
                    <?php endif; ?>
                </div>
                    </section>
                </section>
            </main>
    <?php
} else {
    // Если это обычный запрос, возвращаем полную страницу
    include __DIR__ . '/../../modules/header.php';
    ?>
    <div class="page-container">
            <main><?php include __DIR__ . '/../../modules/sidebar.php'; ?></main>
            <main class="content-docs">
                <section id="documentation-content" class="documentation-content">
                    <section id="documentation" class="documentation">
                    <h1>Документация</h1>
                        <div class="documentation-grid">
                            <h3>Система оптической навигации</h3>
                            <h4>Совершенные технологии для точного ориентирования дронов</h4>

                            <p>Система оптической навигации от Коптра представляет собой высокотехнологичное решение, обеспечивающее надежное позиционирование и ориентирование беспилотных летательных аппаратов в сложных условиях. Использование оптических технологий позволяет дронам эффективно определять свое местоположение и избегать препятствий, что делает их идеальными для применения в различных сферах.</p>

                            <h4>Ключевые особенности системы оптической навигации</h4>

                            <p>Система оптической навигации включает в себя ряд уникальных функций, обеспечивающих высокую точность и надежность работы дронов:</p>

                            <ul>
                                <li><strong>Точное определение положения:</strong> Оптические датчики позволяют дрону точно определять свое местоположение относительно окружающей среды, что особенно важно при выполнении задач в закрытых помещениях и сложных ландшафтах.</li>
                                <li><strong>Автоматическое обнаружение препятствий:</strong> Система может автоматически распознавать препятствия на пути полета, что значительно повышает безопасность операций и минимизирует риск столкновений.</li>
                                <li><strong>Работа в любых условиях освещения:</strong> Оптическая навигация адаптируется к различным условиям освещения, что позволяет эффективно работать как в яркий день, так и в условиях низкой видимости.</li>
                            </ul>

                            <h4>Области применения системы оптической навигации</h4>

                            <p>Система оптической навигации от Коптра может быть использована в различных областях, включая:</p>

                            <ul>
                                <li><strong>Сельское хозяйство:</strong> Для мониторинга состояния растений и выполнения точных операций по внесению удобрений.</li>
                                <li><strong>Строительство:</strong> Для контроля за выполнением строительных работ и обеспечения точности измерений.</li>
                                <li><strong>Аэросъемка:</strong> Для создания высококачественных изображений и видео с воздуха, благодаря точному позиционированию и стабилизации.</li>
                            </ul>

                            <h4>Надежность и безопасность</h4>

                            <p>Система оптической навигации спроектирована с акцентом на безопасность и надежность. Она включает в себя функции автоматического возврата на базу и предотвращения столкновений, что делает полеты безопасными даже в сложных условиях.</p>

                            <h4>Преимущества для пользователей</h4>

                            <p>Система оптической навигации от Коптра предлагает множество преимуществ, включая высокую точность работы, улучшение качества выполнения задач и расширение возможностей применения дронов. Это делает систему важным инструментом для профессионалов, стремящихся оптимизировать свои процессы и повысить эффективность своей работы.</p>

                            <p>С системой оптической навигации от Коптра вы можете быть уверены в надежности и точности своих операций, что открывает новые горизонты для применения беспилотных летательных аппаратов в вашей деятельности.</p>

                        </div>
                        <div class="page-navigation">
                    <?php
                    $prev_page = 'docs/navigationsystems/ultrasonic.php'; // Путь к предыдущей странице
                    $next_page = 'docs/Payload/option-board.php'; // Путь к следующей странице
                    
                    if ($prev_page): ?>
                        <a href="<?php echo $prev_page; ?>" class="nav-button prev" data-ajax-load>
                            Предыдущая страница
                        </a>
                    <?php endif; ?>
                    
                    <?php if ($next_page): ?>
                        <a href="<?php echo $next_page; ?>" class="nav-button next" data-ajax-load>
                            Следующая страница
                        </a>
                    <?php endif; ?>
                </div>
                    </section>
                </section>
            </main>
</div>
    <?php
    include __DIR__ . '/../../modules/footer.php';
}
?>
