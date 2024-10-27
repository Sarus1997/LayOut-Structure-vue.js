<script setup>

// ไม่ต้องใช้งาน routes และ currentView เนื่องจากเราจะให้ Vue Router จัดการ routing


</script>

<template>
  <div class="navbar">
    <div class="logo">Logo</div>
    <ul>
      <li><a href="#/" class="nav-link">Home</a></li>
      <li><a href="#/about" class="nav-link">About</a></li>
      <li><a href="#/story" class="nav-link">Story</a></li>
    </ul>
  </div>

  <!-- ใช้ <router-view /> สำหรับแสดง component ตามเส้นทาง -->
  <router-view />
</template>

<style>
/* ใส่สไตล์ได้ตามปกติ */
</style>
