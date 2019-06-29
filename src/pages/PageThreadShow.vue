<template>
  <div class="col-large push-top">
    <h1>{{thread.title}}</h1>
    <p>
      By <a href="#" class="link-unstyled">Robin</a>, <AppDate :timestamp="thread.publishedAt" />.
      <span style="float:right; margin-top: 2px;" class="hide-mobile text-faded text-small">3 replies by 3 contributors</span>
    </p>
    <PostList :posts="posts" />
    <PostEditor
      @save-post="addPost"
      :threadId="id"
    />
  </div>
</template>

<script>
// v-model replaces the two below
// :value="newPostText"
// @input="newPostText = $event.target.value"

import sourceData from '@/data'
import PostList from '@/components/PostList'
import PostEditor from '@/components/PostEditor'

export default {
  name: 'PageThreadShow',
  components: {
    PostList,
    PostEditor
  },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  data () {
    return {
      thread: sourceData.threads[this.id],
      newPostText: ''
    }
  },
  computed: {
    posts () {
      const postIds = Object.values(this.thread.posts)
      return Object.values(sourceData.posts)
        .filter(post => postIds.includes(post['.key']))
    }
  },
  methods: {
    // using ES6 destructuring here
    // let person = {
    //   'firstName': 'Phil',
    //   'lastName': 'Albu',
    //   'favFood': 'bacon'
    // }
    // let {firstName: fn, lastName: ln, favFood: ff} = person
    // console.log(fn, ln, ff)
    // So you can pull out (destructure) an object, pulling out just 1 prop (in the case of addPost, we are
    // pulling out the post object) and use that directly in the function instead of having to manually do a
    // const post = eventData.post
    addPost ({ post }) {
      const postId = post['.key']

      this.$set(sourceData.posts, postId, post)
      this.$set(this.thread.posts, postId, postId)
      this.$set(sourceData.users[post.userId].posts, postId, postId)
    }
  }
}
</script>
