import React from 'react'

import NavbarAuth from '../Components/NavbarAuth'
import Helmet from '../Components/Helmet'
import Widgets from '../Components/Widgets'
import Feed from '../Components/Feed'

const Profile = ({state}) => {
    state = false; // for testing true means user and false means club

    return (
        <div className='flex flex-col min-h-screen overflow-hidden'>
            <NavbarAuth />

            {
                state ? 
                <>
                    <Helmet club={"eaze"} state={state}/>
                    <main>
                        <div className="w-full lg:grid lg:grid-cols-7 gap-2 max-w-6xl mx-auto px-5 sm:px-6">
                            <div className='lg:col-span-2 hidden lg:block'>
                                <Widgets recomState={false}/>
                            </div>
                            {/* <Feed recomState={false}/> */}
                        </div>
                    </main>
                </> :
                <>
                    <Helmet club={"eaze"} state={state}/>
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
