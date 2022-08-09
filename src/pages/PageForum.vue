<template>
  <div class="col-full push-top">
    <div class="forum-header">
      <div class="forum-details">
        <h1>{{ forum.name }}</h1>
        <p class="text-lead">
          {{ forum.description }}
        </p>
      </div>
      <a 
        href="new-thread.html" 
        class="btn-green btn-small"
      >
        Start a thread
      </a>
    </div>
  </div>
  <div class="col-full push-top">
    <!--aqui se pasa al componente threads, la computed propertie threads, que es un requierimiento del componente
    porque el componente requiere una lista de trheads y esta computed propertie se usa para comunicar la informacion
    del componente hijo pageforum al componente padre threadlist, o al reves creo-->
    <ThreadList :threads="threads"/>
  </div>
</template>

<script>
import ThreadList from '@/components/ThreadList.vue';
import sourceData from '@/data.json';

  export default {
    components: { ThreadList },
    props: {
      id: {
        required: true,
        type: String,
      },
    },
    computed: {
      //que hace esta funcion, encuentra en source data el foro con el id especificado en la url
        forum () {
          return sourceData.forums.find(forum => forum.id === this.id)
        },
        //devuelve los hilos pertenecientes al foro especificado
        //hilos cuyo FORUM ID sea igual al especificado en la url, this.id
        //si uno tiene dudas sobre como hacer un filtro, hay que ver las propiedades de los elementos sobre
        //los que se quiere filtrar y sobre los que se va a comparar
        threads () {
          return sourceData.threads.filter(thread => thread.forumId === this.id)
        } 
    }
}
</script>

<style scoped>
</style>