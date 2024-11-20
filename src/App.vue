<script setup lang="ts">
import Navbar from './components/NavbarPage.vue'
import Footer from './components/FooterPage.vue'
import Hero from "./components/HeroPage.vue";
</script>

<template>
  <Navbar />
  <Hero />
  <router-view />
  <Footer />
</template>
