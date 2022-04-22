<template>
<input
  :value="currentTag"
  @input="setHashtag"
  />
  <card v-for="post in filteredPosts" :key="post.id">
    <template v-slot:title>
      {{ post.title }}
    </template>

    <template v-slot:content>
      {{ post.content }}
    </template>

    <template v-slot:description>
      <controls :post="post" />
    </template>
  </card>
</template>

<script>
import { computed } from "vue";
import Card from "../pokemon/Card.vue";
import Controls from "./Controls.vue";
import { store } from "./store.js";

export default {
  components: {
    Card,
    Controls,
  },

  setup() {
    const setHashtag = ($evt) => {
      store.setHashtag($evt.target.value)
    }

    // making the currentTag computed is necessary
    // to ensure this is updated.
    return {
      setHashtag,
      filteredPosts: computed(() => store.filteredPosts),
      currentTag: computed(() => store.state.currentTag)
    };
  },
};
</script>

<style scoped>
.cards {
  display: flex;
  justify-content: center;
}
input,
label {
  font-size: 30px;
}
input {
  height: 30px;
  width: 200px;
  padding: 5px;
  margin: 5px;
  margin: 30px;
}
#wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
