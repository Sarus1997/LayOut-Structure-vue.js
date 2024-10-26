<template>
  <div class="not-found">
    <h1 class="neon-text">404</h1>
    <h1>Page Not Found</h1>
    <router-link to="/" class="back-to-home">กลับหน้าแรก</router-link>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.not-found {
  text-align: center;
  margin-top: 20px;
}

.neon-text {
  font-size: 15em;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  color: #fff;
  text-shadow:
    0 0 5px #0404f9,
    0 0 10px #9e9eff,
    0 0 20px #9e9eff,
    0 0 30px #9e9eff,
    0 0 40px #9e9eff,
    0 0 50px #9e9eff;
  animation: neon-flicker 1.5s infinite alternate;
}


.back-to-home {
  color: #333;
  text-decoration: none;
  font-size: 16px;
}

@keyframes neon-flicker {

  0%,
  19%,
  21%,
  23%,
  25%,
  54%,
  56%,
  100% {
    opacity: 1;
  }

  20%,
  24%,
  55% {
    opacity: 0.4;
  }
}
</style>
