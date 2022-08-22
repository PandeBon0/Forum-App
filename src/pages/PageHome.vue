<template>
  <!-- <PageThreadShow/> -->
  <!-- id="all" -->
  <h1 class="push-top" >Welcome to the Forum!</h1>
  <CategoryList :categories="categories" />
</template>

<script>
// import PageThreadShow from '@/pages/PageThreadShow.vue';
//import ForumList from '@/components/ForumList.vue';
import CategoryList from '@/components/CategoryList.vue';

export default {
  components: {
    CategoryList
},
  computed:{
    categories() {
      return this.$store.state.categories;
    }
  }
}
</script>

<style scoped>
</style>
