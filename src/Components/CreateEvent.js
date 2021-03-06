import React from 'react'

import NavbarAuth from '../Components/NavbarAuth'
import Helmet from '../Components/Helmet'
import Widgets from '../Components/Widgets'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import EventForm from './EventForm'

const CreateEvent = () => {

    const [p, setP] = useState(null);
    const {state: stateFromRoute, nameClub: nameClubFromRoute} = useParams();
   
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
            <NavbarAuth club={club} state={state}/>

            <Helmet club={club} state={state}/>
            <main>
                <div className="w-full lg:grid lg:grid-cols-7 gap-2 max-w-6xl mx-auto px-5 sm:px-6">
                    <div className='lg:col-span-2 hidden lg:block'>
                        <Widgets club={club} state={state} recomState={false}/>
                    </div>
                    
                    <EventForm club={club} state={state} recomState={false}></EventForm>
                </div>
            </main>
        </div>
    )
}

export default CreateEvent