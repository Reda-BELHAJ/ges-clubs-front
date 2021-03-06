import axios from 'axios';


const API_URL = "http://localhost:8080/api/auth/";

class UserService {

  followClub(requestFollow) {
    const token = this.getCurrentUser().accessToken;
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
    
    axios.post("http://localhost:8080/api/user/follow",
        JSON.stringify(requestFollow), {
            headers: headers
        }   
    ).then(() => {
        console.log("club followed +1 ");
    })
    .catch(err => {
        console.log(err);
    });
  }

  unfollowClub(requestFollow) {
    const token = this.getCurrentUser().accessToken;
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
    
    axios.post("http://localhost:8080/api/user/unfollow",
        JSON.stringify(requestFollow), {
            headers: headers
        }   
    ).then(() => {
        console.log("club followed -1 ");
    })
    .catch(err => {
        console.log(err);
    });
  }

  likePost(requestLike) {
    const token = this.getCurrentUser().accessToken;
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
    
    axios.post("http://localhost:8080/api/user/like",
        JSON.stringify(requestLike), {
            headers: headers
        }   
    ).then(() => {
        console.log("post Liked +1 ");
        window.location.reload();
    })
    .catch(err => {
        console.log(err);
    });
  }

  unLikePost(requestLike) {
    const token = this.getCurrentUser().accessToken;
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
    
    axios.post("http://localhost:8080/api/user/unlike",
        JSON.stringify(requestLike), {
            headers: headers
        }   
    ).then(() => {
        console.log("post Unliked -1 ");
        window.location.reload();
    })
    .catch(err => {
        console.log(err);
    });
  }

  saveMember(requestCreateMember) {
    const token = this.getCurrentUser().accessToken;
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
    console.log(requestCreateMember);
    axios.post("http://localhost:8080/api/memberService/save",
        JSON.stringify(requestCreateMember), {
            headers: headers
        }   
    ).then(() => {
        console.log("new member added to the club");
    })
    .catch(err => {
        console.log(err);
    });
  }

  deleteMember(idMembre) {
    const token = this.getCurrentUser().accessToken;
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
    
    axios.delete("http://localhost:8080/api/memberService/delete/" + idMembre,
            {
                headers: {
                    "Content-Type" : "multipart/form-data",
                    'Authorization': `Bearer ${token}`
                }
            }
            ).then(response => {
                window.location.reload();
            })
            .catch(error => {
                
                console.log(error.message);
            }) 
  }

  uploadImageCover(fileC, idUser) {

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

  logout() {
    localStorage.removeItem("user");
  }

  register(username, userRole, password, email) {
    
    return axios.post(API_URL + "signup", {
      username,
      userRole,
      password,
      email
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