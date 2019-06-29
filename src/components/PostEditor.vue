<template>
  <form @submit.prevent="save">
    <div class="form-group">
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          class="form-input"
          v-model="newPostText"
        ></textarea>
    </div>
    <div class="form-actions">
      <button class="btn-blue">Submit Post</button>
    </div>
  </form>
</template>

<script>
import sourceData from '@/data'

export default {
  name: 'PostEditor',
  data() {
    return {
      newPostText: ''
    }
  },
  props: {
    threadId: {
      required: true,
      type: String
    }
  },
  methods: {
    save () {
      const postId = 'greatPost' + Math.random()
      const post = {
        text: this.newPostText,
        publishedAt: Math.floor(new Date() / 1000),
        threadId: this.threadId,
        userId: 'FsCDAk9w8NeXEceLV87arpsXjnQ2',
        '.key': postId
      }

      // Vue does not know when something changes because of the limitations of Javascript... or something
      // so use Vue.set instead to explicitly inform it of an update. So that we don't have to import Vue into
      // this component, we can use the alias, this.$set
      // Now we will comment out the call to set, since the parent is going to do the changes
      // this.$set(sourceData.posts, postId, post)
      // this.$set(this.thread.posts, postId, postId)
      // sourceData.posts[postId] = post
      // this.thread.posts[postId] = postId
      // this.$set(sourceData.users[post.userId].posts, postId, postId)

      this.$emit('save-post', { post })
      this.newPostText = ''
    }
  }
}
</script>

<style scoped>

</style>
