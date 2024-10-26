import { createRouter, createWebHashHistory } from 'vue-router';
import { ref, computed } from 'vue';
import HomePage from '@/views/HomePage.vue';
import AboutPage from '@/views/AboutPage.vue';
import StoryPage from '@/views/StoryPage.vue';
import NotFound from '@/components/NotFound.vue'; // ต้องสร้างไฟล์ NotFound.vue

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
  },
  {
    path: '/story',
    name: 'Story',
    component: StoryPage,
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const currentPath = ref(window.location.hash);

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash;
});

const currentView = computed(() => {
  const route = routes.find(r => r.path === currentPath.value.slice(1) || '/');
  return route ? route.component : NotFound;
});

export { router, currentPath, currentView };
export default router;
