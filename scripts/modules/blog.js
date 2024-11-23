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
            'technology': 'Технологии',
            'education': 'Образование',
            'agriculture': 'Сельское хозяйство',
            'news': 'Новости'
        }
    },

    init() {
        const newsGrid = document.querySelector('.news-grid');
        const searchInput = document.querySelector('.blog-search');
        const tagButtons = document.querySelectorAll('.tag-btn');
        const paginationContainer = document.querySelector('.blog-pagination');
        
        if (!newsGrid) return;

        // Инициализация начального состояния
        this.state.filteredArticles = Array.from(newsGrid.querySelectorAll('.news-item'));
        this.updatePagination();
        this.showPage(1);

        // Обработчик для тегов в карточках новостей
        newsGrid.addEventListener('click', (e) => {
            if (e.target.classList.contains('news-tag')) {
                const selectedTag = e.target.dataset.tag;
                // Находим соответствующую кнопку в фильтрах
                const tagButton = Array.from(tagButtons).find(btn => btn.dataset.tag === selectedTag);
                if (tagButton) {
                    // Имитируем клик по кнопке фильтра
                    tagButton.click();
                }
            }
        });

        // Фильтрация по тегам
        tagButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Обновляем активную кнопку
                tagButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                this.state.selectedTag = button.dataset.tag;
                this.applyFilters(newsGrid);
            });
        });

        // Поиск по статьям
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.state.searchText = e.target.value.toLowerCase();
                this.applyFilters(newsGrid);
            });
        }

        // Обработчик пагинации
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

        // В методе init() обновим ссылки
        const blogCards = newsGrid.querySelectorAll('.blog-card');
        blogCards.forEach(card => {
            const link = card.querySelector('.read-more');
            if (link) {
                link.href = `blog-post.php?id=${card.dataset.id}`;
            }
        });

        // Инициализация IntersectionObserver один раз
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    requestAnimationFrame(() => {
                        entry.target.classList.add('fade-in');
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '50px'
        });

        // Функция для обновления наблюдателя
        const updateObserver = (articles) => {
            articles.forEach(article => {
                article.classList.remove('fade-in');
                article.classList.add('blog-card-animated');
                observer.observe(article);
            });
        };

        // Обновляем наблюдатель при изменении отображаемых статей
        const originalShowPage = this.showPage;
        this.showPage = function(page) {
            originalShowPage.call(this, page);
            const visibleArticles = this.state.filteredArticles
                .slice((page - 1) * this.state.itemsPerPage, page * this.state.itemsPerPage);
            updateObserver(visibleArticles);
        };

        // Инициализация NewsAnimationModule только если нужно
        const newsSection = document.querySelector('.blog-section.news');
        if (newsSection) {
            NewsAnimationModule.init();
        }

        // Очистка при уничтожении
        return () => observer.disconnect();
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
        const startIndex = (page - 1) * this.state.itemsPerPage;
        const endIndex = startIndex + this.state.itemsPerPage;

        // Сначала скрываем ВСЕ статьи на странице, а не только отфильтрованные
        const allArticles = document.querySelectorAll('.news-item');
        allArticles.forEach(article => {
            article.style.display = 'none';
        });

        // Показываем только отфильтрованные статьи для текущей страницы
        this.state.filteredArticles.slice(startIndex, endIndex).forEach(article => {
            article.style.display = 'block';
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
        const allArticles = Array.from(newsGrid.querySelectorAll('.news-item'));
        
        this.state.filteredArticles = allArticles.filter(article => {
            const matchesTag = this.state.selectedTag === 'all' || 
                article.dataset.tags.split(',').map(tag => tag.trim()).includes(this.state.selectedTag);
            
            const matchesSearch = this.state.searchText === '' || 
                article.querySelector('h3').textContent.toLowerCase().includes(this.state.searchText) || 
                article.querySelector('.news-excerpt').textContent.toLowerCase().includes(this.state.searchText);
            
            return matchesTag && matchesSearch;
        });

        if (this.state.filteredArticles.length === 0) {
            allArticles.forEach(article => article.style.display = 'none');
            
            let noResultsMsg = newsGrid.querySelector('.no-results-message');
            if (!noResultsMsg) {
                noResultsMsg = document.createElement('div');
                noResultsMsg.className = 'no-results-message';
                newsGrid.appendChild(noResultsMsg);
            }
            
            // Используем перевод тега из объекта tagTranslations
            const tagText = this.state.selectedTag === 'all' 
                ? '' 
                : ` по тегу "${this.state.tagTranslations[this.state.selectedTag]}"`;
            const searchText = this.state.searchText ? ` и поиску "${this.state.searchText}"` : '';
            noResultsMsg.textContent = `Статей${tagText}${searchText} не найдено`;
            noResultsMsg.style.display = 'block';
            
            if (this.paginationContainer) {
                this.paginationContainer.style.display = 'none';
            }
        } else {
            const noResultsMsg = newsGrid.querySelector('.no-results-message');
            if (noResultsMsg) {
                noResultsMsg.style.display = 'none';
            }
            
            if (this.paginationContainer) {
                this.paginationContainer.style.display = 'flex';
            }
            
            // Сбрасываем на первую страницу и обновляем отображение
            this.state.currentPage = 1;
            this.updatePagination();
            this.showPage(1);
        }
    }
}; 