import { ref } from "vue";
import {db} from "../firebase/config"

let getPosts = () => {
    let posts = ref([]);
    let error = ref("");

    let load = async() => {
      // fetch data
      try {
        let res = await db.collection("posts").get();
        // console.log(res.docs);
        posts.value = res.docs.map((doc)=> {
          // console.log(doc.data());
          return {...doc.data(), id: doc.id}
        })
      } catch (err) {
        error.value = err.message;
      }
    }

    return {posts, error, load};
}

export default getPosts;