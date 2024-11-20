<<<<<<< HEAD
=======
// main.js
>>>>>>> ae8300257790a15fc0d6dc12c58b8f29857380d3
import { createApp } from 'vue';
import App from './App.vue';
import router from './routes/router';
import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';
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

