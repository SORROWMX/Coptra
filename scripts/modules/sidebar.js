export const SidebarModule = {
    init() {
        this.sidebar = document.querySelector('.sidebar');
        this.mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        this.expandableItems = document.querySelectorAll('.sidebar-item.expandable');
        this.contentArea = document.querySelector('.content-docs');
        
        if (!this.sidebar || !this.mobileMenuBtn) return;

        this.setupEventListeners();
        this.initExpandableItems();
        this.initAjaxNavigation();
        this.initSidebar();
    },

    setupEventListeners() {
        // Обработчик для мобильной кнопки
        this.mobileMenuBtn.addEventListener('click', () => {
            this.sidebar.classList.toggle('active');
            this.mobileMenuBtn.classList.toggle('active');
            document.body.classList.toggle('sidebar-open');
        });

        // Закрытие при клике вне сайдбара
        document.addEventListener('click', (e) => {
            if (this.sidebar.classList.contains('active') && 
                !this.sidebar.contains(e.target) && 
                !this.mobileMenuBtn.contains(e.target)) {
                this.sidebar.classList.remove('active');
                this.mobileMenuBtn.classList.remove('active');
                document.body.classList.remove('sidebar-open');
            }
        });
    },

    initExpandableItems() {
        this.expandableItems.forEach(item => {
            const link = item.querySelector('.sidebar-link');
            const submenu = item.querySelector('.sub-menu');
            
            if (!link || !submenu) return;

            // Устанавливаем начальную высоту для активных подменю
            if (item.classList.contains('active')) {
                submenu.style.maxHeight = submenu.scrollHeight + 'px';
            }

            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Просто переключаем текущее подменю без закрытия других
                item.classList.toggle('active');
                if (item.classList.contains('active')) {
                    submenu.style.maxHeight = submenu.scrollHeight + 'px';
                } else {
                    submenu.style.maxHeight = '0px';
                }
            });
        });
    },

    initAjaxNavigation() {
        // Обработка всех ссылок с data-ajax-load
        document.addEventListener('click', async (e) => {
            const link = e.target.closest('[data-ajax-load]');
            if (!link) return;

            e.preventDefault();
            const url = link.getAttribute('href');

            try {
                const response = await fetch(url, {
                    headers: {
                        'X-Requested-With': 'XMLHttpRequest'
                    }
                });

                if (!response.ok) throw new Error('Network response was not ok');
                
                const html = await response.text();
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = html;

                // Находим нужный контент в ответе
                const newContent = tempDiv.querySelector('.documentation-content');
                if (newContent && this.contentArea) {
                    // Обновляем контент
                    this.contentArea.innerHTML = newContent.innerHTML;
                    
                    // Обновляем URL без перезагрузки
                    window.history.pushState({ path: url }, '', url);
                    
                    // Обновляем активный пункт в меню
                    this.updateActiveMenuItem(url);

                    // Прокручиваем страницу вверх
                    window.scrollTo(0, 0);

                    // Закрываем мобильное меню если открыто
                    if (window.innerWidth < 768) {
                        this.sidebar.classList.remove('active');
                        this.mobileMenuBtn.classList.remove('active');
                        document.body.classList.remove('sidebar-open');
                    }
                }
            } catch (error) {
                console.error('Error loading content:', error);
            }
        });

        // Обработка кнопок браузера вперед/назад
        window.addEventListener('popstate', async (e) => {
            if (e.state && e.state.path) {
                await this.loadContent(e.state.path);
            }
        });
    },

    async loadContent(url) {
        try {
            const response = await fetch(url, {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            });

            if (!response.ok) throw new Error('Network response was not ok');
            
            const html = await response.text();
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = html;

            const newContent = tempDiv.querySelector('.documentation-content');
            if (newContent && this.contentArea) {
                this.contentArea.innerHTML = newContent.innerHTML;
                this.updateActiveMenuItem(url);
                window.scrollTo(0, 0);
            }

            // Удаляем старый активный класс
            const oldActive = this.sidebar.querySelector('.active');
            if (oldActive) {
                oldActive.classList.remove('active');
            }

            // Находим и активируем текущую ссылку
            const currentLink = this.sidebar.querySelector(`a[href="${url}"]`);
            if (currentLink) {
                currentLink.classList.add('active');
                
                // Активируем родительский пункт меню если есть
                const parentItem = currentLink.closest('.sidebar-item.expandable');
                if (parentItem) {
                    parentItem.classList.add('active');
                    const submenu = parentItem.querySelector('.sub-menu');
                    if (submenu) {
                        submenu.style.maxHeight = submenu.scrollHeight + 'px';
                    }
                }
            }
        } catch (error) {
            console.error('Error loading content:', error);
        }
    },

    updateActiveMenuItem(url) {
        // Удаляем активный класс у всех ссылок
        const allLinks = this.sidebar.querySelectorAll('a');
        allLinks.forEach(link => link.classList.remove('active'));

        // Находим и активируем текущую ссылку
        const currentLink = this.sidebar.querySelector(`a[href="${url}"]`);
        if (currentLink) {
            currentLink.classList.add('active');
            
            // Раскрываем родительское подменю если есть
            const parentItem = currentLink.closest('.sidebar-item.expandable');
            if (parentItem) {
                parentItem.classList.add('active');
                const submenu = parentItem.querySelector('.sub-menu');
                if (submenu) {
                    submenu.style.maxHeight = submenu.scrollHeight + 'px';
                }
            }
        }
    },

    initSidebar() {
        // Добавляем определение текущей страницы при загрузке
        const currentPath = window.location.pathname;
        const currentLink = this.sidebar.querySelector(`a[href*="${currentPath}"]`);
        if (currentLink) {
            currentLink.classList.add('active');
            const parentItem = currentLink.closest('.sidebar-item.expandable');
            if (parentItem) {
                parentItem.classList.add('active');
                const submenu = parentItem.querySelector('.sub-menu');
                if (submenu) {
                    submenu.style.maxHeight = submenu.scrollHeight + 'px';
                }
            }
        }
    }
}; 