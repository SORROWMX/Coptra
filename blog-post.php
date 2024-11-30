<?php
include 'modules/header.php';  
// Здесь будет логика получения данных статьи из базы данных
// Пока используем тестовые данные
$post_image = '/assets/images/blog/image.png';
$post_title = 'Как дроны меняют систему образования';
$post_date = '15.05.2024';
$post_author = 'Александр Петров';
$post_author_position = 'Технический специалист';
$post_read_time = '5 мин';
$post_views = '1.2K';
$post_tags = ['Технологии', 'Образование'];
?>

<main class="content">
    <section class="blog-post-section">
        <div class="blog-post-hero" style="--blog-post-hero-image: url('<?php echo $post_image; ?>');">
            <div class="blog-post-meta-top">
                <div class="blog-post-stats">
                    <span class="read-time"><i class="far fa-clock"></i> <?php echo $post_read_time; ?> чтения</span>
                </div>
                <div class="blog-post-date">
                    <i class="far fa-calendar-alt"></i>
                    <time datetime="2024-05-15"><?php echo $post_date; ?></time>
                </div>
            </div>
            <h1 class="blog-post-title"><?php echo $post_title; ?></h1>
        </div>

        <div class="container">
            <article class="blog-post">
                <div class="blog-post-content">
                    <h2 class="blog-post-content-title">Как дроны меняют систему образования</h2>
                    <div class="blog-post-lead">
                        Дроны становятся неотъемлемой частью образовательного процесса, предлагая новые возможности для обучения и исследования. В этой статье мы рассмотрим, как беспилотные технологии трансформируют традиционные методы обучения и открывают новые горизонты для студентов и преподавателей.
                    </div>

                    <h2>Инновационные подходы к обучению</h2>
                    <p>С использованием дронов студенты могут изучать физику, математику и программирование на практике. Беспилотные технологии позволяют визуализировать сложные концепции и делают обучение более интерактивным и увлекательным.</p>
                    
                    <div class="blog-post-quote">
                        <blockquote>
                            Использование дронов в образовании — это не просто тренд, а необходимость современного образовательного процесса. Они помогают студентам лучше понимать сложные концепции и развивать практические навыки.
                        </blockquote>
                        <cite>
                            <span class="cite-author-name">Михаил Иванов</span>
                            <span class="cite-author-position">Профессор робототехники</span>
                        </cite>
                    </div>

                    <h2>Влияние на образовательный процесс</h2>
                    <p>Дроны помогают развивать навыки критического мышления и решения проблем. Они также способствуют развитию командной работы и коммуникации среди студентов.</p>

                    <div class="goals-section">
                        <div class="goal-steps">
                            <h3>Ключевые преимущества использования дронов в образовании:</h3>
                            <div class="goal-step visible">
                                <div class="step-marker"></div>
                                <p>Практическое применение теоретических знаний</p>
                            </div>
                            <div class="goal-step visible">
                                <div class="step-marker"></div>
                                <p>Развитие навыков программирования и инженерного мышления</p>
                            </div>
                            <div class="goal-step visible">
                                <div class="step-marker"></div>
                                <p>Повышение вовлеченности студентов в учебный процесс</p>
                            </div>
                            <div class="goal-step visible">
                                <div class="step-marker"></div>
                                <p>Подготовка к будущим профессиям в сфере технологий</p>
                            </div>
                    </div>
                </div>
                <div class="article-end">
                    <div class="blog-post-meta-bottom">
                        <div class="blog-post-tags">
                            <?php foreach ($post_tags as $tag): ?>
                                <a href="#" class="tag" data-tag="<?php echo $tag; ?>"><?php echo $tag; ?></a>
                            <?php endforeach; ?>
                        </div>
                    </div>

                    <div class="article-end-share">
                        <div class="article-end-share-left">
                            <span>Поделиться:</span>
                            <div class="article-end-share-buttons">
                                <a href="#" class="article-end-share-button vk"><i class="fab fa-vk"></i></a>
                                <a href="#" class="article-end-share-button telegram"><i class="fab fa-telegram-plane"></i></a>
                                <button class="article-end-share-button copy-link" title="Копировать ссылку">
                                    <i class="fas fa-link"></i>
                                </button>
                            </div>
                        </div>
                        <div class="article-end-share-right">
                            <div class="blog-post-author">
                                <img src="assets/images/blog/author-avatar.jpg" alt="Автор" class="author-avatar">
                                <div class="author-info">
                                    <span class="author-name"><?php echo $post_author; ?></span>
                                    <span class="author-position"><?php echo $post_author_position; ?></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="article-end-navigation">
                        <a href="#" class="article-end-prev">
                            <i class="fas fa-arrow-left"></i>
                            <span>Предыдущая статья</span>
                        </a>
                        <a href="#" class="article-end-next">
                            <span>Следующая статья</span>
                            <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>

            </article>

            <section class="related-posts">
                <div class="container">
                    <h2>Недавние статьи</h2>
                    <div class="swiper related-posts-slider">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <article class="news-item">
                                    <div class="news-item__media">
                                        <img src="assets/images/blog/related-1.jpg" alt="Будущее образования: VR и AR технологии">
                                        <div class="news-item__read-time">
                                            <i class="far fa-clock"></i>
                                            <span>7 мин</span>
                                        </div>
                                    </div>
                                    <div class="news-item__content">
                                        <div class="news-item__meta">
                                            <div class="news-item__tags">
                                                <span class="tag" data-tag="Технологии">Технологии</span>
                                                <span class="tag" data-tag="Образование">Образование</span>
                                            </div>
                                            <div class="news-item__date">
                                                <i class="far fa-calendar-alt"></i>
                                                <time datetime="2024-05-10">10.05.2024</time>
                                            </div>
                                        </div>
                                        <h3 class="news-item__title" data-searchable>Будущее образования: VR и AR технологии</h3>
                                        <p class="news-item__excerpt" data-searchable>Как виртуальная и дополненная реальность меняют подход к обучению в современных образовательных учреждениях.</p>
                                        <div class="news-item__footer">
                                            <a href="#" class="news-item__link">
                                                <span>Читать далее</span>
                                                <svg viewBox="0 0 24 24">
                                                    <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
                                                </svg>
                                            </a>
                                            <div class="news-item__share">
                                                <button class="share-button">
                                                    <i class="fas fa-share-alt"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div class="swiper-slide">
                                <article class="news-item">
                                    <div class="news-item__media">
                                        <img src="assets/images/blog/related-1.jpg" alt="Инновации в дронах 2024">
                                        <div class="news-item__read-time">
                                            <i class="far fa-clock"></i>
                                            <span>5 мин</span>
                                        </div>
                                    </div>
                                    <div class="news-item__content">
                                        <div class="news-item__meta">
                                            <div class="news-item__tags">
                                                <span class="tag" data-tag="Технологии">Технологии</span>
                                                <span class="tag" data-tag="Новости">Новости</span>
                                            </div>
                                            <div class="news-item__date">
                                                <i class="far fa-calendar-alt"></i>
                                                <time datetime="2024-05-08">08.05.2024</time>
                                            </div>
                                        </div>
                                        <h3 class="news-item__title" data-searchable>Инновации в дронах 2024</h3>
                                        <p class="news-item__excerpt" data-searchable>Обзор последних технологических достижений в области беспилотных летательных аппаратов и их применение.</p>
                                        <div class="news-item__footer">
                                            <a href="#" class="news-item__link">
                                                <span>Читать далее</span>
                                                <svg viewBox="0 0 24 24">
                                                    <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
                                                </svg>
                                            </a>
                                            <div class="news-item__share">
                                                <button class="share-button">
                                                    <i class="fas fa-share-alt"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div class="swiper-slide">
                                <article class="news-item">
                                    <div class="news-item__media">
                                        <img src="assets/images/blog/related-1.jpg" alt="Инновации в дронах 2024">
                                        <div class="news-item__read-time">
                                            <i class="far fa-clock"></i>
                                            <span>5 мин</span>
                                        </div>
                                    </div>
                                    <div class="news-item__content">
                                        <div class="news-item__meta">
                                            <div class="news-item__tags">
                                                <span class="tag" data-tag="Технологии">Технологии</span>
                                                <span class="tag" data-tag="Новости">Новости</span>
                                            </div>
                                            <div class="news-item__date">
                                                <i class="far fa-calendar-alt"></i>
                                                <time datetime="2024-05-08">08.05.2024</time>
                                            </div>
                                        </div>
                                        <h3 class="news-item__title" data-searchable>Инновации в дронах 2024</h3>
                                        <p class="news-item__excerpt" data-searchable>Обзор последних технологических достижений в области беспилотных летательных аппаратов и их применение.</p>
                                        <div class="news-item__footer">
                                            <a href="#" class="news-item__link">
                                                <span>Читать далее</span>
                                                <svg viewBox="0 0 24 24">
                                                    <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
                                                </svg>
                                            </a>
                                            <div class="news-item__share">
                                                <button class="share-button">
                                                    <i class="fas fa-share-alt"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div class="swiper-slide">
                                <article class="news-item">
                                    <div class="news-item__media">
                                        <img src="assets/images/blog/related-1.jpg" alt="Инновации в дронах 2024">
                                        <div class="news-item__read-time">
                                            <i class="far fa-clock"></i>
                                            <span>5 мин</span>
                                        </div>
                                    </div>
                                    <div class="news-item__content">
                                        <div class="news-item__meta">
                                            <div class="news-item__tags">
                                                <span class="tag" data-tag="Технологии">Технологии</span>
                                                <span class="tag" data-tag="Новости">Новости</span>
                                            </div>
                                            <div class="news-item__date">
                                                <i class="far fa-calendar-alt"></i>
                                                <time datetime="2024-05-08">08.05.2024</time>
                                            </div>
                                        </div>
                                        <h3 class="news-item__title" data-searchable>Инновации в дронах 2024</h3>
                                        <p class="news-item__excerpt" data-searchable>Обзор последних технологических достижений в области беспилотных летательных аппаратов и их применение.</p>
                                        <div class="news-item__footer">
                                            <a href="#" class="news-item__link">
                                                <span>Читать далее</span>
                                                <svg viewBox="0 0 24 24">
                                                    <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
                                                </svg>
                                            </a>
                                            <div class="news-item__share">
                                                <button class="share-button">
                                                    <i class="fas fa-share-alt"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div class="swiper-pagination"></div>
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                    </div>
                </div>
            </section>
        </div>
    </section>
</main>

<?php include 'modules/footer.php'; ?>
