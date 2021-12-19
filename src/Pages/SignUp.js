import React from 'react'

import Navbar from '../Components/Navbar'
import SignBaseForm from '../Components/SignBaseForm'

const SignUp = () => {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            
            <Navbar />

            <main className="flex-grow">
                <SignBaseForm flag={false}/>
            </main>

        </div>
    )
}

export default SignUp
