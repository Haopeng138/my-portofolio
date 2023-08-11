<script setup>
import AppNav from './components/AppNav.vue'
import AppHome from './components/AppHome.vue'
import AppFooter from './components/AppFooter.vue'
import AppAbout from './components/AppAbout.vue';
import AppQualification from './components/AppQualification.vue';
</script>

<template>
 <header class="header scroll-header">
    <AppNav></AppNav>
  </header>
  <main class="main">
    <AppHome></AppHome>
    <AppAbout></AppAbout>
    <AppQualification></AppQualification>
  </main>
    <AppFooter></AppFooter>
</template>

<style lang="scss">
@import "./styles/index.scss";
</style>
