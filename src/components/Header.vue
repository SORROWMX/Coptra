<template>
	<header
		class="bg-background shadow fixed top-0 left-0 right-0 z-1000 h-header-height transition-all duration-300 ease-cubic-bezier border-b border-black/20"
	>
		<div
			class="container header-container flex items-center justify-between h-full px-spacing-medium"
		>
			<a href="/" class="logo flex items-center text-primary no-underline">
				<img
					src="/assets/images/header-logo.png"
					alt="Коптра"
					class="preloader-logo h-10 mr-spacing-small transition-transform duration-300 ease-cubic-bezier"
				/>
				<span class="text-2xl font-bold transition-transform duration-300 ease-cubic-bezier">КОПТРА</span>
			</a>

			<nav class="main-nav">
				<ul class="flex space-x-spacing-large">
					<li><a href="/#home" class="nav-link text-text hover:text-primary transition">Главная</a></li>
					<li><a href="/#about" class="nav-link text-text hover:text-primary transition">О нас</a></li>
					<li><a href="/products.html" class="nav-link text-text hover:text-primary transition">Продукция</a></li>
					<li><a href="/services.html" class="nav-link text-text hover:text-primary transition">Услуги</a></li>
					<li><a href="/contact.php" class="nav-link text-text hover:text-primary transition">Контакты</a></li>
				</ul>
			</nav>

			<div
				class="header-actions hidden lg:flex space-x-4"
				v-if="isAuthenticated"
			>
				<button class="action-button theme-toggle flex items-center space-x-1 text-text hover:text-primary transition" aria-label="Сменить тему">
					<i class="fas fa-sun"></i>
				</button>
				<a href="/login.php" class="action-button login-button flex items-center space-x-1 text-text hover:text-primary transition">
					<i class="fas fa-user"></i>
					<span>Войти</span>
				</a>
			</div>

			<button
				class="mobile-menu-btn header-btn lg:hidden flex flex-col justify-center items-center bg-none border-none cursor-pointer p-4 z-1002 h-10 w-10"
				aria-label="Toggle sidebar"
				@click="toggleMenu"
				:class="{ 'active': isMenuActive }"
			>
				<span class="block w-9 h-1 bg-text my-1 transition-transform duration-300 ease-cubic-bezier rounded"></span>
				<span class="block w-9 h-1 bg-text my-1 transition-opacity duration-300 ease-cubic-bezier rounded"></span>
				<span class="block w-9 h-1 bg-text my-1 transition-transform duration-300 ease-cubic-bezier rounded"></span>
			</button>
		</div>
	</header>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isAuthenticated = ref(false)

onMounted(() => {
	const appDiv = document.getElementById('app')
	if (appDiv) {
		isAuthenticated.value = appDiv.dataset.authenticated === 'true'
	}
})

const isMenuActive = ref(false)

const toggleMenu = () => {
	isMenuActive.value = !isMenuActive.value
	document.body.classList.toggle('menu-open', isMenuActive.value)
}
</script>

<style scoped>
/* Дополнительные стили, которые не покрываются Tailwind */

/* Стилизация выпадающих меню */
.dropdown:hover > .dropdown-menu,
.dropdown-submenu:hover > .submenu {
	@apply opacity-100 visible transform-none;
}

.dropdown-menu,
.submenu {
	@apply absolute left-0 top-full mt-2 bg-background-light shadow-lg rounded-md transition-all duration-300 ease-cubic-bezier;
	min-width: 250px;
	padding: 0.5rem 0;
}

.dropdown-menu a,
.submenu a {
	@apply px-4 py-2 text-text hover:text-primary transition;
	position: relative;
}

.dropdown > a::after,
.dropdown-submenu > a::after {
	content: '';
	@apply absolute bottom-0 right-2 w-3 h-3 border-r-2 border-b-2 border-arrow-color transition-all duration-300 ease-cubic-bezier;
	transform: rotate(45deg);
}

.nav-link::before {
	content: '';
	@apply absolute bottom-0 left-0 w-0 h-1 bg-primary transition-all duration-300 ease-cubic-bezier;
}

.nav-link:hover::before,
.nav-link.active::before {
	@apply w-full;
}

/* Анимация мобильного меню */
.mobile-menu-btn.active span:nth-child(1) {
	@apply rotate-45 translate-y-2;
}

.mobile-menu-btn.active span:nth-child(2) {
	@apply opacity-0;
}

.mobile-menu-btn.active span:nth-child(3) {
	@apply -rotate-45 -translate-y-2;
}
</style>
