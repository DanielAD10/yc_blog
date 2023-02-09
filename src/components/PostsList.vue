<template>
    <div v-for="post in posts" :key="post.id">
        <SinglePost :post= "post"></SinglePost>
    </div>
</template>

<script>
import { onUpdated } from '@vue/runtime-core'
import SinglePost from './SinglePost'
export default {
  components: { SinglePost },
    props: ["posts"],
    setup() {
        onUpdated(()=>{console.log("data updated")});
    }
}
</script>

<style>

</style>