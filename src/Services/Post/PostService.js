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

    saveComment(requestComment) {

        const token = UserService.getCurrentUser().accessToken;
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
        axios.post("http://localhost:8080/api/postService/saveComment/",
            JSON.stringify(requestComment), {
                headers: headers
            }
        ).then(response => {
            console.log("new Comment added");
            return response.data
        })
        .catch(err => {
            console.log(err);
        }); 
    }

    saveEventPost(requestPost, requestEvent, image, file) {
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
            this.getLastEventPost(image, requestEvent, file);
        })
        .catch(err => {
            console.log(err);
        }); 
    }

    savePost(requestPost, image, is) {
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
            this.getLastPost(image, is);
        })
        .catch(err => {
            console.log(err);
        });
    }

    saveEventObject(requestEvent, file, postId) {
        const token = UserService.getCurrentUser().accessToken;
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }

        requestEvent.postID = postId;
        axios.post("http://localhost:8080/api/eventService/save",
            JSON.stringify(requestEvent), {
                headers: headers
            }   
        ).then(response => {
            console.log("new post added");
            return response.data
            
        })
        .then(data => {
            this.getLastEventObject(file);
        })
        .catch(err => {
            console.log(err);
        }); 
    }

    getLastEventObject(file) {

        const token = UserService.getCurrentUser().accessToken;
        axios.get("http://localhost:8080/api/eventService/getLastEvent",
            {
                headers: {
                    "Content-Type" : "multipart/form-data",
                    'Authorization': `Bearer ${token}`
                }
            }
            ).then(response => {
                console.log(response.data);
                return response.data
            })
            .then(data => {
                
                this.uploadFile(file, data.eventID);
                
                
            })
            .catch(error => {
                console.log(error.message);
            }) 
    }

    getLastEventPost(image, requestEvent, file) {

        const token = UserService.getCurrentUser().accessToken;
        axios.get("http://localhost:8080/api/postService/getLastPost",
            {
                headers: {
                    "Content-Type" : "multipart/form-data",
                    'Authorization': `Bearer ${token}`
                }
            }
            ).then(response => {
                console.log(response.data);
                return response.data
            })
            .then(data => {
                
                this.uploadEventPostImage(image, data.postID, requestEvent, file);
                
            })
            .catch(error => {
                console.log(error.message);
            }) 
    }

    getLastPost(image, is) {

        const token = UserService.getCurrentUser().accessToken;
        axios.get("http://localhost:8080/api/postService/getLastPost",
            {
                headers: {
                    "Content-Type" : "multipart/form-data",
                    'Authorization': `Bearer ${token}`
                }
            }
            ).then(response => {
                console.log(response.data);
                return response.data
            })
            .then(data => {
                if(is == 0)
                    this.uploadImage(image, data.postID)
                if(is == 1)
                    this.uploadVideo(image, data.postID)
            })
            .catch(error => {
                console.log(error.message);
            }) 
    }

    uploadEventPostImage(image, postId, requestEvent, file) {

        const token = UserService.getCurrentUser().accessToken;
        
        const formData = new FormData();
        formData.append("file", image);
        console.log(image);
        console.log(formData);
        console.log(formData.file);
        axios.post(
            'http://localhost:8080/api/postService/'+ postId +'/image/uploadIcon', 
            formData,
            {
                headers: {
                    "Content-Type" : "multipart/form-data",
                    'Authorization': `Bearer ${token}`
                }
            }
        )
        .then(() => {
            this.saveEventObject(requestEvent, file, postId);
        })
        .catch(err => {
            console.log(err);
        });
    }

    uploadImage(image, idPost) {

        const token = UserService.getCurrentUser().accessToken;
        
        const formData = new FormData();
        formData.append("file", image);
        console.log(image);
        console.log(formData);
        console.log(formData.file);
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

    uploadVideo(image, idPost) {

        const token = UserService.getCurrentUser().accessToken;
        
        const formData = new FormData();
        formData.append("file", image);
       
        axios.post(
            'http://localhost:8080/api/postService/'+ idPost +'/image/uploadVideo', 
            formData,
            {
                headers: {
                    "Content-Type" : "multipart/form-data",
                    'Authorization': `Bearer ${token}`
                }
            }
        )
        .then(() => {
            console.log("video uploaded");
        })
        .catch(err => {
            console.log(err);
        });
    }

    uploadFile(file, idEvent) {

        const token = UserService.getCurrentUser().accessToken;
        
        const formData = new FormData();
        formData.append("file", file);
       
        axios.post(
            'http://localhost:8080/api/eventService/'+ idEvent +'/file/uploadFile', 
            formData,
            {
                headers: {
                    "Content-Type" : "multipart/form-data",
                    'Authorization': `Bearer ${token}`
                }
            }
        )
        .then(() => {
            console.log("file excel uploaded");
        })
        .catch(err => {
            console.log(err);
        });
    }

    
}

export default new PostService()