import React from 'react'

import NavbarAuth from '../Components/NavbarAuth'
import Helmet from '../Components/Helmet'
import Widgets from '../Components/Widgets'
import Feed from '../Components/Feed'
import { useParams } from 'react-router-dom'

const Profile = () => {
    const state = true; // for testing true means user and false means club
    
    let{ nameClub } = useParams;
    
    return (
        <div className='flex flex-col min-h-screen overflow-hidden'>
            <NavbarAuth />
            {console.log(nameClub)}
            {
                state ? 
                <>
                
                    <Helmet club={"azeda"} state={state}  />  {/* club = location.name       state = location.show */}    
                    <main>
                        <div className="w-full lg:grid lg:grid-cols-7 gap-2 max-w-6xl mx-auto px-5 sm:px-6">
                            <div className='lg:col-span-2 hidden lg:block'>
                                <Widgets recomState={false}/>
                            </div>
                           
                        </div>
                    </main>
                </> :
                <>
                
                    <Helmet club={"azeda"} state={state}/>    
                    <main>
                        <div className="w-full lg:grid lg:grid-cols-7 gap-2 max-w-6xl mx-auto px-5 sm:px-6">
                            <div className='lg:col-span-2 hidden lg:block'>
                                <Widgets recomState={false}/>
                            </div>
                            <Feed recomState={false}/>
                        </div>
                    </main>
                </>
            }

            
        </div>
    )
}

export default Profile
