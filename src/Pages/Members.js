import React from 'react';

import NavbarAuth from '../Components/NavbarAuth'
 import Helmet from '../Components/Helmet'
import Widgets from '../Components/Widgets'
import TableMembers from '../Components/TableMembers';
import { useState, useEffect } from 'react';
import axios from 'axios';
import UserService from '../Services/User/UserService';
import { useParams } from 'react-router-dom';

const Members = () => {
    const [d, setD] = useState(null);
    const token = UserService.getCurrentUser().accessToken;
    const {club: nameClubFromRoute} = useParams();
   
    const [nameClub, setNameClub] = useState(null);

    useEffect(() => {
        
        setNameClub(nameClubFromRoute);

    }, [nameClubFromRoute]);

    useEffect(() => {
        if(nameClub != null){
            
            axios.get("http://localhost:8080/api/memberService/findAllEMembersOfClub/" + nameClub,
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
        }
         
    }, [nameClub]);

  return (
        <div className='flex flex-col min-h-screen overflow-hidden'>
            { <NavbarAuth /> }

            { <Helmet club={nameClub} state={false}/> }
            <main>
                <div className="w-full lg:grid lg:grid-cols-7 gap-2 max-w-6xl mx-auto px-5 sm:px-6">
                    <div className='lg:col-span-2 hidden lg:block'>
                        <Widgets state={false} recomState={false}/>
                    </div>
                    {d &&
                        <TableMembers
                            data = {d}
                            sendData = {setD}
                            clubName = {nameClub} 
                        />
                    }
                    
                </div>

            </main>
        </div>
  );
};

export default Members;
