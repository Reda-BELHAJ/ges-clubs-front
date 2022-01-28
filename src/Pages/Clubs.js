import React from 'react'

import NavbarAuth from '../Components/NavbarAuth'
import ListClubs from '../Components/ListClubs'
import axios from 'axios'
import UserService from '../Services/User/UserService'
import { useState, useEffect } from 'react'

const Clubs = () => {

    const [d, setD] = useState(null);
    const token = UserService.getCurrentUser().accessToken;
  
    useEffect(() => {
        axios.get("http://localhost:8080/api/clubService/getClubs",
        {
            headers: {
                "Content-Type" : "multipart/form-data",
                'Authorization': `Bearer ${token}`
            }
        }
        ).then(response => {
            setD(response.data);
        })
        .catch(error => {
            console.log(error.message);
        })  
    }, []);
    
    return (
        <div className='flex flex-col min-h-screen overflow-hidden'>
            <NavbarAuth />
            <main className='mt-20 w-full max-w-6xl mx-auto px-5 sm:px-6'>
                {console.log(d)}
                { d &&
                    <ListClubs
                        data = {d}
                        sendData = {setD}   
                    />  
                }
                
            </main>
        </div>
    )
}

export default Clubs
