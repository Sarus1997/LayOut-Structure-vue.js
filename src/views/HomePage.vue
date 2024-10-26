<template>
  <div>
    <Hero />
    <h1>Home Page</h1>
    <p>Welcome to the Home page!</p>

    <a href="#/about">About</a> |
  </div>
</template>

<script lang="ts" setup>
import Hero from '@/components/HeroPage.vue'
</script>

<style scoped>
h1 {
  color: #333;
}

p {
  font-size: 16px;
}
</style>
