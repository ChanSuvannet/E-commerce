import SvgIcon from '@jamescoyle/vue-icon';
import { createApp } from '@vue/runtime-dom'; // Use from 'vue' instead of '@vue/runtime-dom'
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import './style.css';

const app = createApp(App);
const pinia = createPinia();

// Register the SvgIcon component globally
app.component('svg-icon', SvgIcon);
app.use(pinia);
// Use the router
app.use(router);

// Mount the app to the DOM
app.mount('#app');
