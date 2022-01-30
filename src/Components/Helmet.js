import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import ModalJoin from './ModalJoin';
import UserService from '../Services/User/UserService';

const Helmet = ({club, state}) => {
    const username = UserService.getCurrentUser().username
    const idUser = UserService.getCurrentUser().id; 

    const [showModal1, setShowModal1] = useState(false);
    const [follow, setFollow] = useState("Follow");  // Unfollow - Follow    Get from back 
    const [join, setJoin] = useState("Join");  // UnJoin - Join      Get from back 
    const [requestFollow, setRequestFollow] = useState({nomClub: club, idUser: idUser});

    const handleOpen1 = () => setShowModal1(true);
    const handleClose1 = () => setShowModal1(false);

    const addDefaultSrc1= (ev) => {
        ev.target.src = "https://previews.123rf.com/images/triken/triken1608/triken160800029/61320775-männlich-avatar-profilbild-standard-benutzer-avatar-gast-avatar-einfach-menschlichen-kopf-vektor-ill.jpg" // this could be an imported image or url
    }

    const addDefaultSrc2= (ev) => {
        ev.target.src = "http://apy-ingenierie.fr/wp-content/plugins/uix-page-builder/uixpb_templates/images/UixPageBuilderTmpl/default-cover-2.jpg" // this could be an imported image or url
    }

    const handleFollow= (ev) => {
        
        if(follow == "Follow"){
            setFollow("Unfollow");
            UserService.followClub(requestFollow);
        }  
        else if(follow == "Unfollow"){
            setFollow("Follow");
            UserService.unfollowClub(requestFollow);
        }     
    }

    return (
        <div className='mt-20 '>
            {state ?
            <>
                <div className='bg-cover bg-no-repeat bg-center'>
                    <img 
                        className="md rounded-full relative" 
                        src={'http://localhost:8080/api/user/landing/' + 0 + '/image/downloadCover'}
                        alt={"Loading"} 
                        onError={addDefaultSrc2}
                        className='w-full h-40 object-cover'
                    />
                </div>
                
                <div className="p-4 max-w-6xl mx-auto px-5 sm:px-6">
                    <div className="relative flex w-full">
                        <div className="flex flex-1">
                            <div style={{marginTop: '-6rem'}}>
                                <div className="md rounded-full relative avatar">
                                    <img 
                                        height={70}
                                        width={70}
                                        className="md rounded-full relative" 
                                        src={'http://localhost:8080/api/user/landing/' + 0 + '/image/downloadIcon'}
                                        alt={"Loading"} 
                                        onError={addDefaultSrc1}
                                    />
                                    <div style={{marginTop: 30}} className="absolute font-bold ">{username}</div>
                                </div>
                                
                            </div>
                            
                        </div>
                        
                        <div className="flex flex-row gap-3 text-right">
                            
                            <Link
                                to='/createClub'
                                className="py-2 px-4 bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                            >
                                Create Club
                            </Link>
                               
                        </div>
                    </div>
                </div>
            </> :
            <>
                 <div className='bg-cover bg-no-repeat bg-center'>
                    <img 
                        className="md rounded-full relative" 
                        src={'http://localhost:8080/api/clubService/landing/' + 0 + '/image/downloadCover'}
                        alt={"Loading"} 
                        onError={addDefaultSrc2}
                        className='w-full h-40 object-cover'
                    />
                </div>
                
                <div className="p-4 max-w-6xl mx-auto px-5 sm:px-6">
                    <div className="relative flex w-full">
                        <div className="flex flex-1">
                            <div style={{marginTop: '-6rem'}}>
                                <div className="md rounded-full relative avatar">
                                    <img 
                                        height={70}
                                        width={70}
                                        className="md rounded-full relative" 
                                        src={'http://localhost:8080/api/clubService/landing/' + 0 + '/image/downloadIcon'}
                                        alt={"Loading"} 
                                        onError={addDefaultSrc1}
                                    />
                                    <div style={{marginTop: 30}} className="absolute font-bold ">{club}</div>
                                </div>
                                
                            </div>
                            
                        </div>
                        
                        <div className="flex flex-row gap-3 text-right">
                            {
                                follow == "Follow" ?
                                <>
                                    <button 
                                        onClick={handleFollow}
                                        className="py-2 px-4 bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                                    >
                                        {follow}    
                                    </button>

                                </> :
                                <>
                                    <button 
                                        onClick={handleFollow}
                                        className="py-2 px-4 bg-white hover:text-white hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-blue-500 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                                    >
                                        {follow}    
                                    </button>
                                </>
                            }

                            <button
                                onClick={handleOpen1} 
                                className="py-2 px-4 bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                            >
                                Join
                            </button>
                             
                        </div>
                    </div>
                </div>
            </>}
           
            <ModalJoin handleClose={handleClose1} show={showModal1} nomClub={club}/>
        </div>

    )
}

export default Helmet
