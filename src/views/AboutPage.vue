<template>
  <p>Welcome to the About page!</p>
  <router-link to="/">กลับ</router-link> |
  <router-link to="/story">ffffff</router-link> |
  <button class="btn-count" @click="Count">fffff {{ count }}</button>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const count = ref(0);

function Count() {
  count.value++;
}
</script>

<style>
h1 {
  color: #333;
}

p {
  font-size: 16px;
}

.btn-count {
  width: 100px;
  height: 30px;
  background-color: rgb(93, 129, 170);
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-count:active {
  background-color: rgb(149, 44, 219);
}
</style>
