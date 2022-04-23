<template>
  <h3>New Post</h3>
  <form @submit.prevent="submit">
  <input v-model="newPost.title" placeholder="Title" />
  <br />
  <textarea v-model="newPost.content" cols="30" rows="10" />
  <br />
  <button>Submit</button>
  </form>
</template>

<script>

import { reactive } from 'vue'
import { usePosts } from './usePosts';

export default {
  setup() {
    const postStore = usePosts()

    const newPost = reactive({
      title: '',
      content: '',
    })

const submit = () => {
  postStore.addPost({
    id: postStore.posts.value.length + 1,
    title: newPost.title,
    content: newPost.content,
  })
}

    return {
      newPost,
      submit
    }
  },
};
</script>

<style scoped></style>
