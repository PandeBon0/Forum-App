<template>

  <!-- <div class="col-full">
    <div class="forum-list" v-for="category in categories" :key="category.id">

      <h2 class="list-title" >
        <router-link :to="{
            name: 'Category',
            params: {
              id: category.id
            },
          }" class="text-xlarge" href="category.html">
            {{ category.name }}
          </router-link>
      </h2>

      <div class="forum-listing" v-for="forum in forums" :key="forum.id">
        <div class="forum-details">


          <router-link :to="{
            name: 'Forum',
            params: {
              id: forum.id
            },
          }" class="text-xlarge" href="category.html">
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
  
  
  <ForumList v-for="category in categories"
    :key="category.id"
    :forums="getForumsForCategory(category)"
    :title="category.name"
    :category-id="category.id"
  />

</template>

<script>
 
import ForumList from '@/components/ForumList.vue';

export default {
    data() {
    return {
      threads:  this.$store.state.threads,

    };
  },
  props: {
    categories: {
      required: true,
      type: Array,
    },
  },
  methods: {     
    getForumsForCategory(category){
      return  this.$store.state.forums.filter(forum => forum.categoryId === category.id)
    }
  },
  components: { ForumList },

}
</script>

<style scoped>
</style>