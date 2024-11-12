export const ThemeModule = {
    init() {
        this.themeToggles = document.querySelectorAll('.theme-toggle');
        
        // Проверяем предпочтения системы
        this.systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        
        // Получаем сохраненную тему или используем системную
        this.currentTheme = localStorage.getItem('theme') || 
            (this.systemPrefersDark.matches ? 'dark' : 'light');
        
        // Устанавливаем начальную тему
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        this.updateToggles(this.currentTheme);

        // Добавляем слушатель изменения системной темы
        this.systemPrefersDark.addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                const newTheme = e.matches ? 'dark' : 'light';
                this.currentTheme = newTheme;
                document.documentElement.setAttribute('data-theme', newTheme);
                this.updateToggles(newTheme);
            }
        });

        // Добавляем обработчики для кнопок переключения темы
        this.themeToggles.forEach(toggle => {
            toggle.addEventListener('click', () => this.toggleTheme());
        });
    },

    updateToggles(theme) {
        this.themeToggles.forEach(toggle => {
            const icon = toggle.querySelector('i');
            toggle.classList.toggle('dark', theme === 'dark');
            
            if (theme === 'dark') {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            } else {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            }
        });
    },

    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        
        // Анимируем переключение
        this.updateToggles(newTheme);

        // Применяем тему
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        this.currentTheme = newTheme;
    }
};
