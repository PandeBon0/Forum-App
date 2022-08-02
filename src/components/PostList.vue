<template>
  <div class="post-list">
    <div 
      class="post" 
      v-for="post in posts" 
      :key="post.id"
    >
      <div class="user-info">
        <a 
          href="#" 
          class="user-name">
          {{userById(post.userId).name}}
        </a>
        <a href="#">
          <img class="avatar-large" 
            src="userById(post.userId).avatar" 
            alt="">
        </a>
        <p class="desktop-only text-small">
          107 posts
        </p>
      </div>
      <div class="post-content">
        <div>
          <p>
            {{postById(postId).text}}
          </p>
        </div>
      </div>
      <div class="post-date text-faded">
        {{ diffForHumans(post.publishedAt) }}
      </div>
    </div>
  </div>
</template>

<script>
import sourceData from '@/data.json';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export default {
  data() {
    return {
      users: sourceData.users,
    };
  },

  props:{
    posts:{
      required: true,
      type: Array,
    },
  },
        
  methods: {
    postById(postId) {
      return this.posts.find(p => p.id === postId);
    },

    userById(userId) {
      return this.users.find(p => p.id === userId);
    },
    
    diffForHumans(timeStamp) {
      return dayjs.unix(timeStamp).fromNow();
    },
  },

}
</script>                                                                                                                                                                                                           

<style scoped>

</style>