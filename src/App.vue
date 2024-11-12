<template>
  <div id="app" :data-authenticated="isAuthenticated">
    <Header />
    <!-- Здесь можно добавлять другие компоненты -->
  </div>
</template>

<script setup>
import Header from './components/Header.vue';

const isAuthenticated = false; // Замените на реальное состояние авторизации
</script>

<style>
/* Глобальные стили */
</style>
