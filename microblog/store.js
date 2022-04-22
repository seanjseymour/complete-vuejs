import { computed, reactive } from "vue";
import { testPosts } from "./testPosts.js";

class Store {
  constructor() {
    this.state = reactive({
      posts: testPosts,
      currentTag: null,
    });
  }

  setHashtag(tag) {
    this.state.currentTag = tag;
  }

  incrementLike(post) {
    const thePost = this.state.posts.find((x) => {
      return x.id === post.id;
    });

    if (!thePost) {
      return;
    }

    thePost.likes += 1;
  }

  get filteredPosts() {
    if (!this.state.currentTag) {
      return this.state.posts;
    }
    return this.state.posts.filter((post) =>
      post.hashtags.includes(this.state.currentTag)
    );
  }
}

export const store = new Store();
