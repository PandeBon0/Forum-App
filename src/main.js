import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import store from '@/store';

const forumApp = createApp(App);
forumApp.use(router);
forumApp.use(store);

//se usa para registrar todos los componentes de cierta categoria globalmente
//en este caso todos los que empiezan por App...
//En forumApp solamente, si tuvieramos otra aplicacion tendria que escribirse para esa tambien

const requireComponent = require.context('./components', true, /App[A-Z]\w+\.(vue|js)$/); 
requireComponent.keys().forEach(function (fileName) {
  let baseComponentConfig = requireComponent(fileName)
  baseComponentConfig = baseComponentConfig.default || baseComponentConfig
  const baseComponentName = baseComponentConfig.name || (
      fileName
        .replace(/^.+\//, '')
        .replace(/\.\w+$/, '')
    )
    forumApp.component(baseComponentName, baseComponentConfig)
  }
)
forumApp.mount('#app');


