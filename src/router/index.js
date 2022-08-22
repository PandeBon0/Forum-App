import PageHome from '@/pages/PageHome';
import PageThreadShow from '@/pages/PageThreadShow';
import PageThreadCreate from '@/pages/PageThreadCreate';
import PageThreadEdit from '@/pages/PageThreadEdit';
import {createRouter, createWebHistory} from 'vue-router';
import PageNotFound from '@/pages/PageNotFound';
import sourceData from '@/data.json';
import PageForum from '@/pages/PageForum';
import PageCategory from '@/pages/PageCategory';
import PageProfile from '@/pages/PageProfile';

const routes = [
  {
    path: '/', 
    name: 'Home',
    component: PageHome, 
  },
  {
    path: '/me', 
    name: 'Profile',
    component: PageProfile, 
    props: {edit: true},
    meta: {toTop: true, smoothScroll: true},
  },
  {
    path: '/me/edit', 
    name: 'ProfileEdit',
    component: PageProfile, 
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
    path: '/category/:id',
    name: 'Category',
    component: PageCategory,
    props:true
  },
  {
    path: '/forum/:forumId/thread/create',
    name: 'ThreadCreate',
    component: PageThreadCreate,
    props:true,
  },
  {
    path: '/thread/:threadId/edit',
    name: 'ThreadEdit',
    component: PageThreadEdit,
    props:true,
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
  scrollBehavior(to) {
    const scroll = {}
    if (to.meta.toTop) scroll.top = 0
    if (to.meta.smoothScroll) scroll.behavior = 'smooth' 
    return scroll
  },
})