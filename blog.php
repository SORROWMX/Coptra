<?php include 'modules/header.php'; ?>

<main class="content">
    <section class="blog-section news">
        <div class="blog-decorations">
            <div class="decoration-circle"></div>
            <div class="decoration-square"></div>
            <div class="decoration-dots"></div>
            <div class="decoration-line"></div>
        </div>

        <div class="container">
            <div class="blog-header">
                <div class="wave-decoration">
                    <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0,20 C320,40 420,0 720,20 C1020,40 1120,0 1440,20 V40 H0 V20Z" />
                    </svg>
                </div>
                <h1 class="blog-title">Блог Коптра</h1>
                <p class="blog-subtitle">Новости, обзоры и полезные материалы из мира дронов</p>
            </div>
            
            <div class="blog-filters">
                <div class="search-container">
                    <input type="text" placeholder="Поиск по статьям..." class="blog-search">
                    <i class="fas fa-search"></i>
                </div>
                <div class="blog-filters">
                    <button class="tag-btn active" data-tag="all">Все статьи</button>
                    <button class="tag-btn" data-tag="Технологии">Технологии</button>
                    <button class="tag-btn" data-tag="Образование">Образование</button>
                    <button class="tag-btn" data-tag="Сельское хозяйство">Сельское хозяйство</button>
                    <button class="tag-btn" data-tag="Новости">Новости</button>
                </div>
            </div>

                <div class="news-grid">
                    <article class="news-item">
                        <div class="news-item__media">
                            <img src="assets/images/drone-education.png" alt="Дроны в образовании">
                            <div class="news-item__read-time">
                                <i class="far fa-clock"></i>
                                <span>5 мин</span>
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
                                    <time datetime="2024-05-15">15.05.2024</time>
                                </div>
                            </div>
                            <h3 class="news-item__title" data-searchable>Как дроны меняют систему образования</h3>
                            <p class="news-item__excerpt" data-searchable>
                                Исследуем инновационные подходы к обучению с использованием дронов и их влияние на образовательный процесс.
                            </p>
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
                    <article class="news-item">
                        <div class="news-item__media">
                            <img src="assets/images/drone-education.png" alt="Дроны в образовании">
                            <div class="news-item__read-time">
                                <i class="far fa-clock"></i>
                                <span>5 мин</span>
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
                                    <time datetime="2024-05-15">15.05.2024</time>
                                </div>
                            </div>
                            <h3 class="news-item__title" data-searchable>Как дроны меняют систему образования</h3>
                            <p class="news-item__excerpt" data-searchable>
                                Исследуем инновационные подходы к обучению с использованием дронов и их влияние на образовательный процесс.
                            </p>
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
                    <article class="news-item">
                        <div class="news-item__media">
                            <img src="assets/images/drone-education.png" alt="Дроны в образовании">
                            <div class="news-item__read-time">
                                <i class="far fa-clock"></i>
                                <span>5 мин</span>
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
                                    <time datetime="2024-05-15">15.05.2024</time>
                                </div>
                            </div>
                            <h3 class="news-item__title" data-searchable>Как дроны меняют систему образования</h3>
                            <p class="news-item__excerpt" data-searchable>
                                Исследуем инновационные подходы к обучению с использованием дронов и их влияние на образовательный процесс.
                            </p>
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
                    <article class="news-item">
                        <div class="news-item__media">
                            <img src="assets/images/drone-education.png" alt="Дроны в образовании">
                            <div class="news-item__read-time">
                                <i class="far fa-clock"></i>
                                <span>5 мин</span>
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
                                    <time datetime="2024-05-15">15.05.2024</time>
                                </div>
                            </div>
                            <h3 class="news-item__title" data-searchable>Как дроны меняют систему образования</h3>
                            <p class="news-item__excerpt" data-searchable>
                                Исследуем инновационные подходы к обучению с использованием дронов и их влияние на образовательный процесс.
                            </p>
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
                    <article class="news-item">
                        <div class="news-item__media">
                            <img src="assets/images/drone-education.png" alt="Дроны в образовании">
                            <div class="news-item__read-time">
                                <i class="far fa-clock"></i>
                                <span>5 мин</span>
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
                                    <time datetime="2024-05-15">15.05.2024</time>
                                </div>
                            </div>
                            <h3 class="news-item__title" data-searchable>Как дроны меняют систему образования</h3>
                            <p class="news-item__excerpt" data-searchable>
                                Исследуем инновационные подходы к обучению с использованием дронов и их влияние на образовательный процесс.
                            </p>
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
                    <article class="news-item">
                        <div class="news-item__media">
                            <img src="assets/images/drone-education.png" alt="Дроны в образовании">
                            <div class="news-item__read-time">
                                <i class="far fa-clock"></i>
                                <span>5 мин</span>
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
                                    <time datetime="2024-05-15">15.05.2024</time>
                                </div>
                            </div>
                            <h3 class="news-item__title" data-searchable>Как дроны меняют систему образования</h3>
                            <p class="news-item__excerpt" data-searchable>
                                Исследуем инновационные подходы к обучению с использованием дронов и их влияние на образовательный процесс.
                            </p>
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
                    <article class="news-item">
                        <div class="news-item__media">
                            <img src="assets/images/drone-education.png" alt="Дроны в образовании">
                            <div class="news-item__read-time">
                                <i class="far fa-clock"></i>
                                <span>5 мин</span>
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
                                    <time datetime="2024-05-15">15.05.2024</time>
                                </div>
                            </div>
                            <h3 class="news-item__title" data-searchable>Как дроны меняют систему образования</h3>
                            <p class="news-item__excerpt" data-searchable>
                                Исследуем инновационные подходы к обучению с использованием дронов и их влияние на образовательный процесс.
                            </p>
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
                    <article class="news-item">
                        <div class="news-item__media">
                            <img src="assets/images/drone-education.png" alt="Дроны в образовании">
                            <div class="news-item__read-time">
                                <i class="far fa-clock"></i>
                                <span>5 мин</span>
                            </div>
                        </div>
                        <div class="news-item__content">
                            <div class="news-item__meta">
                                <div class="news-item__tags">
                                    <span class="tag" data-tag="Технологии">Технологии</span>
                                    <span class="tag" data-tag="Сельское хозяйство">Сельское хозяйство</span>
                                </div>
                                <div class="news-item__date">
                                    <i class="far fa-calendar-alt"></i>
                                    <time datetime="2024-05-15">15.05.2024</time>
                                </div>
                            </div>
                            <h3 class="news-item__title" data-searchable>Как дроны меняют систему картошки</h3>
                            <p class="news-item__excerpt" data-searchable>
                                Исследуем инновационные подходы к обучению с использованием дронов и их влияние на образовательный процесс.
                            </p>
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
                    <article class="news-item">
                        <div class="news-item__media">
                            <img src="assets/images/drone-education.png" alt="Дроны в образовании">
                            <div class="news-item__read-time">
                                <i class="far fa-clock"></i>
                                <span>5 мин</span>
                            </div>
                        </div>
                        <div class="news-item__content">
                            <div class="news-item__meta">
                                <div class="news-item__tags">
                                    <span class="tag" data-tag="Сельское хозяйство">Сельское хозяйство</span>
                                    <span class="tag" data-tag="Образование">Образование</span>
                                </div>
                                <div class="news-item__date">
                                    <i class="far fa-calendar-alt"></i>
                                    <time datetime="2024-05-15">15.05.2024</time>
                                </div>
                            </div>
                            <h3 class="news-item__title" data-searchable>Как дроны меняют систему образования</h3>
                            <p class="news-item__excerpt" data-searchable>
                                Исследуем инновационные подходы к картошке с использованием дронов и их влияние на образовательный процесс.
                            </p>
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

            <div class="blog-pagination">
                <button class="pagination-btn active">1</button>
                <button class="pagination-btn">2</button>
                <button class="pagination-btn">3</button>
                <span class="pagination-dots">...</span>
                <button class="pagination-btn">10</button>
            </div>
        </div>
    </section>
</main>

<?php include 'modules/footer.php'; ?>