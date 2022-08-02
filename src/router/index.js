import PageHome from '@/pages/PageHome';
import PageThreadShow from '@/pages/PageThreadShow';
import {createRouter, createWebHistory} from 'vue-router';
import PageNotFound from '@/pages/PageNotFound';
import sourceData from '@/data.json';

const routes = [
  {
    path: '/', 
    name: 'Home',
    component: PageHome 
  },
  {
    path: '/thread/:id', 
    name: 'ThreadShow',
    component: PageThreadShow,
    props: true,
    beforeEnter: (to, from, next) => {
      const threadExists = sourceData.threads.find(thread => thread.id === to.params.id);
      if(threadExists){
        next();
      }else{
        next({
          name: 'NotFound',
          params: {
            pathMatch: to.path.substring(1).split('/'), 
          },
          query: to.query,
          has: to.hash,
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