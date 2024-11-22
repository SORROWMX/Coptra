export const BlogModule = {
    state: {
        currentPage: 1,
        itemsPerPage: 6, // Количество статей на странице
        filteredArticles: [], // Массив отфильтрованных статей
    },

    init() {
        const blogGrid = document.querySelector('.blog-grid');
        const searchInput = document.querySelector('.blog-search');
        const tagButtons = document.querySelectorAll('.tag-btn');
        const paginationContainer = document.querySelector('.blog-pagination');
        
        if (!blogGrid) return;

        // Инициализация начального состояния
        this.state.filteredArticles = Array.from(blogGrid.querySelectorAll('.blog-card'));
        this.updatePagination();
        this.showPage(1);

        // Фильтрация по тегам
        tagButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Обновляем активную кнопку
                tagButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const selectedTag = button.dataset.tag;
                const allArticles = Array.from(blogGrid.querySelectorAll('.blog-card'));

                // Обновляем фильтрованные статьи
                this.state.filteredArticles = allArticles.filter(article => {
                    if (selectedTag === 'all') return true;
                    
                    const articleTags = article.dataset.tags.split(',').map(tag => tag.trim());
                    return articleTags.includes(selectedTag);
                });

                // Если нет статей после фильтрации, показываем сообщение
                if (this.state.filteredArticles.length === 0) {
                    // Скрываем все статьи
                    allArticles.forEach(article => article.style.display = 'none');
                    
                    // Проверяем, существует ли уже сообщение
                    let noResultsMsg = blogGrid.querySelector('.no-results-message');
                    if (!noResultsMsg) {
                        noResultsMsg = document.createElement('div');
                        noResultsMsg.className = 'no-results-message';
                        blogGrid.appendChild(noResultsMsg);
                    }
                    noResultsMsg.textContent = `Статей по тегу "${button.textContent}" не найдено`;
                    noResultsMsg.style.display = 'block';
                    
                    // Скрываем пагинацию
                    if (paginationContainer) {
                        paginationContainer.style.display = 'none';
                    }
                } else {
                    // Удаляем сообщение об отсутствии результатов, если оно есть
                    const noResultsMsg = blogGrid.querySelector('.no-results-message');
                    if (noResultsMsg) {
                        noResultsMsg.style.display = 'none';
                    }
                    
                    // Показываем пагинацию
                    if (paginationContainer) {
                        paginationContainer.style.display = 'flex';
                    }
                    
                    // Сбрасываем на первую страницу и обновляем отображение
                    this.state.currentPage = 1;
                    this.updatePagination();
                    this.showPage(1);
                }
            });
        });

        // Поиск по статьям
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const searchText = e.target.value.toLowerCase();
                const allArticles = Array.from(blogGrid.querySelectorAll('.blog-card'));

                // Сначала показываем все статьи
                allArticles.forEach(article => {
                    article.style.display = 'none';
                });

                // Фильтруем и обновляем состояние
                this.state.filteredArticles = allArticles.filter(article => {
                    const title = article.querySelector('h2').textContent.toLowerCase();
                    const content = article.querySelector('p').textContent.toLowerCase();
                    return title.includes(searchText) || content.includes(searchText);
                });

                // Сбрасываем на первую страницу и обновляем отображение
                this.state.currentPage = 1;
                this.updatePagination();
                this.showPage(1);
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
        const blogCards = blogGrid.querySelectorAll('.blog-card');
        blogCards.forEach(card => {
            const link = card.querySelector('.read-more');
            if (link) {
                link.href = `blog-post.php?id=${card.dataset.id}`;
            }
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        this.state.filteredArticles.forEach(article => {
            article.classList.add('blog-card-animated');
            observer.observe(article);
        });

        // Добавляем обработчик для тегов внутри карточек
        blogGrid.addEventListener('click', (e) => {
            const cardTag = e.target.closest('.tag');
            if (!cardTag) return;

            // Предотвращаем всплытие события
            e.preventDefault();
            e.stopPropagation();

            // Получаем текст тега
            const tagText = cardTag.textContent.trim();

            // Находим соответствующую кнопку фильтра
            const filterButton = Array.from(tagButtons).find(btn => 
                btn.textContent.trim() === tagText
            );

            if (filterButton) {
                // Симулируем клик по кнопке фильтра
                filterButton.click();
                
                // Скроллим к началу секции блога
                document.querySelector('.blog-section').scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }
        });
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

        // Скрываем все статьи
        this.state.filteredArticles.forEach(article => {
            article.style.display = 'none';
        });

        // Показываем только статьи для текущей страницы
        this.state.filteredArticles.slice(startIndex, endIndex).forEach(article => {
            article.style.display = 'block';
        });

        // Обновляем текущую страницу и пагинацию
        this.state.currentPage = page;
        this.updatePagination();

        // Плавный скролл к началу секции блога
        document.querySelector('.blog-section').scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    }
}; 