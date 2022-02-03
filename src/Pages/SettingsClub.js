import React from 'react';

import NavbarAuth from '../Components/NavbarAuth'
import Helmet from '../Components/Helmet'
import Widgets from '../Components/Widgets'
import SettingsProfileClub from '../Components/SettingsProfileClub';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const SettingsClub = () => {
    
    const {club: nameClubFromRoute} = useParams();
   
    const [nameClub, setNameClub] = useState(null);

    useEffect(() => {
        
        setNameClub(nameClubFromRoute);

    }, [nameClubFromRoute]);
    return (
        <div className='flex flex-col min-h-screen overflow-hidden'>
            <NavbarAuth state={false} club={"club"}/>
            
            <Helmet club={nameClub} state={true}/>
            <main>
                <div className="w-full lg:grid lg:grid-cols-7 gap-2 max-w-6xl mx-auto px-5 sm:px-6">
                    <div className='lg:col-span-2 hidden lg:block'>
                      <Widgets club={nameClub} state={false} recomState={false}/>
                    </div>
                    {nameClub != null && <SettingsProfileClub clubS={nameClub}/>}
                </div>

            </main>
        </div>
    )
};

export default SettingsClub;
