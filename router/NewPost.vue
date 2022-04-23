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

import { useRouter } from 'vue-router'
import { reactive } from 'vue'
import { usePosts } from './usePosts';

export default {
  setup() {
    const postStore = usePosts()
    const router = useRouter()

    const newPost = reactive({
      title: '',
      content: '',
    })

const submit = () => {
  const id = postStore.posts.value.length + 1
  
  postStore.addPost({
    id,
    title: newPost.title,
    content: newPost.content,
  })

  router.push(`/posts/${id}`)
}

    return {
      newPost,
      submit
    }
  },
};
</script>

<style scoped></style>
