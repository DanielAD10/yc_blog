<template>
  <div class="home"> 
    <div v-if="error">
      {{error}}
    </div>
    <div v-if="posts.length>0">
      <PostsList :posts= "posts"></PostsList>
    </div>
    <div v-else>
      <SpinnerLoading></SpinnerLoading>
    </div>
  </div>
</template>

<script>
import SpinnerLoading from '../components/SpinnerLoading'
import PostsList from '../components/PostsList'
import getPosts from '../composables/getPosts'

export default {
  components: {
    SpinnerLoading, PostsList },
  setup() {
    // destructuring
    let {posts, error, load} = getPosts(); // {posts, error, load}
    
    load();

    return {posts,error};
  }
}
</script>

<style>
  .home {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
</style>
