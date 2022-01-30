import axios from 'axios';
import UserService from '../User/UserService';


class ClubService {

    getClubs() {

        const token = UserService.getCurrentUser().accessToken;
    
        axios.get("http://localhost:8080/api/clubService/getClubs",
            {
                headers: {
                    "Content-Type" : "multipart/form-data",
                    'Authorization': `Bearer ${token}`
                }
            }
            ).then(response => {
                
                return JSON.stringify(response.data);
            })
            .catch(error => {
                console.log(error.message);
            }) 
    }

    uploadImageCover(fileC, idClub) {

        const token = UserService.getCurrentUser().accessToken;
        console.log(token);
        const formData = new FormData();
        formData.append("file", fileC);
        
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
            console.log("club created successuflly");
        })
        .catch(err => {
            console.log(err);
        });
    }

    uploadImageLogo(fileL, fileC, idClub) {

        const token = UserService.getCurrentUser().accessToken;
        console.log(token);
        const formData = new FormData();
        formData.append("file", fileL);
        
        axios.post(
            'http://localhost:8080/api/clubService/'+ idClub +'/image/uploadIcon', 
            formData,
            {
                headers: {
                    "Content-Type" : "multipart/form-data",
                    'Authorization': `Bearer ${token}`
                }
            }
        )
        .then(() => {
            this.uploadImageCover(fileC, idClub);
        })
        .catch(err => {
            console.log(err);
        });
    }

    getClubByName(nom, fileC, fileL) {

        const token = UserService.getCurrentUser().accessToken;
        axios.get("http://localhost:8080/api/clubService/findClubByName?nomClub=" + nom,
            {
                headers: {
                    "Content-Type" : "multipart/form-data",
                    'Authorization': `Bearer ${token}`
                }
            }
            ).then(response => {
                return response.data
            })
            .then(data => {
                this.uploadImageLogo(fileL, fileC, data.idClub)
            })
            .catch(error => {
                console.log(error.message);
            }) 
    }

    getClubName(idClub) {

        const token = UserService.getCurrentUser().accessToken;
        
        return new Promise( (resolve, reject) => {
            
            axios.get("http://localhost:8080/api/clubService/getClubName/" + idClub,
            {
                headers: {
                    "Content-Type" : "multipart/form-data",
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(response => {
                 
                resolve( response.data );
     
            })
            .then(data => {
                return data;
            })
            .catch( error => {
                 
                reject( error );
             
            } );
        });
    }


    createClub(requestCreateClub, nom, fileC, fileL){

        const token = UserService.getCurrentUser().accessToken;
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
        console.log(requestCreateClub);
        axios.post("http://localhost:8080/api/clubService/save",
            JSON.stringify(requestCreateClub), {
                headers: headers
            }   
        ).then(() => {
            this.getClubByName(nom, fileC, fileL);
        })
        .catch(err => {
            console.log(err);
        });
      }
    
}

export default new ClubService()