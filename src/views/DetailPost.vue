<template>
  <h1>Post Detail</h1>
  <div v-if="post">
    <h2>{{post.title}}</h2>
    <p>{{post.body}}</p>
  </div>
  <div v-else>
    <SpinnerLoading></SpinnerLoading>
  </div>
</template>

<script>
import SpinnerLoading from '../components/SpinnerLoading'
import getPost from "../composables/getPost"

export default {
  components: { SpinnerLoading },
    props: ["id"],
    setup(props) {
        // destructuring
        let {post, error, load} = getPost(props.id);
        load();
        return {post, error};
    }
}
</script>

<style>

</style>