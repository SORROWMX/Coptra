<?php
$isAjax = isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest';
$root_path = '';
$project_folder = '';
if(isset($_SERVER['REQUEST_URI']) && strpos($_SERVER['REQUEST_URI'], $project_folder) !== false) {
    $root_path = '/docs/';
}
if ($isAjax) {
    ?>
    <main class="content-docs">
        <section id="documentation-content" class="documentation-content">
            <section id="documentation" class="documentation">
                <h1>Документация</h1>
                <div class="documentation-grid">
                <h3>Третий учебный дрон</h3>
                <h4>Учебный дрон для профессионалов и исследователей</h4>

                <p>Третий учебный дрон от Коптра — это продвинутая модель, разработанная для специалистов, исследователей и образовательных учреждений, стремящихся изучить передовые технологии автономного управления и сложных систем беспилотных аппаратов. Этот дрон оснащен высококлассными сенсорами и мощной вычислительной платформой, что делает его идеальным для высокоточных задач и исследований.</p>

                <h4>Расширенные технические характеристики и функциональные возможности</h4>

                <p>Третий учебный дрон обладает уникальными характеристиками, которые позволяют ему выполнять самые сложные задачи. Он оборудован передовыми системами навигации и ориентирования, поддерживает различные типы датчиков и специализированные режимы полета, что делает его максимально гибким инструментом для экспериментов и обучения.</p>

                <ul>
                    <li><strong>Профессиональные сенсоры и камеры:</strong> Встроенные датчики и камеры высокого разрешения позволяют реализовывать задачи компьютерного зрения и анализа данных в режиме реального времени.</li>
                    <li><strong>Улучшенная стабильность:</strong> Дрон оснащен системой стабилизации и точного позиционирования, что обеспечивает устойчивый полет даже в сложных условиях.</li>
                    <li><strong>Поддержка искусственного интеллекта:</strong> Благодаря мощной вычислительной платформе дрон может использовать алгоритмы машинного обучения и выполнять анализ данных на борту.</li>
                </ul>

                <h4>Комплект и компоненты третьего учебного дрона</h4>

                <p>В комплекте третьего учебного дрона от Коптра поставляются все необходимые компоненты для запуска сложных исследований и задач. В состав входят продвинутые камеры, лидары, модули GPS и различные датчики окружающей среды. Эти элементы позволяют разрабатывать и тестировать сложные алгоритмы навигации и автономного управления, создавая инновационные решения для реальных задач.</p>

                <h4>Программирование и интеграция с ИИ</h4>

                <p>Третий учебный дрон создан для поддержки сложных алгоритмов автономной навигации и анализа данных с помощью искусственного интеллекта. Он поддерживает интеграцию с популярными библиотеками и платформами ИИ, что позволяет пользователям разрабатывать уникальные проекты и использовать дрон для научных исследований и учебных задач в области робототехники и машинного обучения.</p>

                <p>Программная архитектура дрона также позволяет гибко управлять всеми системами, создавать собственные сценарии и реализовывать проекты на стыке робототехники и аналитики больших данных. Это идеальный выбор для студентов старших курсов, аспирантов и специалистов, готовых работать с высокотехнологичными проектами и решать сложные задачи с использованием беспилотных систем.</p>

                <h4>Применение в научных исследованиях и инновационных проектах</h4>

                <p>Благодаря своему оснащению и продвинутым возможностям, третий учебный дрон идеально подходит для применения в научных проектах и исследованиях. Этот дрон можно использовать для изучения таких областей, как картография, сельское хозяйство, охрана окружающей среды, а также для задач промышленного мониторинга и инспекции объектов. Уникальные возможности анализа данных и поддержка искусственного интеллекта делают его универсальным инструментом для сложных проектов.</p>

                <p>С третьим учебным дроном от Коптра вы получаете не только продвинутый учебный аппарат, но и мощную платформу для исследований, которая раскрывает безграничные возможности для создания инновационных решений и исследований в области беспилотных технологий. Используя этот дрон, вы сможете реализовывать свои самые амбициозные идеи и быть на переднем крае технологического прогресса.</p>
            </div>
                <div class="page-navigation">
                    <?php
                    // Определяем предыдущую и следующую страницы
                    $prev_page = 'docs/drones/Training/drone2.php'; // Путь к предыдущей странице
                    $next_page = 'docs/drones/Agricultural/drone1.php'; // Путь к следующей странице
                    
                    if ($prev_page): ?>
                        <a href="<?php echo $prev_page; ?>" class="nav-button prev" data-ajax-load>
                            Предыдущая страница
                        </a>
                    <?php endif; ?>
                    
                    <?php if ($next_page && $next_page !== '#'): ?>
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
    include __DIR__ . '/../../../modules/header.php';
    ?>
    <div class="page-container">
        <main><?php include __DIR__ . '/../../../modules/sidebar.php'; ?></main>
        <main class="content-docs">
            <section id="documentation-content" class="documentation-content">
                <section id="documentation" class="documentation">
                    <h1>Документация</h1>
                    <div class="documentation-grid">
                    <h3>Третий учебный дрон</h3>
                <h4>Учебный дрон для профессионалов и исследователей</h4>

                <p>Третий учебный дрон от Коптра — это продвинутая модель, разработанная для специалистов, исследователей и образовательных учреждений, стремящихся изучить передовые технологии автономного управления и сложных систем беспилотных аппаратов. Этот дрон оснащен высококлассными сенсорами и мощной вычислительной платформой, что делает его идеальным для высокоточных задач и исследований.</p>

                <h4>Расширенные технические характеристики и функциональные возможности</h4>

                <p>Третий учебный дрон обладает уникальными характеристиками, которые позволяют ему выполнять самые сложные задачи. Он оборудован передовыми системами навигации и ориентирования, поддерживает различные типы датчиков и специализированные режимы полета, что делает его максимально гибким инструментом для экспериментов и обучения.</p>

                <ul>
                    <li><strong>Профессиональные сенсоры и камеры:</strong> Встроенные датчики и камеры высокого разрешения позволяют реализовывать задачи компьютерного зрения и анализа данных в режиме реального времени.</li>
                    <li><strong>Улучшенная стабильность:</strong> Дрон оснащен системой стабилизации и точного позиционирования, что обеспечивает устойчивый полет даже в сложных условиях.</li>
                    <li><strong>Поддержка искусственного интеллекта:</strong> Благодаря мощной вычислительной платформе дрон может использовать алгоритмы машинного обучения и выполнять анализ данных на борту.</li>
                </ul>

                <h4>Комплект и компоненты третьего учебного дрона</h4>

                <p>В комплекте третьего учебного дрона от Коптра поставляются все необходимые компоненты для запуска сложных исследований и задач. В состав входят продвинутые камеры, лидары, модули GPS и различные датчики окружающей среды. Эти элементы позволяют разрабатывать и тестировать сложные алгоритмы навигации и автономного управления, создавая инновационные решения для реальных задач.</p>

                <h4>Программирование и интеграция с ИИ</h4>

                <p>Третий учебный дрон создан для поддержки сложных алгоритмов автономной навигации и анализа данных с помощью искусственного интеллекта. Он поддерживает интеграцию с популярными библиотеками и платформами ИИ, что позволяет пользователям разрабатывать уникальные проекты и использовать дрон для научных исследований и учебных задач в области робототехники и машинного обучения.</p>

                <p>Программная архитектура дрона также позволяет гибко управлять всеми системами, создавать собственные сценарии и реализовывать проекты на стыке робототехники и аналитики больших данных. Это идеальный выбор для студентов старших курсов, аспирантов и специалистов, готовых работать с высокотехнологичными проектами и решать сложные задачи с использованием беспилотных систем.</p>

                <h4>Применение в научных исследованиях и инновационных проектах</h4>

                <p>Благодаря своему оснащению и продвинутым возможностям, третий учебный дрон идеально подходит для применения в научных проектах и исследованиях. Этот дрон можно использовать для изучения таких областей, как картография, сельское хозяйство, охрана окружающей среды, а также для задач промышленного мониторинга и инспекции объектов. Уникальные возможности анализа данных и поддержка искусственного интеллекта делают его универсальным инструментом для сложных проектов.</p>

                <p>С третьим учебным дроном от Коптра вы получаете не только продвинутый учебный аппарат, но и мощную платформу для исследований, которая раскрывает безграничные возможности для создания инновационных решений и исследований в области беспилотных технологий. Используя этот дрон, вы сможете реализовывать свои самые амбициозные идеи и быть на переднем крае технологического прогресса.</p>
            </div>
                    <div class="page-navigation">
                        <?php
                        // Определяем предыдущую и следующую страницы
                        $prev_page = 'docs/drones/Training/drone2.php'; // Путь к предыдущей странице
                        $next_page = 'docs/drones/Agricultural/drone1.php'; // Путь к следующей странице
                        
                        if ($prev_page): ?>
                            <a href="<?php echo $prev_page; ?>" class="nav-button prev" data-ajax-load>
                                Предыдущая страница
                            </a>
                        <?php endif; ?>
                        
                        <?php if ($next_page && $next_page !== '#'): ?>
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
    include __DIR__ . '/../../../modules/footer.php';
}
?>
