import { db } from "@/firebase/config";
import { ref } from "vue";

let getPost = (id) => {
    let post = ref(null);
    let error = ref("");

    let load = async() => {
        try {
            // await new Promise((resolve, reject) => {
            //     setTimeout(resolve, 2000);
            //   }) // waiting 2s before fetching data
            let doc = await db.collection("posts").doc(id).get();
            // console.log(res.data());
            post.value = {...doc.data(), id: doc.id};
        } catch (err) {
            error.value = err.message;
        }
    }

    return {post, error, load};
}

export default getPost;