<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card>
          <v-card-title class="headline">แมวขาว</v-card-title>
          <v-card-text>
            <p>แมวขาวเป็นสัตว์เลี้ยงที่น่ารักและเป็นที่นิยมในบ้านมากมาย พวกมันมีลักษณะที่สง่างามและมีความอ่อนโยน
              ทำให้เป็นเพื่อนที่ดีสำหรับทุกคน</p>
            <p>แมวขาวมีลักษณะพิเศษคือขนสีขาวที่มักจะสวยงามและสะอาด พวกมันยังมีบุคลิกที่เฉลียวฉลาดและขี้เล่น</p>
            <p>การดูแลแมวขาวต้องให้ความใส่ใจในเรื่องของอาหารและการดูแลสุขภาพ เพื่อให้พวกมันมีความสุขและสุขภาพดี</p>
          </v-card-text>
          <v-card-actions>
            <v-btn to="/" color="red" elevation="2">
              กลับ
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue';

defineComponent({
  name: 'StoryPage',
});
</script>

<style scoped>
h1 {
  color: #333;
}

p {
  font-size: 16px;
}
</style>
