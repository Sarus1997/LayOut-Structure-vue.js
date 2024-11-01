<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="8">
        <v-card elevation="12" class="pa-6">
          <v-card-title class="text-h4">
            About Page
          </v-card-title>
          <v-card-text>
            <p class="body-1">Welcome to the About page!</p>
            <v-divider class="my-4"></v-divider>
            <p class="body-2">
              This page is designed to give you an overview of our application. Click the button below to increase your
              click count!
            </p>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="Count" class="btn-count" color="primary" elevation="2" outlined>
              Click me! {{ count }}
            </v-btn>
            <v-btn to="/" color="secondary" elevation="2">
              กลับ
            </v-btn>
            <v-btn to="/story" color="success" elevation="2">
              Go to Story
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const count = ref(0);

function Count() {
  count.value++;
}
</script>

<style scoped>
.btn-count {
  margin-right: 10px;
  transition: background-color 0.3s;
}

.btn-count:hover {
  background-color: rgba(0, 0, 255, 0.1);
}
</style>
