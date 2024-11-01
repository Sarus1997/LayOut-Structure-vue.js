<template>
  <div class="hero-page">
    <v-carousel :show-arrows="true" :cycle="true" :height="'50vh'">
      <v-carousel-item v-for="(item, index) in items" :key="index" :src="item.src" cover>
        <div class="hero">
          <h1>{{ item.title }}</h1>
          <p>{{ item.description }}</p>
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { defineComponent } from 'vue';

defineComponent({
  name: 'HeroPage',
});
const items = ref([
  {
    src: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
    title: "Beautiful Docks",
    description: "Explore the serene beauty of the docks.",
  },
  {
    src: "https://cdn.vuetifyjs.com/images/cards/hotel.jpg",
    title: "Luxurious Hotel",
    description: "Stay at our luxurious hotel for an unforgettable experience.",
  },
  {
    src: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
    title: "Sunshine Beach",
    description: "Relax on the sunny beach and enjoy the view.",
  },
]);
</script>

<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
  color: white;
  background-color: rgba(10, 10, 10, 0.7);
}

.v-carousel-item {
  position: relative;
}
</style>
