<script setup>
import AppNav from './components/AppNav.vue'
import AppHome from './components/AppHome.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
 <header class="header scroll-header">
    <AppNav></AppNav>
  </header>
  <main class="main">
    <AppHome></AppHome>
  </main>
    <AppFooter></AppFooter>
</template>

<style lang="scss">
@import "./styles/index.scss";
</style>
