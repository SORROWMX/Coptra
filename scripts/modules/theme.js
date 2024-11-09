export const ThemeModule = {
    init() {
        this.themeToggles = document.querySelectorAll('.theme-toggle');
        this.currentTheme = localStorage.getItem('theme') || 'light';
        
        // Устанавливаем светлую тему по умолчанию
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        this.updateToggles(this.currentTheme);

        // Добавляем обработчики для всех кнопок переключения темы
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
