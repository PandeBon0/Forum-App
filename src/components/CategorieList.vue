<template>

  <!-- <div class="col-full">
    <div class="forum-list" v-for="categorie in categories" :key="categorie.id">

      <h2 class="list-title" >
        <router-link :to="{
            name: 'Categorie',
            params: {
              id: categorie.id
            },
          }" class="text-xlarge" href="categorie.html">
            {{ categorie.name }}
          </router-link>
      </h2>

      <div class="forum-listing" v-for="forum in forums" :key="forum.id">
        <div class="forum-details">


          <router-link :to="{
            name: 'Forum',
            params: {
              id: forum.id
            },
          }" class="text-xlarge" href="categorie.html">
            {{ forum.name }}
          </router-link>
          <p>
            {{ forum.description }}
          </p>

        </div>

        <div class="threads-count">
          <p>
            <span class="count">
              {{ forum.threads?.length || '0' }}
            </span>
            {{ forum.threads?.length === 1 ?
              'thread' : 'threads' 
            }}
          </p>
        </div>

        <div class="last-thread">
          <img 
            class="avatar-medium" 
            :src="lastThreadElement().avatar" 
            alt=""
          >
          <div class="last-thread-details">
            <a href="thread.html">Post Reactions</a>
            <p class="text-xsmall">By <a href="profile.html">Rolf Haug</a>, a month ago</p>
          </div>
        </div> 


      </div>

    </div>



  </div> -->
  <ForumList v-for="categorie in categories"
    :key="categorie.id"
    :forums="getForumsForCategorie(categorie)"
  />





</template>

<script>
import sourceData from '@/data.json';
import ForumList from '@/components/ForumList.vue';

export default {
    data() {
    return {
      threads: sourceData.threads,

    };
  },
  props: {
    categories: {
      required: true,
      type: Array,
    },
    forums: {
      required: true,
      type: Array,
    },
  },
  methods: {
    // lastThreadElement (){
    //   return this.threads[this.threads.length - 1];
    // },      
    getForumsForCategorie(categorie){
      return sourceData.forums.filter
    }
    
  },
  components: { ForumList },

}
</script>

<style scoped>
</style>