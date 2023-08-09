<script setup>
import AppNav from './components/AppNav.vue'
import AppHome from './components/AppHome.vue';
</script>

<template>
 <header class="header scroll-header">
    <AppNav></AppNav>
  </header>
  <main class="main">
    <AppHome></AppHome>
  </main>
</template>

<style lang="scss">
@import "./styles/index.scss";
</style>
