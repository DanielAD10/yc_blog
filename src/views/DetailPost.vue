<template>
  <div class="detail">
    <div v-if="post">
      <div v-if="deletePost">
        <ConfirmDelete @noDelete = "noDelete" :id = "id"></ConfirmDelete>
      </div>
      <div class="post">
        <h2>{{post.title}}</h2>
        <p>{{post.body}}</p>
        <div class="pills" v-for="tag in post.tags" :key="tag">
            {{tag}}
        </div>
        <button @click="deletePost = !deletePost">Delete</button>
      </div>
    </div>
    <div v-else>
      <SpinnerLoading></SpinnerLoading>
    </div>
  </div>
</template>

<script>
import ConfirmDelete from '../components/confirmDelete'
import { ref } from '@vue/reactivity';
import SpinnerLoading from '../components/SpinnerLoading'
import getPost from "../composables/getPost"

export default {
  components: {
    ConfirmDelete, SpinnerLoading },
    props: ["id"],
    setup(props) {
        // destructuring
        let {post, error, load} = getPost(props.id);
        load();
        let deletePost = ref(false);
        let noDelete = () => {
          deletePost.value = false;
        }
        return {post, error, deletePost, noDelete};

    }
}
</script>

<style>
  .detail {
        max-width: 1200px;
        margin: 0 auto;
        padding: 10px;
    }
  .post {
        margin: 0 40px 30px;
        padding-bottom: 10px;
        border: 1px solid darkslategrey;
        border-radius: 10px;
    }
    .post h2 {
        display: inline-block;
        color: whitesmoke;
        padding: 10px;
        margin-top: 0;
        position: relative;
        font-size: 23px;
    }
    .post h2::before {
        content: "";
        display: block;
        background-color: darkslategrey;
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: -1;
        padding-right: 40px;
        left: -30px;
        top: -3px;
        border-radius: 10px;
        transform: rotateZ(-1.5deg);
    }
    .post p {
        padding: 0 20px;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
    .pills {
        display: inline-block;
        padding: 10px;
        background-color: darkcyan;
        color: ghostwhite;
        border-radius: 30px;
        margin: 10px;
        font-size: 15px;
    }
    button {
        display: block;
        margin: 15px auto;
        background-color: rgb(212, 248, 7);
        border: none;
        padding: 10px;
        font-size: 16px;
        color: darkslategrey;
        font-weight: bold;
        border-radius: 10px;
        cursor: pointer;
    }
</style>