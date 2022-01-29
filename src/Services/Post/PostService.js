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

    savePost(requestPost, image) {
        const token = UserService.getCurrentUser().accessToken;
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    
        axios.post("http://localhost:8080/api/postService/save",
            JSON.stringify(requestPost), {
                headers: headers
            }   
        ).then(response => {
            console.log("new post added");
            return response.data
            
        })
        .then(data => {
            console.log(data.postID)
            this.uploadImage(image, data.postID)
        })
        .catch(err => {
            console.log(err);
        });
    }

    

    uploadImage(image, idPost) {

        const token = UserService.getCurrentUser().accessToken;
        console.log(token);
        const formData = new FormData();
        formData.append("file", image);
        
        axios.post(
            'http://localhost:8080/api/postService/'+ idPost +'/image/uploadIcon', 
            formData,
            {
                headers: {
                    "Content-Type" : "multipart/form-data",
                    'Authorization': `Bearer ${token}`
                }
            }
        )
        .then(() => {
            console.log("image uploaded");
        })
        .catch(err => {
            console.log(err);
        });
    }


    
}

export default new PostService()