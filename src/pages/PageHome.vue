<template>
  <!-- <PageThreadShow/> -->
  <!-- id="all" -->
  <ForumList :forums="forums"/>
</template>

<script>
import sourceData from '@/data.json';
// import PageThreadShow from '@/pages/PageThreadShow.vue';
import ForumList from '@/components/ForumList.vue';

export default {
  components: {
    // PageThreadShow,
    ForumList,
  },
  
  data() {
    return {
      forums: sourceData.forums,
    }; 
  },
}
</script>

<style scoped>
</style>
