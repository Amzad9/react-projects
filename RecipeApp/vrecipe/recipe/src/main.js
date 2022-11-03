import { createApp } from "vue";
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from "./App.vue";
import router from "./router";
import VueSplide from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/splide.min.css';
const app = createApp(App);

const pinia = createPinia();
app.use(pinia);
pinia.use(piniaPluginPersistedstate);

app.use(router);
app.use( VueSplide );

app.mount("#app");

