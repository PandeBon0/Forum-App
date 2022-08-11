<template>
  <!-- <PageThreadShow/> -->
  <!-- id="all" -->
  <CategorieList :categories="categories" :forums="forums"/>
</template>

<script>
import sourceData from '@/data.json';
// import PageThreadShow from '@/pages/PageThreadShow.vue';
//import ForumList from '@/components/ForumList.vue';
import CategorieList from '@/components/CategorieList.vue';

export default {
  components: {
    // PageThreadShow,
    //ForumList,
    CategorieList
},
  
  data() {
    return {
      categories: sourceData.categories,
      forums: sourceData.forums,
    }; 
  },
}
</script>

<style scoped>
</style>
