//es para hacer la data de sourceData disponible globalmente
//por que se usa vuex y no route? asi es la vida

import { createStore } from 'vuex';
import sourceData from '@/data.json';

export default createStore({
  state: sourceData,
  actions: {
    createPost (context, post) {
      post.id = 'qqqq' + Math.random();
      context.commit('setPost', {post}) //set the post
      context.commit('appendPostToThread', {postId: post.id, threadId: post.threadId}) // append the post to the thread
    }
  },
  mutations: {
    setPost (state, {post}) {
      state.posts.push(post)
    },
    appendPostToThread (state, { postId, threadId }) {
      const thread = state.threads.find(thread => thread.id === threadId)
      thread.post.push(postId)
    }
  }
})