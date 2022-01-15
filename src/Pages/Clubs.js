import React, {useState} from 'react'

import ModalJoin from '../Components/ModalJoin';

import NavbarAuth from '../Components/NavbarAuth'

const Clubs = () => {
    const [showModal, setShowModal] = useState(false);

    const handleOpen = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    return (
        <div className='flex flex-col min-h-screen overflow-hidden'>
            <NavbarAuth />
            <main>
            <br></br><br></br> <br></br>
                <div className="w-full lg:grid lg:grid-cols-7 gap-2 max-w-6xl mx-auto px-5 sm:px-6">
                    <button 
                            className="py-2 px-4 bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                        >
                            Follow
                        </button>
                </div>
                <br></br><br></br> <br></br>
                <div className="w-full lg:grid lg:grid-cols-7 gap-2 max-w-6xl mx-auto px-5 sm:px-6">
                    <button
                            onClick={handleOpen} 
                            className="py-2 px-4 bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                        >
                            Join
                    </button>
                </div>
                <br></br><br></br> <br></br>
                <div className="w-full lg:grid lg:grid-cols-7 gap-2 max-w-6xl mx-auto px-5 sm:px-6">
                    <h1 style={{whiteSpace: 'nowrap'}}><b>Clubs of which you are an Owner</b></h1>
                </div>
                <br></br><br></br> <br></br>
                <div className="w-full lg:grid lg:grid-cols-7 gap-2 max-w-6xl mx-auto px-5 sm:px-6">
                    <h1 style={{whiteSpace: 'nowrap'}}> <b>Clubs of which you are a member</b></h1>
                </div>


            </main>
            <ModalJoin handleClose={handleClose} show={showModal}/>
        </div>
    )
}

export default Clubs
