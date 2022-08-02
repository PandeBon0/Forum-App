<template>
    <div title="hummanFriendlyDate(post.publishedAt)">
                      {{diffForHumans(post.publishedAt)}}
                  </div>
</template>

<script>
import dayjs from 'dayjs'
import relativeTime from 'days/plugin/relativeTime'
dayjs.extend(relativeTime)
dayjs.extend(localizedZone)
    export default {
        methods: {
        postById(postId) {
            return this.posts.find(p => p.id === postId);
        },
        userById(userId) {
            return this.users.find(p => p.id === userId);
        },
        diffForHumans(timeStamp){
            return dayjs.unix(timeStamp).fromNow()
        }
    },
        
    }
</script>

<style  scoped>

</style>