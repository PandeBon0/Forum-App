import PageHome from '@/pages/PageHome';
import PageThreadShow from '@/pages/PageThreadShow';
import {createRouter, createWebHistory} from 'vue-router';
import PageNotFound from '@/pages/PageNotFound';
import sourceData from '@/data.json';
import PageForum from '@/pages/PageForum';
import PageCategorie from '@/pages/PageCategorie';

const routes = [
  {
    path: '/', 
    name: 'Home',
    component: PageHome, 
  },
  //debemos crear una nueva ruta para cada uno de los componentes principales
  //en este caso creamos una ruta para forum
  {
    path: '/forum/:id',
    name: 'Forum',
    component: PageForum,
    props:true
  },
  {
    path: '/categorie/:id',
    name: 'Categorie',
    component: PageCategorie,
    props:true
  },
  {
    path: '/thread/:id', 
    name: 'ThreadShow',
    component: PageThreadShow,
    props: true,
    beforeEnter (to, from, next)  {
      const threadExists = sourceData.threads.find(thread => thread.id === to.params.id);
      if(threadExists){
        return next();
      }else{
        next({
          name: 'NotFound',
          params: {
            pathMatch: to.path.substring(1).split('/'), 
          },
          query: to.query,
          hash: to.hash,
        });
      }
    }, 
  },
  {
    path: '/:pathMatch(.*)*', 
    name: 'NotFound',
    component: PageNotFound,
  },  
]

export default createRouter({
  history: createWebHistory(),
  routes, 
})