import { NewsAnimationModule } from './animations/news.js';

export const BlogModule = {
    state: {
        currentPage: 1,
        itemsPerPage: 6, // Количество статей на странице
        filteredArticles: [], // Массив отфильтрованных статей
        selectedTag: 'all', // Добавляем отслеживание выбранного тега
        searchText: '', // Добавляем отслеживание текста поиска
        // Добавляем переводы тегов
        tagTranslations: {
            'all': 'Все статьи',
            'Технологии': 'Технологии',
            'Образование': 'Образование',
            'Сельское хозяйство': 'Сельское хозяйство',
            'Новости': 'Новости'
        }
    },

    init() {
        try {
            const isBlogPage = document.querySelector('.blog-section');
            const newsGrid = document.querySelector('.news-grid');
            
            if (!isBlogPage || !newsGrid) return;

            const searchInput = document.querySelector('.blog-search');
            const tagButtons = document.querySelectorAll('.tag-btn');
            const paginationContainer = document.querySelector('.blog-pagination');
            
            // Инициализируем карточки
            const allArticles = newsGrid.querySelectorAll('.news-item');
            allArticles.forEach(article => {
                article.classList.add('blog-card-animated');
                // Сбрасываем стили, которые могли остаться
                article.style.filter = 'none';
                article.style.backdropFilter = 'none';
                article.style.webkitBackdropFilter = 'none';
            });

            // Инициализация IntersectionObserver для анимации
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        requestAnimationFrame(() => {
                            entry.target.classList.add('fade-in');
                            // После анимации убираем фильтры
                            setTimeout(() => {
                                entry.target.style.filter = 'none';
                                entry.target.style.backdropFilter = 'none';
                                entry.target.style.webkitBackdropFilter = 'none';
                            }, 300); // Время анимации
                        });
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '50px'
            });

            // Наблюдаем за карточками
            allArticles.forEach(article => {
                observer.observe(article);
            });

            this.state.filteredArticles = Array.from(allArticles);
            this.updatePagination();
            this.showPage(1);

            // Остальные обработчики остаются без изменений...
            if (searchInput) {
                searchInput.addEventListener('input', (e) => {
                    this.state.searchText = e.target.value.toLowerCase();
                    this.applyFilters(newsGrid);
                });
            }

            tagButtons.forEach(button => {
                button.addEventListener('click', () => {
                    tagButtons.forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');
                    this.state.selectedTag = button.dataset.tag;
                    this.applyFilters(newsGrid);
                });
            });

            if (paginationContainer) {
                paginationContainer.addEventListener('click', (e) => {
                    if (e.target.classList.contains('pagination-btn')) {
                        const page = parseInt(e.target.textContent);
                        if (!isNaN(page)) {
                            this.showPage(page);
                        }
                    }
                });
            }

            // Добавляем обработчик для тегов в карточках
            const cardTags = newsGrid.querySelectorAll('.news-item .tag');
            cardTags.forEach(tag => {
                tag.addEventListener('click', (e) => {
                    e.preventDefault(); // Предотвращаем стандартное поведение ссылки
                    const tagValue = tag.dataset.tag;
                    
                    // Находим и активируем соответствующую кнопку фильтра
                    const targetButton = document.querySelector(`.tag-btn[data-tag="${tagValue}"]`);
                    if (targetButton) {
                        // Снимаем активный класс со всех кнопок
                        tagButtons.forEach(btn => btn.classList.remove('active'));
                        // Активируем нужную кнопку
                        targetButton.classList.add('active');
                        // Обновляем фильтр
                        this.state.selectedTag = tagValue;
                        this.applyFilters(newsGrid);
                    }
                });
            });

        } catch (error) {
            console.warn('Blog module initialization error:', error);
        }
    },

    updatePagination() {
        const paginationContainer = document.querySelector('.blog-pagination');
        if (!paginationContainer) return;

        const totalPages = Math.ceil(this.state.filteredArticles.length / this.state.itemsPerPage);
        let paginationHTML = '';

        // Показываем максимум 5 кнопок страниц
        const maxVisibleButtons = 5;
        let startPage = Math.max(1, this.state.currentPage - Math.floor(maxVisibleButtons / 2));
        let endPage = Math.min(totalPages, startPage + maxVisibleButtons - 1);

        if (endPage - startPage + 1 < maxVisibleButtons) {
            startPage = Math.max(1, endPage - maxVisibleButtons + 1);
        }

        // Первая страница
        if (startPage > 1) {
            paginationHTML += `<button class="pagination-btn">1</button>`;
            if (startPage > 2) paginationHTML += `<span class="pagination-dots">...</span>`;
        }

        // Средние страницы
        for (let i = startPage; i <= endPage; i++) {
            paginationHTML += `
                <button class="pagination-btn ${i === this.state.currentPage ? 'active' : ''}">${i}</button>
            `;
        }

        // Последняя страница
        if (endPage < totalPages) {
            if (endPage < totalPages - 1) paginationHTML += `<span class="pagination-dots">...</span>`;
            paginationHTML += `<button class="pagination-btn">${totalPages}</button>`;
        }

        paginationContainer.innerHTML = paginationHTML;
    },

    showPage(page) {
        // Проверяем, находимся ли мы на странице блога
        const isBlogPage = document.querySelector('.blog-section');
        if (!isBlogPage) return;

        const startIndex = (page - 1) * this.state.itemsPerPage;
        const endIndex = startIndex + this.state.itemsPerPage;

        // Сначала скрываем ВСЕ статьи на странице
        const allArticles = document.querySelectorAll('.news-item');
        allArticles.forEach(article => {
            if (article.closest('.blog-section')) {
                article.style.display = 'none';
                article.style.filter = 'none';
                article.style.backdropFilter = 'none';
                article.style.webkitBackdropFilter = 'none';
            }
        });

        // Показываем только отфильтрованные статьи для текущей страницы
        this.state.filteredArticles.slice(startIndex, endIndex).forEach(article => {
            if (article.closest('.blog-section')) {
                article.style.display = 'block';
                
                // Убеждаемся, что все вложенные элементы видны
                const elements = article.querySelectorAll('*');
                elements.forEach(el => {
                    el.style.filter = 'none';
                    el.style.backdropFilter = 'none';
                    el.style.webkitBackdropFilter = 'none';
                    el.style.opacity = '1';
                });
            }
        });

        // Обновляем текущую страницу и пагинацию
        this.state.currentPage = page;
        this.updatePagination();

        // Плавный скролл к началу секции блога
        const blogSection = document.querySelector('.blog-section');
        if (blogSection) {
            blogSection.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }
    },

    // Новый метод для применения обоих фильтров
    applyFilters(newsGrid) {
        // Проверяем, находимся ли мы на странице блога
        const isBlogPage = document.querySelector('.blog-section');
        if (!isBlogPage) return;

        const allArticles = Array.from(newsGrid.querySelectorAll('.news-item'));
        
        this.state.filteredArticles = allArticles.filter(article => {
            // Проверяем, что статья находится в секции блога
            if (!article.closest('.blog-section')) return false;

            // Проверка тега
            const matchesTag = this.state.selectedTag === 'all' || 
                article.querySelector(`.tag[data-tag="${this.state.selectedTag}"]`) !== null;
            
            // Проверка поиска
            const matchesSearch = this.state.searchText === '' || 
                article.querySelector('h3').textContent.toLowerCase().includes(this.state.searchText) || 
                article.querySelector('.news-item__excerpt').textContent.toLowerCase().includes(this.state.searchText);
            
            return matchesTag && matchesSearch;
        });

        // Показываем/скрываем статьи
        if (this.state.filteredArticles.length === 0) {
            // Код для случая, когда статьи не найдены
            allArticles.forEach(article => article.style.display = 'none');
            
            let noResultsMsg = newsGrid.querySelector('.no-results-message');
            if (!noResultsMsg) {
                noResultsMsg = document.createElement('div');
                noResultsMsg.className = 'no-results-message';
                newsGrid.appendChild(noResultsMsg);
            }
            
            const tagText = this.state.selectedTag === 'all' 
                ? '' 
                : ` по тегу "${this.state.tagTranslations[this.state.selectedTag]}"`;
            const searchText = this.state.searchText ? ` и поиску "${this.state.searchText}"` : '';
            noResultsMsg.textContent = `Статей${tagText}${searchText} не найдено`;
            noResultsMsg.style.display = 'block';
        } else {
            // Скрываем сообщение об отсутствии результатов
            const noResultsMsg = newsGrid.querySelector('.no-results-message');
            if (noResultsMsg) {
                noResultsMsg.style.display = 'none';
            }
            
            // Показываем отфильтрованные статьи
            allArticles.forEach(article => {
                article.style.display = this.state.filteredArticles.includes(article) ? 'block' : 'none';
            });
        }

        // Обновляем пагинацию
        this.state.currentPage = 1;
        this.updatePagination();
        this.showPage(1);
    }
}; 