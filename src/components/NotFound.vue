<template>
  <div class="not-found">
    <h1>ไม่เจอหน้านี้</h1>
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

.back-to-home {
  color: #333;
  text-decoration: none;
  font-size: 16px;
}
</style>
