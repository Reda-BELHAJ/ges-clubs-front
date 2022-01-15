import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import ModalJoin from './ModalJoin';
import ModalJoin2 from './ModalJoin2';

const Helmet = ({club, state}) => {
    const [showModal1, setShowModal1] = useState(false);

    const handleOpen1 = () => setShowModal1(true);
    const handleClose1 = () => setShowModal1(false);

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
                        {state ? 
                            <>
                                <Link
                                    to='/createClub'
                                    className="py-2 px-4 bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                                >
                                    Create Club
                                </Link>
                            </> : 
                            <>
                                <button 
                                    className="py-2 px-4 bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                                >
                                    Follow
                                </button>

                                <button
                                    onClick={handleOpen1} 
                                    className="py-2 px-4 bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                                >
                                    Join
                                </button>
                            </> 
                        }
                    </div>
                </div>
            </div>

            <ModalJoin handleClose={handleClose1} show={showModal1} club={club}/>
        </div>

    )
}

export default Helmet
