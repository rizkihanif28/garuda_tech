import { createApp } from 'vue';
import App from './App.vue';

import router from './router';

// import bootstrap, popper, jquery
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import 'bootstrap/dist/js/bootstrap.min';

createApp(App).use(router).mount('#app');
