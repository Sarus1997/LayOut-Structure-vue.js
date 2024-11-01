<template>
  <footer>
    <p>© {{ currentYear }} Sarus</p>
    <nav>
      <a href="#/">Home</a>
    </nav>
  </footer>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// กำหนดค่าปีปัจจุบัน
const currentYear = ref(new Date().getFullYear());
</script>

<style scoped>
footer {

  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #2c3e50;
  color: #ecf0f1;
}

footer p {
  margin: 0;
  font-size: 0.9rem;
}

footer nav {
  display: flex;
  gap: 1.5rem;
}

footer a {
  color: #ecf0f1;
  text-decoration: none;
  transition: color 0.3s;
}

footer a:hover {
  color: #5b34db;
}
</style>
