<script setup>
import { ref, computed } from 'vue'
import Home from './views/HomePage.vue'
import About from './views/AboutPage.vue'
import Story from './views/StoryPage.vue'
import NotFound from './components/NotFound.vue'

const routes = {
  '/': Home,
  '/about': About,
  '/story': Story
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>

<template>
  <div class="navbar">
    <div class="logo">Logo</div>
    <ul>
      <li><a href="#/" class="nav-link">Home</a></li>
      <li><a href="#/about" class="nav-link">About</a></li>
      <li><a href="#/story" class="nav-link">Story</a></li>
    </ul>
  </div>
  <component :is="currentView" />
</template>
