<template>
  <div class="col-full push-top">
    <div class="forum-header">
      <div class="forum-details">
        <!--aqui es donde recibe la informacion de ForumList, los props de ese componente
        el nombre y la descripcion son la info que comparte con el componente padre-->
        <h1>{{ forum.name }}</h1>
        <p class="text-lead">
          {{ forum.description }}
        </p>
      </div>
      <router-link  
        :to="{name: 'ThreadCreate', params: {forumId: forum.id}}" 
        class="btn-green btn-small"
      >
        Start a thread
      </router-link>
    </div>
  </div>
  <div class="col-full push-top">
    <!--aqui se pasa al componente threads, la computed propertie threads, que es un requierimiento del componente
    porque el componente requiere una lista de trheads y esta computed propertie se usa para comunicar la informacion
    del componente hijo pageforum al componente padre threadlist, o al reves creo-->
    <!--no son hijos ni padres, se llama el componente threadlist 
    para mostrar los enlaces de cada lista de hilos, eso es todo-->
    <ThreadList :threads="threads"/>
  </div>
</template>

<script>
import ThreadList from '@/components/ThreadList.vue';
 

  export default {
    components: { ThreadList },
    props: {
      id: { 
        required: true,
        type: String,
      },
    },
    //y esos mismos props que recibe de ForumList los pasa a ThreadList
    computed: {
      //que hace esta funcion, encuentra en source data el foro con el id especificado en la url
        forum () {
          return  this.$store.state.forums.find(forum => forum.id === this.id)
        },
        //devuelve los hilos pertenecientes al foro especificado
        //hilos cuyo FORUM ID sea igual al especificado en la url, this.id
        //si uno tiene dudas sobre como hacer un filtro, hay que ver las propiedades de los elementos sobre
        //los que se quiere filtrar y sobre los que se va a comparar
        threads () {
          return  this.forum.threads.map(threadId => this.$store.getters.thread(threadId))
        } 
    }
}
</script>

<style scoped>
</style>