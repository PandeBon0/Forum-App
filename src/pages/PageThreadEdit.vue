<template>
  <div class="col-full push-top">
    <h1>Editing <i>{{thread.title}}</i></h1> 
  </div>
  <ThreadEditor 
    :title="thread.title" 
    :text="text" 
    @save="save($event)" 
    @cancel="cancel()" 
  />
</template>

<script>
import ThreadEditor from '@/components/ThreadEditor.vue';

export default {
  components: {ThreadEditor},
  props: {
    threadId: {
      type: String,
      required: true,
    },
  },
  computed: {
    thread () {
      return this.$store.state.threads.find(thread => thread.id === this.threadId);
    },
    text () {
      return this.$store.state.posts.find(
        post => post.id === this.thread.posts[0]
      ).text
    },
  },
  methods: {
    async save ({title, text}) {
      const thread = await this.$store.dispatch('updateThread', {
        id: this.threadId,
        title,
        text,
      });
      this.$router.push({name: 'ThreadShow', params: {id: thread.id}});
    },
    cancel(){
      this.$router.push({name: 'ThreadShow', params: {id: this.id}});
    }
  },
}
</script>

<style scoped>
</style>