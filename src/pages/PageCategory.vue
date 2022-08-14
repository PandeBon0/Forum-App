<template>
        
  <ForumList :forums="forums"/>

</template>

<script>
import ForumList from '@/components/ForumList.vue';
import sourceData from '@/data.json';


export default {
    components: { ForumList },
  // data() {
  //   return {
  //     forums: sourceData.forums,
  //   }; 
  // },

  props: {
   id: {
       required: true,
       type: String,
     },
   },
    // computed: {
    //     forum () {
    //       return sourceData.forums.find(forum => forum.id === this.id)
    //     },
        
    // }
}
</script>

<style scoped>
</style>