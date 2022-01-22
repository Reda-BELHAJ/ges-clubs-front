import axios from 'axios';


const API_URL = "http://localhost:8080/api/auth/";

class UserService {


  uploadLogoAndCover(fileC, fileL, idUser) {

    const token = this.getCurrentUser().accessToken;
    
    const formData = new FormData();
    formData.append("file", fileC);
    
    axios.post(
        'http://localhost:8080/api/user/'+ idUser +'/image/uploadCover', 
        formData,
        {
            headers: {
                "Content-Type" : "multipart/form-data",
                'Authorization': `Bearer ${token}`
            }
        }
    )
    .then(() => {
        this.uploadImageLogo(fileL, idUser);
    })
    .catch(err => {
        console.log(err);
    });
}

uploadImageLogo(fileL, idClub) {

    const token = this.getCurrentUser().accessToken;
    
    const formData = new FormData();
    formData.append("file", fileL);
    
    axios.post(
        'http://localhost:8080/api/user/'+ idClub +'/image/uploadIcon', 
        formData,
        {
            headers: {
                "Content-Type" : "multipart/form-data",
                'Authorization': `Bearer ${token}`
            }
        }
    )
    .then(() => {
      console.log("profil and cover image changed sucessufly");
    })
    .catch(err => {
        console.log(err);
    });
}

updateUser(userName, password, email, idUser) {
    const token = this.getCurrentUser().accessToken;

    return axios
      .put('http://localhost:8080/api/user/updateUser/'+ idUser , {
        userName,
        password,
        email
      },{
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
      })
      .then(response => {
        const user = this.getCurrentUser();
        this.logout();
        this.login(userName, password)
        console.log("user have been updated successufly");
      });
}

  login(username, password) {
    return axios
      .post(API_URL + "signin", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  saveMember(fullName, filiere, anneE, username, club){
    return axios.post("http://localhost:8080/api/memberService/save", {
      fullName,
      filiere,
      anneE,
      username,
      club
    });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, role, password) {
    console.log("UserService: " + role);
    return axios.post(API_URL + "signup", {
      username,
      role,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }

  getUserByName(username) {
    return axios.get("http://localhost:8080/api/user/findUser/");
  }

 
}

export default new UserService()