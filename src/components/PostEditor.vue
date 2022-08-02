<template>
  <div>
    <form @submit.prevent="save">
      <textarea 
        v-model="newPosText" 
        name="" 
        id="" 
        cols="30" 
        rows="10">
      </textarea>
      <button class="btn-blue">Submit post</button>
    </form>
  </div>
</template>

<script>

export default {
  data() {
    return {
      Text: ''
    };
  },

  methods: {
    save() {
      const postId = 'qqqq' + Math.random();
      const post = {
        id: postId,
        text: this.newPosText,
        publishedAt: Math.floor(Date.now() / 1000),
        userId: 'jUjmgCurRRdzayqbRMO7aTG9X1G2'
      };
      this.$emit('save', { post });
      //this.posts.push(post)
      //this.thread.posts.push(postId)
      this.Text = '';
    },
  },
}
</script>

<style scoped>
</style>