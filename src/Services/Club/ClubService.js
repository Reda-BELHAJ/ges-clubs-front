import axios from 'axios';



class ClubService {

    getClubs() {
        return axios.get("/api/club");
    }

    createClub(nomClub, descClub, nomReferent, president, vicepresident, tresorier, secretaire){
        return axios.post("http://localhost:8080/api/clubService/save", {
            nomClub,
            descClub,
            nomReferent,
            president,
            vicepresident,
            tresorier,
            secretaire
        });
      }
    
}

export default new ClubService()