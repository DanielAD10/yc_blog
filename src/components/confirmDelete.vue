<template>
  <div class="delete">
    <h2>Delete post</h2>
    <p>Are you sure you want to delete this post?</p>
    <div class="deletebtn">
      <button @click="cancelDelete" id="cancel">Cancel</button>
      <button @click="deletePost" id="del">Delete</button>
    </div>
    
  </div>
</template>

<script>
import { db } from '@/firebase/config';
import {useRouter} from 'vue-router';
export default {
  props: ["id"],
  setup(props, ctx) {
    let cancelDelete = () => {
      ctx.emit("noDelete");
    }
    let router = useRouter();
    let deletePost = async() => {
      let id = props.id;
      await db.collection("posts").doc(id).delete();

      router.push("/");
      
    }
    return {cancelDelete, deletePost};
  }
}
</script>

<style>
  .delete {
    box-sizing: border-box;
    border: 1px solid darkslategrey;
    border-radius: 10px;
    width: 400px;
    margin: 50px auto;
  }
  .delete h2 {
    text-align: center;
    color: tomato;
  }
  .delete p {
    padding: 10px;
    text-align: center;
  }
  .deletebtn {
    display: flex;
  }
  .deletebtn #cancel {
    background-color: thistle;
  }
  .deletebtn #del {
    background: tomato;
    color: whitesmoke;
  }
</style>