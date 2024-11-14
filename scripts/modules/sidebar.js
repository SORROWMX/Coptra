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

        // Предотвращаем стандартное поведение для всех ссылок с data-ajax-load
        const ajaxLinks = document.querySelectorAll('[data-ajax-load]');
        ajaxLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                if (link.closest('.sidebar') || link.hasAttribute('data-ajax-load')) {
                    e.preventDefault();
                    e.stopPropagation();
                }
            }, true);
        });

        // Добавляем глобальный перехват кликов
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[href]');
            if (link && 
                (link.closest('.sidebar') || link.hasAttribute('data-ajax-load')) && 
                link.getAttribute('href').startsWith('/')) {
                e.preventDefault();
                e.stopPropagation();
            }
        }, true); // Используем capturing phase

        // Добавляем обработчик для предотвращения стандартной навигации
        window.addEventListener('beforeunload', (e) => {
            if (this.isLoading || this.isScrolling) {
                e.preventDefault();
                return false;
            }
        });

        // Предотвращаем стандартное поведение браузера при навигации
        window.addEventListener('popstate', async (e) => {
            e.preventDefault();
            
            if (this.isLoading || this.isScrolling) return;

            const currentPath = window.location.pathname;
            if (currentPath) {
                try {
                    await this.loadContent(currentPath);
                } catch (error) {
                    console.error('Error handling popstate:', error);
                }
            }
        });

        this.isScrolling = false; // Флаг для отслеживания прокрутки
        this.isLoading = false;
        this.lastLoadTime = 0;
        this.openedSubmenus = new Set(); // Для отслеживания открытых подменю
        this.maxOpenedSubmenus = 3; // Максимальное количество открытых подменю
    },

    setupEventListeners() {
        // Обработчик дл мобильной кнопки
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
                this.openedSubmenus.add(item);
                submenu.style.maxHeight = submenu.scrollHeight + 'px';
            }

            link.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation(); // Предотвращаем всплытие события
                
                const isActive = item.classList.contains('active');
                
                // Если пытаемся открыть новое подменю и уже открыто максимальное количество
                if (!isActive && this.openedSubmenus.size >= this.maxOpenedSubmenus) {
                    // Закрываем самое старое открытое подменю
                    const oldestSubmenu = this.openedSubmenus.values().next().value;
                    if (oldestSubmenu) {
                        oldestSubmenu.classList.remove('active');
                        const oldSubmenu = oldestSubmenu.querySelector('.sub-menu');
                        if (oldSubmenu) {
                            oldSubmenu.style.maxHeight = '0px';
                        }
                        this.openedSubmenus.delete(oldestSubmenu);
                    }
                }

                // Переключаем текущее подменю
                item.classList.toggle('active');
                
                if (item.classList.contains('active')) {
                    submenu.style.maxHeight = submenu.scrollHeight + 'px';
                    this.openedSubmenus.add(item);
                } else {
                    submenu.style.maxHeight = '0px';
                    this.openedSubmenus.delete(item);
                }
            });
        });
    },

    initAjaxNavigation() {
        let navigationTimeout;

        document.addEventListener('click', async (e) => {
            const link = e.target.closest('[data-ajax-load]');
            if (!link) return;

            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation(); // Добавляем остановку всех обработчиков

            // Очищаем предыдущий таймаут
            if (navigationTimeout) {
                clearTimeout(navigationTimeout);
            }

            const url = link.getAttribute('href');
            if (!url) return;

            // Устанавливаем новый таймаут для навигации
            navigationTimeout = setTimeout(async () => {
                try {
                    await this.loadContent(url);
                    window.history.pushState({ path: url }, '', url);
                } catch (error) {
                    console.error('Error loading content:', error);
                }
            }, 100);
        }, true);

        // Обновляем обработчик popstate
        window.addEventListener('popstate', async (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            if (this.isLoading || this.isScrolling) return;

            const currentPath = window.location.pathname;
            if (currentPath) {
                try {
                    await this.loadContent(currentPath);
                } catch (error) {
                    console.error('Error handling popstate:', error);
                }
            }
        }, true);
    },

    async loadContent(url) {
        if (this.isLoading || this.isScrolling) return;

        const now = Date.now();
        if (now - this.lastLoadTime < 300) return;

        this.isLoading = true;
        this.lastLoadTime = now;

        try {
            // Добавляем случайный параметр для предотвращения кэширования
            const cacheBuster = `?_=${Date.now()}`;
            const response = await fetch(url + cacheBuster, {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    'Cache-Control': 'no-cache'
                }
            });

            if (!response.ok) throw new Error('Network response was not ok');
            
            const html = await response.text();
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = html;

            const newContent = tempDiv.querySelector('.documentation-content');
            if (newContent && this.contentArea) {
                // Блокируем прокрутку перед обновлением контента
                document.body.style.overflow = 'hidden';
                this.isScrolling = true;

                // Обновляем контент и мгновенно прокручиваем вверх
                this.contentArea.innerHTML = newContent.innerHTML;
                this.updateActiveMenuItem(url);
                window.scrollTo(0, 0);

                // Небольшая задержка перед разблокировкой прокрутки
                setTimeout(() => {
                    document.body.style.overflow = '';
                    this.isScrolling = false;
                }, 100);

                // Закрываем мобильное меню если открыто
                if (window.innerWidth < 768) {
                    this.sidebar.classList.remove('active');
                    this.mobileMenuBtn?.classList.remove('active');
                    document.body.classList.remove('sidebar-open');
                }
            }
        } catch (error) {
            console.error('Error loading content:', error);
            // Разблокируем прокрутку при ошибке
            document.body.style.overflow = '';
            this.isScrolling = false;
        } finally {
            this.isLoading = false;
        }
    },

    updateActiveMenuItem(url) {
        // Сохраняем состояния раскрытых подменю
        const expandedMenus = Array.from(this.sidebar.querySelectorAll('.sub-menu'))
            .filter(menu => menu.style.maxHeight && menu.style.maxHeight !== '0px')
            .slice(-this.maxOpenedSubmenus);
        
        this.clearActiveStates();

        // Нормализуем URL
        const normalizedUrl = url.replace(/^\.\./, '').replace(/^\/+/, '/');
        
        // Находим и активируем текущую ссылку
        const allLinks = this.sidebar.querySelectorAll('a[href], .sidebar-link[href]');
        let activeLink = null;

        allLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href) {
                const normalizedHref = href.replace(/^\.\./, '').replace(/^\/+/, '/');
                if (normalizedUrl.includes(normalizedHref) || normalizedHref.includes(normalizedUrl)) {
                    // Активируем ссылку
                    link.classList.add('active');
                    activeLink = link;
                    
                    // Активируем родительский пункт меню
                    const parentItem = link.closest('.sidebar-item.expandable');
                    if (parentItem) {
                        parentItem.classList.add('active');
                        const submenu = parentItem.querySelector('.sub-menu');
                        if (submenu) {
                            submenu.style.maxHeight = `${submenu.scrollHeight}px`;
                        }
                    }
                }
            }
        });

        // Восстанавливаем состояния раскрытых подменю
        expandedMenus.forEach(menu => {
            const parentItem = menu.closest('.sidebar-item.expandable');
            if (parentItem) {
                parentItem.classList.add('active');
                menu.style.maxHeight = `${menu.scrollHeight}px`;
                this.openedSubmenus.add(parentItem);
            }
        });

        // Проверяем и закрываем лишние подменю
        if (this.openedSubmenus.size > this.maxOpenedSubmenus) {
            const toClose = Array.from(this.openedSubmenus)
                .slice(0, this.openedSubmenus.size - this.maxOpenedSubmenus);
            
            toClose.forEach(item => {
                item.classList.remove('active');
                const submenu = item.querySelector('.sub-menu');
                if (submenu) {
                    submenu.style.maxHeight = '0px';
                }
                this.openedSubmenus.delete(item);
            });
        }

        // Прокручиваем к активному элементу
        if (activeLink) {
            // Задержка для завершения анимации раскрытия подменю
            setTimeout(() => {
                const sidebarTop = this.sidebar.getBoundingClientRect().top;
                const linkTop = activeLink.getBoundingClientRect().top;
                const offset = linkTop - sidebarTop - (this.sidebar.clientHeight / 2);
                
                this.sidebar.scrollTo({
                    top: this.sidebar.scrollTop + offset,
                    behavior: 'smooth'
                });
            }, 300); // Задержка равна длительности анимации раскрытия подменю
        }
    },

    clearActiveStates() {
        // Очищаем только классы active у ссылок
        const activeLinks = this.sidebar.querySelectorAll('a.active, .sidebar-link.active');
        activeLinks.forEach(link => {
            if (!link.closest('.sidebar-item.expandable') || link.hasAttribute('href')) {
                link.classList.remove('active');
            }
        });
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