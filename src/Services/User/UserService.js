import axios from 'axios';

const API_URL = "http://localhost:8080/api/auth/";

class UserService {

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