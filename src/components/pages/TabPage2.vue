<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="8" class="text-center">
        <v-card elevation="8" class="pa-6 mt-5">
          <v-card-title class="text-h5 mb-4">
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

</script>

<style scoped>
p {
  font-size: 12px;
}

.v-card {
  background-color: #f9f9f9;
  border-radius: 12px;
}

.v-btn {
  font-weight: bold;
  text-transform: uppercase;
}

.v-card-title {
  color: #555;
}

.v-card-text {
  font-family: 'Arial', sans-serif;
}
</style>
