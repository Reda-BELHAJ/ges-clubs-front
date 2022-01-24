import axios from 'axios';

import UserService from '../User/UserService';

class PostService {

    getPosts() {

        const token = UserService.getCurrentUser().accessToken;
        return axios.get("http://localhost:8080/api/postService/getPost", {
            headers: {
                "Content-Type" : "multipart/form-data",
                'Authorization': `Bearer ${token}`
            }
        });
    }

    
}

export default new PostService()