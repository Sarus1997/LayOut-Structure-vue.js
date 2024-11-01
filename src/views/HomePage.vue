<template>
  <Hero />
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="8" class="text-center">
        <v-card elevation="8" class="pa-6 mt-5">
          <v-card-title class="text-h3 mb-4">
            Home Page
          </v-card-title>
          <v-card-text>
            <p class="body-1">Welcome to the Home page!</p>
          </v-card-text>
          <v-card-actions justify="center">
            <v-btn color="primary" to="/about" elevation="2">
              About
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import Hero from '@/components/HeroPage.vue';
</script>

<style scoped>
h1 {
  color: #333;
  /* ปรับสีตามต้องการ */
}

p {
  font-size: 16px;
  /* ปรับขนาดตัวอักษร */
}
</style>
