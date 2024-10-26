import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router.js';

// นำเข้าไฟล์ CSS ที่นี่
import './assets/main.css';

const app = createApp(App);

app.use(router);
app.mount('#app');
