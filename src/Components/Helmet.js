import React, {useState} from 'react'

import ModalJoin from './ModalJoin';

const Helmet = ({club}) => {
    const [showModal, setShowModal] = useState(false);

    const handleOpen = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    return (
        <div className='mt-20 '>
            <div className='bg-cover bg-no-repeat bg-center'>
                <img 
                    src='https://pbs.twimg.com/profile_banners/975356535676264448/1521378309/1500x500'
                    alt='Couverture'
                    className='w-full h-40 object-cover'
                />
            </div>
            
            <div className="p-4 max-w-6xl mx-auto px-5 sm:px-6">
                <div className="relative flex w-full">
                    <div className="flex flex-1">
                        <div style={{marginTop: '-6rem'}}>
                            <div className="md rounded-full relative avatar">
                                <img 
                                    height={120}
                                    width={120}
                                    className="md rounded-full relative" 
                                    src="https://uifaces.co/our-content/donated/BMGfa1yq.png"
                                    alt=""
                                />
                                <div className="absolute"></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-3 text-right">
                        <button 
                            className="py-2 px-4 bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                        >
                            Follow
                        </button>

                        <button
                            onClick={handleOpen} 
                            className="py-2 px-4 bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                        >
                            Join
                        </button>
                    </div>
                </div>
            </div>

            <ModalJoin handleClose={handleClose} show={showModal} club={club}/>
        </div>

    )
}

export default Helmet
