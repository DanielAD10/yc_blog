<template>
  <div class="home">
    <h1>Home</h1> 
    <div v-if="error">
      {{error}}
    </div>
    <div v-if="posts.length>0">
      <PostsList :posts= "posts"></PostsList>
    </div>
    <div v-else>
      Loading .....
    </div>
  </div>
</template>

<script>
import PostsList from '../components/PostsList'
import { ref } from '@vue/reactivity'

export default {
  components: { PostsList },
  setup() {
    let posts = ref([]);
    let error = ref("");

    let load = async() => {
      // fetch data
      try {
        let response = await fetch("http://localhost:3000/posts");
        if (response.status === 404) {
          throw new Error("URL is wrong...");
        }
        let datas = await response.json();
        posts.value = datas;
      } catch (err) {
        error.value = err.message;
      }

      
    }
    load();

    return {posts};
  }
}
</script>
