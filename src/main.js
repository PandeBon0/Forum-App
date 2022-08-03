import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import AppDate from '@/components/AppDate.vue'

const forumApp = createApp(App);
forumApp.use(router);
forumApp.component('AppDate', AppDate),
forumApp.mount('#app');


