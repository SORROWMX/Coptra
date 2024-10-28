<?php
$isAjax = isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest';

if ($isAjax) {
    ?>
    <main class="content-docs">
        <section id="documentation-content" class="documentation-content">
            <section id="documentation" class="documentation">
                <h1>Документация</h1>
                <div class="documentation-grid">
                    <h3>Третий грузовой дрон</h3>
                    <h4>Заголовок</h4>

                    <p>«Клевер» — это учебный конструктор программируемого квадрокоптера, состоящего из популярных открытых компонентов, а также набор необходимой документации и библиотек для работы с ним.</p>

                    <p>Набор включает в себя полетный контроллер COEX Pix с полетным стеком PX4, Raspberry Pi 4 в качестве управляющего бортового компьютера, модуль камеры для реализации полетов с использованием компьютерного зрения, а также набор различных датчиков и другой периферии.</p>

                    <p>Платформа Клевера также включает в себя преднастроенный образ для Raspberry Pi в полном наборе необходимого ПО для работы со всей периферией и программирования автономных полетов. Исходный код платформы Клевера и данной документации открыт и доступен на GitHub.</p>

                    <p>Если вы детально изучили документацию, но так и не нашли ответа на свой вопрос, напишите в чат техподдержки и наши специалисты вам с радостью ответят: @COEXHelpdesk.</p>

                    <p>Также у нас есть чат для программистов, которые разрабатывают под PX4, автономную навигацию в помещениях и рои дронов: @DroneCode.</p>

                    <p>Чат по разработке самой платформы Клевера и образа для RPi: @devclover.</p>

                    <p>Вы можете скачать PDF-версию этой документации. The English version of this documentation is available.</p>
                </div>
                <div class="page-navigation">
                    <?php
                    // Определяем предыдущую и следующую страницы
                    $prev_page = '/../docs/drones/Cargo/drone2.php'; // Путь к предыдущей странице
                    $next_page = '/../../docs/remotecontroller.php'; // Путь к следующей странице
                    
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
                        <h3>Третий грузовой дрон</h3>
                        <h4>Заголовок</h4>

                        <p>«Клевер» — это учебный конструктор программируемого квадрокоптера, состоящего из популярных открытых компонентов, а также набор необходимой документации и библиотек для работы с ним.</p>

                        <p>Набор включает в себя полетный контроллер COEX Pix с полетным стеком PX4, Raspberry Pi 4 в качестве управляющего бортового компьютера, модуль камеры для реализации полетов с использованием компьютерного зрения, а также набор различных датчиков и другой периферии.</p>

                        <p>Платформа Клевера также включает в себя преднастроенный образ для Raspberry Pi в полном наборе необходимого ПО для работы со всей периферией и программирования автономных полетов. Исходный код платформы Клевера и данной документации открыт и доступен на GitHub.</p>

                        <p>Если вы детально изучили документацию, но так и не нашли ответа на свой вопрос, напишите в чат техподдержки и наши специалисты вам с радостью ответят: @COEXHelpdesk.</p>

                        <p>Также у нас есть чат для программистов, которые разрабатывают под PX4, автономную навигацию в помещениях и рои дронов: @DroneCode.</p>

                        <p>Чат по разработке самой платформы Клевера и образа для RPi: @devclover.</p>

                        <p>Вы можете скачать PDF-версию этой документации. The English version of this documentation is available.</p>
                    </div>
                    <div class="page-navigation">
                        <?php
                        // Определяем предыдущую и следующую страницы
                        $prev_page = '/../docs/drones/Cargo/drone2.php'; // Путь к предыдущей странице
                        $next_page = '/../../docs/remotecontroller.php'; // Путь к следующей странице
                        
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
