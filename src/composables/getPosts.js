import { ref } from "vue";

let getPosts = () => {
    let posts = ref([]);
    let error = ref("");

    let load = async() => {
      // fetch data
      try {
        // await new Promise((resolve, reject) => {
        //   setTimeout(resolve, 2000);
        // }) // waiting 2s before fetching data
        
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

    return {posts, error, load};
}

export default getPosts;