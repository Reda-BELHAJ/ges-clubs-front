import React from 'react'

import NavbarAuth from '../Components/NavbarAuth'
import Feed from '../Components/Feed'
import Recommendations from '../Components/Recommendations'

const Home = () => {
    return (
        <div className='flex flex-col min-h-screen overflow-hidden'>
            <NavbarAuth />

            <main >
                
                <div className="w-full lg:grid lg:grid-cols-7 gap-2 max-w-6xl mx-auto px-5 sm:px-6">
                    <div className='lg:col-span-2 hidden lg:block'>
                        <Recommendations 
                            header="Which Club To Follow"
                            recomState={true}
                        />

                        <Recommendations 
                            header="Clubs You Follow"
                            recomState={false}
                        />
                    </div>
                    
                    <Feed />
                </div>

            </main>
        </div>
    )
}

export default Home