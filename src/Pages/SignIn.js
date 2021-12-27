import React from 'react'


import Navbar from '../Components/Navbar'
import SignBaseForm from '../Components/SignBaseForm'

const SignIn = () => {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            
            <Navbar />

            <main className="flex-grow">
                <SignBaseForm flag={true}/>
            </main>

        </div>
    )
}

export default SignIn
