<template>
  <div class="not-found">
    <h1 class="neon-text">404</h1>
    <h1>Page Not Found</h1>
    <br>

    <a href="#/" class="back-to-home">กลับหน้าแรก</a>

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
  font-family: 'Roboto', sans-serif;
  color: #fff;
  text-shadow:
    0 0 5px #0404f9,
    0 0 7px #101058,
    0 0 10px #9e9eff,
    0 0 20px #9e9eff,
    0 0 30px #9e9eff,
    0 0 40px #9e9eff;
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

.back-to-home {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
  border-radius: 25px;
  text-decoration: none;
  transition: background-color 0.3s, transform 0.3s;
  box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3);
}

.back-to-home:hover {
  background-color: #0056b3;
  /* สีพื้นหลังเมื่อโฮเวอร์ */
  transform: scale(1.05);
  /* ขยายเมื่อโฮเวอร์ */
}
</style>
