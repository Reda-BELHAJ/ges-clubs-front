import React from 'react'

import NavbarAuth from '../Components/NavbarAuth'
import Helmet from '../Components/Helmet'
import Widgets from '../Components/Widgets'

import EventForm from './EventForm'

const CreateEvent = () => {
    return (
        <div className='flex flex-col min-h-screen overflow-hidden'>
            <NavbarAuth />

            <Helmet club={"test"} state={true}/>
            <main>
                <div className="w-full lg:grid lg:grid-cols-7 gap-2 max-w-6xl mx-auto px-5 sm:px-6">
                    <div className='lg:col-span-2 hidden lg:block'>
                        <Widgets recomState={false}/>
                    </div>
                    
                    <EventForm recomState={false}></EventForm>
                </div>
            </main>
        </div>
    )
}

export default CreateEvent