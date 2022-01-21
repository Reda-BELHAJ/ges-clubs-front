import axios from 'axios';
import UserService from '../User/UserService';


class ClubService {

    uploadImageCover(file, idClub) {

        const token = UserService.getCurrentUser().accessToken;
        console.log(token);
        const formData = new FormData();
        formData.append("file", file);
        
        axios.post(
            'http://localhost:8080/api/clubService/'+ idClub +'/image/uploadCover', 
            formData,
            {
                headers: {
                    "Content-Type" : "multipart/form-data",
                    'Authorization': `Bearer ${token}`
                }
            }
        )
        .then(() => {
            console.log("file  uploaded successfully");
        })
        .catch(err => {
            console.log(err);
        });
    }

    async createClub(requestCreateClub){

        const headers = {
            'Content-Type': 'application/json'
        }
        return axios.post("http://localhost:8080/api/clubService/save",
            JSON.stringify(requestCreateClub), {
                headers: headers
            }   
        );
      }
    
}

export default new ClubService()