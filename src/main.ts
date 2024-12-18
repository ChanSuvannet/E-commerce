import SvgIcon from '@jamescoyle/vue-icon';
import { createApp } from '@vue/runtime-dom';
import App from './App.vue';
import router from './router';
import './style.css';

const app = createApp(App);

// Register the SvgIcon component globally
app.component('svg-icon', SvgIcon);

// Use the router
app.use(router);

// Mount the app to the DOM
app.mount('#app');
