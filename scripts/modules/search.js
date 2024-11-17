export const SearchModule = {
    searchIndex: null,
    searchInput: null,
    searchButton: null,
    contentArea: null,
    searchHandler: null,
    keyPressHandler: null,
    isInitialized: false,

    isDocumentationPage() {
        return (
            window.location.pathname.includes('/docs/') || 
            document.querySelector('.documentation-content') !== null
        );
    },

    async init() {
        if (!this.isDocumentationPage()) {
            return;
        }

        this.searchInput = document.getElementById('docs-search');
        this.searchButton = document.getElementById('search-button');
        
        if (!this.searchInput || !this.searchButton) {
            return;
        }

        if (this.searchHandler) {
            this.searchButton.removeEventListener('click', this.searchHandler);
        }
        if (this.keyPressHandler) {
            this.searchInput.removeEventListener('keypress', this.keyPressHandler);
        }

        this.addEventListeners();
        
        if (!this.searchIndex) {
            await this.loadSearchIndex();
        }

        this.isInitialized = true;
    },

    addEventListeners() {
        this.searchHandler = (e) => {
            e.preventDefault();
            this.performSearch();
        };
        
        this.keyPressHandler = (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.performSearch();
            }
        };

        this.searchButton.addEventListener('click', this.searchHandler);
        this.searchInput.addEventListener('keypress', this.keyPressHandler);
    },

    async performSearch() {
        const query = this.searchInput.value.trim();
        
        if (query.length < 2) {
            alert('Введите минимум 2 символа для поиска');
            return;
        }

        try {
            // Прокручиваем страницу вверх
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });

            // Закрываем мобильное меню, если оно открыто
            const sidebar = document.querySelector('.sidebar');
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            const body = document.body;

            if (window.innerWidth <= 768) {
                if (sidebar?.classList.contains('active')) {
                    sidebar.classList.remove('active');
                    mobileMenuBtn?.classList.remove('active');
                    body.classList.remove('sidebar-open');
                }
            }

            const results = await this.searchInContent(query);
            this.displayResults(results, query);
        } catch (error) {
            alert('Произошла ошибка при поиске');
        }
    },

    async loadSearchIndex() {
        try {
            const response = await fetch('/api/search-index.php');
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const text = await response.text();
            
            try {
                const data = JSON.parse(text);
                
                if (data.error) {
                    console.log('Путь к docs:', data.path);
                    console.log('Document root:', data.root);
                    throw new Error(data.error);
                }
                
                this.searchIndex = data;
            } catch (e) {
                console.error('Ошибка парсинга JSON:', e);
                throw e;
            }
        } catch (error) {
            this.searchIndex = [];
        }
    },

    searchInContent(query) {
        if (!this.searchIndex || !Array.isArray(this.searchIndex)) {
            return [];
        }

        const results = this.searchIndex.filter(item => {
            if (!item || typeof item.title !== 'string' || typeof item.content !== 'string') {
                return false;
            }
            
            const titleMatch = item.title.toLowerCase().includes(query.toLowerCase());
            const contentMatch = item.content.toLowerCase().includes(query.toLowerCase());
            return titleMatch || contentMatch;
        });

        return results;
    },

    displayResults(results, query) {
        let contentArea = document.querySelector('.documentation-content');
        if (!contentArea) {
            contentArea = document.querySelector('.content-docs');
            if (!contentArea) {
                return;
            }
        }

        if (results.length === 0) {
            contentArea.innerHTML = `
                <div class="search-results-container">
                    <div class="search-header">
                        <h2>Результаты поиска</h2>
                        <button class="reset-search-button">
                            Вернуться к документации
                        </button>
                    </div>
                    <div class="no-results-container">
                        <div class="no-results-icon">🔍</div>
                        <h3 class="no-results-title">Ничего не найдено</h3>
                        <p class="no-results-message">По запросу "${query}" ничего не найдено</p>
                        <p class="no-results-suggestion">Попробуйте изменить поисковый запрос или проверьте правильность написания</p>
                    </div>
                </div>
            `;

            const resetButton = contentArea.querySelector('.reset-search-button');
            resetButton.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.reload();
            });
            return;
        }

        // Создаем HTML для результатов
        const resultsHTML = results.map(result => {
            const section = this.determineSection(result.content, result.path);
            const highlightedContent = this.highlightText(result.content, query);
            
            return `
                <div class="search-result-item" data-url="${result.path}">
                    <div class="search-result-header">
                        <h3 class="search-result-title">${section || 'Документация'}</h3>
                    </div>
                    <div class="search-result-preview">${highlightedContent}</div>
                </div>
            `;
        }).join('');

        // Обновляем содержимое
        contentArea.innerHTML = `
            <div class="search-results-container">
                <div class="search-header">
                    <h2>Результаты поиска</h2>
                    <button class="reset-search-button">
                        Вернуться к документации
                    </button>
                </div>
                <p class="search-results-count">Найдено результатов: ${results.length}</p>
                <div class="search-results">
                    ${resultsHTML}
                </div>
            </div>
        `;

        // Добавляем обработчик для кнопки возврата
        const resetButton = contentArea.querySelector('.reset-search-button');
        resetButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.reload();
        });

        this.addResultHandlers();
    },

    determineSection(content, path) {
        const normalizedPath = path.toLowerCase();

        if (normalizedPath.includes('navigationsystems')) {
            if (normalizedPath.includes('infrared.php')) {
                return 'Системы навигации - Инфракрасные системы';
            }
            if (normalizedPath.includes('optical.php')) {
                return 'Системы навигации - Оптические системы';
            }
            if (normalizedPath.includes('ultrasonic.php')) {
                return 'Системы навигации - Ультразвуковые системы';
            }
            return 'Системы навигации';
        }

        if (normalizedPath.includes('payload')) {
            if (normalizedPath.includes('option-board.php')) {
                return 'Полезная нагрузка - Плата расширения';
            }
            if (normalizedPath.includes('sensors.php')) {
                return 'Полезная нагрузка - Сенсоры';
            }
            if (normalizedPath.includes('cameras.php')) {
                return 'Полезная нагрузка - Камеры';
            }
            return 'Полезная нагрузка';
        }

        if (path.match(/fpv|FPV/)) {
            if (path.match(/drone1\.php/i)) return 'FPV дроны - Дрон1';
            if (path.match(/drone2\.php/i)) return 'FPV дроны - Дрон2';
            if (path.match(/drone3\.php/i)) return 'FPV дроны - Дрон3';
            return 'FPV дроны';
        }

        if (path.match(/training|Training/)) {
            if (path.match(/drone1\.php/i)) return 'Учебные дроны - Дрон1';
            if (path.match(/drone2\.php/i)) return 'Учебные дроны - Дрон2';
            if (path.match(/drone3\.php/i)) return 'Учебные дроны - Дрон3';
            return 'Учебные дроны';
        }

        if (path.match(/agricultural|Agricultural/)) {
            if (path.match(/drone1\.php/i)) return 'Сельскохозяйственные дроны - Дрон1';
            if (path.match(/drone2\.php/i)) return 'Сельскохозяйственные дроны - Дрон2';
            if (path.match(/drone3\.php/i)) return 'Сельскохозяйственные дроны - Дрон3';
            return 'Сельскохозяйственные дроны';
        }

        if (path.match(/cargo|Cargo/)) {
            if (path.match(/drone1\.php/i)) return 'Гузовые дроны - Дрон1';
            if (path.match(/drone2\.php/i)) return 'Грузовые дроны - Дрон2';
            if (path.match(/drone3\.php/i)) return 'Грузовые дроны - Дрон3';
            return 'Грузовые дроны';
        }

        if (content.includes('Python') || path.match(/python|Python/)) {
            return 'Программирование - Python';
        }
        if (content.includes('Lua') || content.includes('LUA') || path.match(/lua|Lua/)) {
            return 'Программирование - LUA';
        }
        if (content.includes('TRIK Studio') || path.match(/trik|TRIK/)) {
            return 'Программирование - TRIK Studio';
        }
        if (content.includes('навигаци') || path.match(/navigation|Navigation/)) {
            return 'Системы навигации';
        }
        if (path.match(/coptra-drone-sim\.php/i) || content.includes('Коптра Сим')) {
            return 'Программное обеспечение - Коптра Сим';
        }
        if (path.match(/coptra-station\.php/i) || content.includes('Коптра Station')) {
            return 'Программное обеспечение - Коптра Station';
        }
        if (content.includes('полезная нагрузка') || path.match(/payload|Payload/)) {
            return 'Полезная нагрузка';
        }
        if (content.includes('пульт управления') || path.match(/remotecontroller|RemoteController/i)) {
            return 'Пульт управления';
        }
        if (path.includes('documentation.php') || content.includes('Добро пожаловать')) {
            return 'Введение';
        }
        
        const pathParts = path.toLowerCase().split('/');
        if (path.match(/additionalmaterials|additionalmaterials/i)) {
            if (path.match(/database\.php/i)) {
                return 'Дополнительные материалы - База знаний';
            }
            if (path.match(/downloads\.php/i)) {
                return 'Дополнительные материалы - Загрузки';
            }
            if (path.match(/methods-and-cases\.php/i)) {
                return 'Дополнительные материалы - Методики и кейсы';
            }
            return 'Дополнительные материалы';
        }
        return null;
    },

    highlightText(text, query) {
        // Уменьшаем количество символов для мобильных устройств
        const isMobile = window.innerWidth <= 768;
        const maxLength = isMobile ? 200 : 300;
        const contextLength = isMobile ? 50 : 100;
        
        const lowerText = text.toLowerCase();
        const lowerQuery = query.toLowerCase();
        const index = lowerText.indexOf(lowerQuery);
        
        if (index === -1) return text.slice(0, maxLength) + '...';
        
        let start = Math.max(0, index - contextLength);
        let end = Math.min(text.length, index + query.length + contextLength);
        let excerpt = text.slice(start, end);
        
        if (start > 0) excerpt = '...' + excerpt;
        if (end < text.length) excerpt += '...';
        
        return excerpt.replace(new RegExp(query, 'gi'), match => `<span class="search-highlight">${match}</span>`);
    },

    addResultHandlers() {
        const resultItems = document.querySelectorAll('.search-result-item');
        resultItems.forEach(item => {
            item.addEventListener('click', () => {
                const url = item.dataset.url;
                if (!url) {
                    return;
                }

                // Убираем дублирование /docs/ если оно есть
                const cleanPath = url.replace(/\/docs\/docs\//, '/docs/');
                
                // Ищем соответствующую ссылку в сайдбаре
                const sidebarLinks = document.querySelectorAll('.sidebar a[data-ajax-load]');
                const matchingLink = Array.from(sidebarLinks)
                    .find(link => {
                        const href = link.getAttribute('href');
                        return href && href.includes(cleanPath);
                    });

                if (matchingLink) {
                    matchingLink.click();
                } else {
                    const baseUrl = window.location.origin;
                    const fullUrl = baseUrl + cleanPath;
                    window.location.href = fullUrl;
                }
            });
        });
    }
}; 