import React from 'react'
import { useState, useEffect } from 'react'
import NavbarAuth from '../Components/NavbarAuth'
import Helmet from '../Components/Helmet'
import Widgets from '../Components/Widgets'
import Feed from '../Components/Feed'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import UserService from '../Services/User/UserService'

const Profile = () => {
    
    const {state: stateFromRoute, nameClub: nameClubFromRoute} = useParams();
    const [p, setP] = useState(null);
    const [club, setClub] = useState(null);
    const [state, setState] = useState(undefined);
    
    useEffect(() => {
        
        if (p == 0){
            setState(false);
        }
        else{
            setState(true);
        }

    }, [p]);

    useEffect(() => {
        
        setP(stateFromRoute);
        setClub(nameClubFromRoute);

    }, [stateFromRoute, nameClubFromRoute]);
    
    return (
        <div className='flex flex-col min-h-screen overflow-hidden'>
            
            {
                state ? 
                <>
                    <NavbarAuth state={state} club={club}/>
                    <Helmet club={club} state={ state}  />   
                    <main>
                        <div className="w-full lg:grid lg:grid-cols-7 gap-2 max-w-6xl mx-auto px-5 sm:px-6">
                            <div className='lg:col-span-2 hidden lg:block'>
                                <Widgets club={club} state={state} recomState={false}/>
                            </div>
                            
                        </div>
                    </main>
                </> :
                <>
                    <NavbarAuth state={state} club={club}/>
                    <Helmet club={club} state={ state}/>    
                    <main>
                        <div className="w-full lg:grid lg:grid-cols-7 gap-2 max-w-6xl mx-auto px-5 sm:px-6">
                            <div className='lg:col-span-2 hidden lg:block'>
                                <Widgets club={club} state={state} recomState={false}/>
                            </div>
                            <Feed club={club}  state = {state} recomState={false}/>
                        </div>
                    </main>
                </>
            }

            
        </div>
    )
}

export default Profile
