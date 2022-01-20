import axios from 'axios';



class ClubService {

    findClubByName(name) {

        const headers = {
            'Content-Type': 'application/json'
        }

        axios.get("http://localhost:8080/api/clubService/findClubByName?nomClub=" + name ).then(response => {
            return response.data
        })
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.log(error.message);
        })
        
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