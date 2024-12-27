import SvgIcon from '@jamescoyle/vue-icon';
import { createApp } from '@vue/runtime-dom';
import App from './App.vue';
import router from './router';
import './style.css';
import { createPinia } from 'pinia';



const app = createApp(App);
const pinia = createPinia();

// Register the SvgIcon component globally
app.component('svg-icon', SvgIcon);
//use store with pinia
app.use(pinia);
// Use the router
app.use(router);

// Mount the app to the DOM
app.mount('#app');
