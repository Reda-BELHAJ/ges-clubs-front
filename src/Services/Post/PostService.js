import axios from 'axios';



class PostService {

    getPosts() {
        
        return axios.get("http://localhost:8080/api/postService/getPost");
    }

    
}

export default new PostService()