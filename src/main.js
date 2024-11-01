// main.ts
import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router.js';
import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css'; // optional สำหรับ icons
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// นำเข้าไฟล์ CSS ที่นี่
import './assets/main.css';

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);

app.use(router);
app.use(vuetify);
app.mount('#app');
