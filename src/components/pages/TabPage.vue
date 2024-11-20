<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="8">
        <v-card elevation="8">
          <v-toolbar color="primary">
            <v-toolbar-title>Page title</v-toolbar-title>
            <template v-slot:extension>
              <v-tabs v-model="model" align-tabs="center">
                <v-tab v-for="i in 3" :key="i" :text="`Item ${i}`" :value="i"></v-tab>
              </v-tabs>
            </template>
          </v-toolbar>
          <v-tabs-window v-model="model">
            <v-tabs-window v-model="model">
              <v-tabs-window-item v-for="(content, index) in tabContents" :key="index" :value="index + 1">
                <v-card>
                  <v-card-text>{{ content.text1 }}</v-card-text>
                  <v-card-text>{{ content.text2 }}</v-card-text>
                  <v-card-text>{{ content.text3 }}</v-card-text>
                </v-card>
              </v-tabs-window-item>
            </v-tabs-window>
          </v-tabs-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import Hero from "@/components/HeroPage.vue";
import { ref } from "vue";

const model = ref('tab-1');
const tabContents = ref([
  {
    text1: 'Content for Tab 1',
    text2: 'More info for Tab 1',
    text3: 'More info for Tab 1'
  },
  {
    text1: "Content for Tab 2",
    text2: "More info for Tab 2",
    text3: "More info for Tab 2",
  },
  {
    text1: "Content for Tab 3",
    text2: "More info for Tab 3",
    text3: "More info for Tab 3",
  },
]);
</script>

<style scoped>
h1 {
  color: #333;
}

p {
  font-size: 16px;
}
</style>
