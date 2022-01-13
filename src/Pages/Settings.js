import React, {useState, useEffect, useCallback} from 'react';

import NavbarAuth from '../Components/NavbarAuth'
import {useDropzone} from 'react-dropzone';
import UserService from '../Services/User/UserService';
import axios from 'axios';
import { color, padding } from '@mui/system';
import { red } from '@mui/material/colors';

const Settings = () => {

    const user = UserService.getCurrentUser();
    const [userDetails, setUserDetails] = useState([]);

    const addDefaultSrc1= (ev) => {
        ev.target.src = "https://previews.123rf.com/images/triken/triken1608/triken160800029/61320775-männlich-avatar-profilbild-standard-benutzer-avatar-gast-avatar-einfach-menschlichen-kopf-vektor-ill.jpg" // this could be an imported image or url
    }
    const addDefaultSrc2= (ev) => {
        ev.target.src = "http://apy-ingenierie.fr/wp-content/plugins/uix-page-builder/uixpb_templates/images/UixPageBuilderTmpl/default-cover-2.jpg" // this could be an imported image or url
    }
      
    const fetchUser= () => {
        axios.get("http://localhost:8080/api/user/findUser/" + user.username).then(res => {
          console.log(res);
          setUserDetails(res.data);
        });
    }
 
    useEffect( () => {
        fetchUser();
      }, []);

    return (
        <div className='flex flex-col min-h-screen overflow-hidden'>
            <NavbarAuth />
            
            <main>
                <div className="w-full lg:grid lg:grid-cols-7 gap-2 max-w-6xl mx-auto px-5 sm:px-6">
                    <div className='lg:col-span-2 hidden lg:block'>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <h1 style={{paddingRight: 100}}>photo de profile =: 
                            <img src={'http://localhost:8080/api/user/'+ userDetails.id +'/image/download'} alt={"loading"} onError={addDefaultSrc1}></img>
                            <Dropzone {...userDetails}></Dropzone>
                        </h1>
                        <h1 style={{paddingLeft: 200}}>photo Cover=: 
                            <img src={'http://localhost:8080/api/user/'+ userDetails.id +'/image/download'} alt={"loading"} onError={addDefaultSrc2}></img>
                            <Dropzone {...userDetails}></Dropzone>
                        </h1>
                        <br></br>
                        <br></br>
                        <h1>id =: <b>{userDetails.id}</b> </h1>
                        <h1>username =: <b>{user.username}</b> </h1>
                        <h1>password =: <b>{userDetails.password}</b> </h1>
                        <h1>Nom d'utilisateur =: <b>{userDetails.name} PlaceHolder</b> </h1>
                        <h1 style={{whiteSpace: 'nowrap'}}>Adresse email =: <b>{userDetails.email}Placeholder (Sawb Input bach ymodifie settings dyalo 3ad ngad lupdate dyal settings) </b> </h1>
                    </div>
                </div>

            </main>
        </div>
    )
}

function Dropzone({ idUser }) {
    const onDrop = useCallback(acceptedFiles => {
      const file = acceptedFiles[0];
      console.log(file);
  
      const formData = new FormData();
      formData.append("file", file);
      
      axios.post(
        'http://localhost:8080/api/'+ idUser +'/image/upload', 
        formData,
        {
          headers: {
            "Content-Type" : "multipart/form-data"
          }
        }
      )
      .then(() => {
        console.log("file uploaded successfully");
      })
      .catch(err => {
        console.log(err);
      });
      
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
  
    return (
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p>Drop the files here ...</p> :
            <p><button style={{borderWidth: 5, borderColor: 'red'}}>Update Image</button></p>
        }
      </div>
    )
  }

export default Settings