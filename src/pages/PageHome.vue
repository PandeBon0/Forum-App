<template>
  <!-- <PageThreadShow/> -->
  <!-- id="all" -->
  <CategoryList :categories="categories" />
</template>

<script>
import sourceData from '@/data.json';
// import PageThreadShow from '@/pages/PageThreadShow.vue';
//import ForumList from '@/components/ForumList.vue';
import CategoryList from '@/components/CategoryList.vue';

export default {
  components: {
    // PageThreadShow,
    //ForumList,
    CategoryList
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
