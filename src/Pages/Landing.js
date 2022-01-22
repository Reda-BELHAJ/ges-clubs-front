import React from 'react'

import Navbar from '../Components/Navbar'
import VideoPlayer from '../Components/VideoPlayer'
import Features from '../Components/Features'
import Showcase from '../Components/Showcase'
import Footer from '../Components/Footer'

const Landing = () => {
    return (
        <div className='flex flex-col min-h-screen overflow-hidden'>

            <Navbar />

            <main className="flex-grow">
                {localStorage.removeItem("user")}
                <VideoPlayer />
                <Features />
                <Showcase />

            </main>

            <Footer />

        </div>
    )
}

export default Landing