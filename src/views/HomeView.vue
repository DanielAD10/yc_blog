<template>
  <div class="home">
    <h1>Home</h1> 
    <PostsList :posts= "posts"></PostsList>
  </div>
</template>

<script>
import PostsList from '../components/PostsList'
import { ref } from '@vue/reactivity'

export default {
  components: { PostsList },
  setup() {
    let posts = ref([
      {
        title: "Post 1", body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error minima, provident ullam facilis nobis omnis natus deleniti similique tempora beatae ex perferendis accusantium. Pariatur esse, nihil veritatis illum facilis minus?", id: 1
      },
      {
        title: "Post 2", body: "Something's waiting for me.", id: 2
      }
    ])

    return {posts};
  }
}
</script>
