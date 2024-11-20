<template>
  <div class="navbar">
    <div class="logo">LOGO</div>
    <button class="menu-btn" @click="toggleSidebar"><i class="icon-bar"></i></button>
  </div>
  <!-- Sidebar -->
  <div class="sidebar" :class="{ open: isSidebarOpen }">
    <button class="close-btn" @click="toggleSidebar">✖</button>
    <ul>
      <li><a href="#/" class="nav-link">Home</a></li>
      <li><a href="#/about" class="nav-link">About</a></li>
      <li><a href="#/story" class="nav-link">Story</a></li>
    </ul>
  </div>
  <!-- Overlay -->
  <div class="overlay" v-if="isSidebarOpen" @click="toggleSidebar"></div>
</template>

<script setup>
import { ref } from "vue";

const isSidebarOpen = ref(false);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  height: 50px;
  background-color: #333;
  color: #fff;
  z-index: 10;
  position: sticky;
  top: 0;
}

.icon-bar {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
}

.icon-bar:before,
.icon-bar:after,
.icon-bar:nth-child(2) {
  content: "";
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
}

.icon-bar:hover {
  transform: scale(1.1);
  background-color: #ddd;
}

.logo {
  font-weight: bold;
  font-size: 1.5rem;
  background: linear-gradient(to right, #ff0066, #ff6600, #ffff00);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 100%;
  background-position: 0% 100%;
  transition: background-position 0.5s ease-out;
}

.logo:hover {
  background-position: 100% 100%;
}

.menu-btn {
  background: none;
  border: none;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
}

.sidebar {
  position: fixed;
  top: 0;
  left: -250px;
  width: 250px;
  height: 100%;
  background-color: #333;
  color: #fff;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
  transition: left 0.3s ease;
  z-index: 1000;
}

.sidebar.open {
  left: 0;
}

.sidebar .close-btn {
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  margin-bottom: 20px;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.sidebar .nav-link {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  display: block;
  padding: 10px 0;
  transition: color 0.3s;
}

.sidebar .nav-link:hover {
  color: #193fb1;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

.content {
  padding: 20px;
  margin-top: 20px;
}
</style>
