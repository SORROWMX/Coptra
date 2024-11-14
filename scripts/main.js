// Импорт констант и утилит
import { CONSTANTS } from './modules/constants.js';
import { utils } from './modules/utils.js';

// Импорт основных модулей
import { HeaderModule } from './modules/header.js';
import { ThemeModule } from './modules/theme.js';
import { ScrollProgressModule } from './modules/scroll-progress.js';
import { AboutSectionModule } from './modules/about-section.js';
import { TestimonialsModule } from './modules/testimonials.js';
import { FormModule } from './modules/form.js';
import { MobileMenuModule } from './modules/mobile-menu.js';
import { NavigationModule } from './modules/navigation.js';
import { MapModule } from './modules/map.js';
import { SidebarModule } from './modules/sidebar.js';
import { PreloaderModule } from './modules/preloader.js';
import { ScrollToTopModule } from './modules/scroll-to-top.js';
import { LazyLoadingModule } from './modules/lazy-loading.js';
import { ApplicationsModule } from './modules/applications.js';
import { HeroMapModule } from './modules/hero-map.js';

// Импорт модулей анимаций
import { HeroAnimationModule } from './modules/animations/hero.js';
import { AboutAnimationModule } from './modules/animations/about.js';
import { ProductsAnimationModule } from './modules/animations/products.js';
import { AdvantagesAnimationModule } from './modules/animations/advantages.js';
import { NewsAnimationModule } from './modules/animations/news.js';
import { PartnersAnimationModule } from './modules/animations/partners.js';
import { FAQAnimationModule } from './modules/animations/faq.js';
import { TelegramAnimationModule } from './modules/animations/telegram.js';
import { ContactAnimationModule } from './modules/animations/contact.js';
import { GoalsAnimationModule } from './modules/animations/goals.js';

// Импорт дополнительных модулей
import { ParticlesModule } from './modules/particles.js';
import { Error404Module } from './modules/error404.js';
import { SearchModule } from './modules/search.js';

// Функция для проверки и инициализации модуля
const initializeModule = async (module, moduleName) => {
    try {
        if (module && typeof module.init === 'function') {
            console.log(`Инициализация ${moduleName}...`);
            await module.init();
            console.log(`${moduleName} успешно инициализирован`);
        } else {
            console.warn(`${moduleName} не найден или не имеет метода init`);
        }
    } catch (error) {
        console.error(`Ошибка при инициализации ${moduleName}:`, error);
    }
};

// Инициализация при загрузке DOM
document.addEventListener('DOMContentLoaded', async () => {
    console.log('DOM загружен, начинаем инициализацию модулей...');

    try {
        // Инициализация утилит и базовых модулей
        await initializeModule(PreloaderModule, 'PreloaderModule');
        await initializeModule(LazyLoadingModule, 'LazyLoadingModule');
        
        // Инициализация поискового модуля первым
        await initializeModule(SearchModule, 'SearchModule');
        
        // Инициализация основных модулей
        const mainModules = [
            [ThemeModule, 'ThemeModule'],
            [HeaderModule, 'HeaderModule'],
            [MobileMenuModule, 'MobileMenuModule'],
            [NavigationModule, 'NavigationModule'],
            [ScrollProgressModule, 'ScrollProgressModule'],
            [ScrollToTopModule, 'ScrollToTopModule'],
            [AboutSectionModule, 'AboutSectionModule'],
            [TestimonialsModule, 'TestimonialsModule'],
            [FormModule, 'FormModule'],
            [MapModule, 'MapModule'],
            [SidebarModule, 'SidebarModule'],
            [ApplicationsModule, 'ApplicationsModule'],
            [HeroMapModule, 'HeroMapModule']
        ];

        for (const [module, name] of mainModules) {
            await initializeModule(module, name);
        }
        
        // Инициализация модулей анимаций
        const animationModules = [
            [HeroAnimationModule, 'HeroAnimationModule'],
            [AboutAnimationModule, 'AboutAnimationModule'],
            [ProductsAnimationModule, 'ProductsAnimationModule'],
            [AdvantagesAnimationModule, 'AdvantagesAnimationModule'],
            [NewsAnimationModule, 'NewsAnimationModule'],
            [PartnersAnimationModule, 'PartnersAnimationModule'],
            [FAQAnimationModule, 'FAQAnimationModule'],
            [TelegramAnimationModule, 'TelegramAnimationModule'],
            [ContactAnimationModule, 'ContactAnimationModule'],
            [GoalsAnimationModule, 'GoalsAnimationModule']
        ];

        for (const [module, name] of animationModules) {
            await initializeModule(module, name);
        }
        
        // Инициализация дополнительных модулей
        await initializeModule(ParticlesModule, 'ParticlesModule');
        await initializeModule(Error404Module, 'Error404Module');

        // Установка текущего года
        const currentYear = document.querySelector('#current-year');
        if (currentYear) {
            currentYear.textContent = new Date().getFullYear();
            console.log('Текущий гойда успешно установлен');
        }

        console.log('Все модули успешно инициализированы');
    } catch (error) {
        console.error('Критическая ошибка при инициализации модулей:', error);
    }
});

// Обработка ошибок
window.addEventListener('error', (event) => {
    console.error('Глобальная ошибка:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
    console.error('Необработанное отклонение промиса:', event.reason);
});

