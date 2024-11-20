<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="8">
        <v-card elevation="8" rounded="lg">
          <v-toolbar color="primary" dark prominent>
            <v-toolbar-title class="text-h5 font-weight-bold">
              Page Title
            </v-toolbar-title>
            <template v-slot:extension>
              <v-tabs v-model="model" align-tabs="center" color="primary" grow>
                <v-tab v-for="(tab, index) in tabContents" :key="index" :value="index + 1">
                  {{ tab.title }}
                </v-tab>
              </v-tabs>
            </template>
          </v-toolbar>

          <v-window v-model="model">
            <v-window-item v-for="(content, index) in tabContents" :key="index" :value="index + 1">
              <v-card flat>
                <v-card-text>
                  <p class="text-h6 font-weight-medium mb-2">{{ content.text1 }}</p>
                  <p class="text-body-1 mb-2">{{ content.text2 }}</p>
                  <p class="text-body-2">{{ content.text3 }}</p>
                </v-card-text>
              </v-card>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const model = ref(1);
const tabContents = ref([
  {
    title: 'Tab 1',
    text1: 'Content for Tab 1',
    text2: 'More info for Tab 1',
    text3: 'Additional details for Tab 1'
  },
  {
    title: 'Tab 2',
    text1: "Content for Tab 2",
    text2: "More info for Tab 2",
    text3: "Additional details for Tab 2",
  },
  {
    title: 'Tab 3',
    text1: "Content for Tab 3",
    text2: "More info for Tab 3",
    text3: "Additional details for Tab 3",
  },
]);
</script>

<style scoped>
.v-card-text p {
  line-height: 1.6;
}
</style>
