import React from 'react'
import { useState, useEffect } from 'react'
import NavbarAuth from '../Components/NavbarAuth'
import Helmet from '../Components/Helmet'
import Widgets from '../Components/Widgets'
import Feed from '../Components/Feed'
import { useParams } from 'react-router-dom'

const Profile = () => {
    
    const params = useParams();
    const [p, setP] = useState(params.state);
    const [state, setState] = useState(undefined);
    
    useEffect(() => {
      
        if (p == 0){
            setState(false);
        }
        else{
            setState(true);
        }

    }, []);
    
    return (
        <div className='flex flex-col min-h-screen overflow-hidden'>
            <NavbarAuth state={state} club={"azeda"}/>
            {console.log(params.nameClub)}
            {console.log(state)}
            {
                state ? 
                <>
                
                    <Helmet club={"azeda"} state={ state}  />   
                    <main>
                        <div className="w-full lg:grid lg:grid-cols-7 gap-2 max-w-6xl mx-auto px-5 sm:px-6">
                            <div className='lg:col-span-2 hidden lg:block'>
                                <Widgets club={"azeda"} state={state} recomState={false}/>
                            </div>
                            <Feed recomState={false}/>
                        </div>
                    </main>
                </> :
                <>
                
                    <Helmet club={"azeda"} state={ state}/>    
                    <main>
                        <div className="w-full lg:grid lg:grid-cols-7 gap-2 max-w-6xl mx-auto px-5 sm:px-6">
                            <div className='lg:col-span-2 hidden lg:block'>
                                <Widgets club={"azeda"} state={state} recomState={false}/>
                            </div>
                            
                        </div>
                    </main>
                </>
            }

            
        </div>
    )
}

export default Profile
