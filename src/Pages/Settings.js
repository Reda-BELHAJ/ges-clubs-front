import React, {useState, useEffect, useCallback} from 'react';

import NavbarAuth from '../Components/NavbarAuth'
import Helmet from '../Components/Helmet'
import Widgets from '../Components/Widgets'
import SettingsProfileUser from '../Components/SettingsProfileUser';

import { useDropzone } from 'react-dropzone';
import UserService from '../Services/User/UserService';
import axios from 'axios';
import { color, padding } from '@mui/system';
import { red } from '@mui/material/colors';

const Settings = () => {

    // const user = UserService.getCurrentUser();
    // const [userDetails, setUserDetails] = useState([]);

    // const addDefaultSrc1= (ev) => {
    //     ev.target.src = "https://previews.123rf.com/images/triken/triken1608/triken160800029/61320775-männlich-avatar-profilbild-standard-benutzer-avatar-gast-avatar-einfach-menschlichen-kopf-vektor-ill.jpg" // this could be an imported image or url
    // }
    // const addDefaultSrc2= (ev) => {
    //     ev.target.src = "http://apy-ingenierie.fr/wp-content/plugins/uix-page-builder/uixpb_templates/images/UixPageBuilderTmpl/default-cover-2.jpg" // this could be an imported image or url
    // }
      
    // const fetchUser= () => {
    //     axios.get("http://localhost:8080/api/user/findUser/" + user.username).then(res => {
    //       console.log(res);
    //       setUserDetails(res.data);
    //     });
    // }
 
    // useEffect( () => {
    //     fetchUser();
    //   }, []);

    return (
        <div className='flex flex-col min-h-screen overflow-hidden'>
            <NavbarAuth />

            <Helmet club={"test"} state={true}/>
            <main>
                <div className="w-full lg:grid lg:grid-cols-7 gap-2 max-w-6xl mx-auto px-5 sm:px-6">
                    <div className='lg:col-span-2 hidden lg:block'>
                      <Widgets club={null} state={true} recomState={false}/>
                    </div>

                    <SettingsProfileUser />
                </div>

            </main>
        </div>
    )
}

export default Settings