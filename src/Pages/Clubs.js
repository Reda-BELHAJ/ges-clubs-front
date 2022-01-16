import React from 'react'

import NavbarAuth from '../Components/NavbarAuth'
import ListClubs from '../Components/ListClubs'

const Clubs = () => {
    return (
        <div className='flex flex-col min-h-screen overflow-hidden'>
            <NavbarAuth />
            <main className='mt-20 w-full max-w-6xl mx-auto px-5 sm:px-6'>
                <ListClubs />
            </main>
        </div>
    )
}

export default Clubs
