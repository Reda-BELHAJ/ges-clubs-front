import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

import ModalJoin from './ModalJoin';
import UserService from '../Services/User/UserService';
import ClubService from '../Services/Club/ClubService';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RiLock2Fill } from 'react-icons/ri';


const Helmet = ({club, state}) => {
    const username = UserService.getCurrentUser().username
    const idUser = UserService.getCurrentUser().id; 
    const [idClub, setIdClub] = useState(""); 
    const token = UserService.getCurrentUser().accessToken;

    const [idMember, setIdMember] = useState("");
    const [showModal1, setShowModal1] = useState(false);
    const [follow, setFollow] = useState("Follow");  // Unfollow - Follow    Get from back 
    const [join, setJoin] = useState("Join");  // Unjoin - Join      Get from back 
    const [requestFollow, setRequestFollow] = useState({nomClub: "", idUser: idUser});

    const handleOpen1 = () => setShowModal1(true);
    const handleClose1 = () => setShowModal1(false);

    useEffect(() => {

        let a = club;
        if(club != null) {
            
           
         axios.get("http://localhost:8080/api/clubService/findClubByName/" + club,
            {
                headers: {
                    "Content-Type" : "multipart/form-data",
                    'Authorization': `Bearer ${token}`
                }
            }
            ).then(response => {
                setIdClub(response.data.idClub);
            })
            .catch(error => {
                console.log(error.message);
            }) 
            
        }  
    }, [club]);

    useEffect(() => {

        let a = club;
        if(club != null) {
            
            axios.get("http://localhost:8080/api/user/checkClubFollowed/" + idUser + "/" + a,
            {
            headers: {
                "Content-Type" : "multipart/form-data",
                'Authorization': `Bearer ${token}`
                }

            }).then(response => {  
                 
                if(response.data)
                    setFollow("Unfollow");
                else
                    setFollow("Follow");      
            })
            .catch(error => {
                console.log(error.message);
            }) 
            
        }  
    }, [club]);

    useEffect(() => {

        let a = club;
        if(club != null) {
            
            axios.get("http://localhost:8080/api/memberService/checkIsMember/" + idUser + "/" + a,
            {
            headers: {
                "Content-Type" : "multipart/form-data",
                'Authorization': `Bearer ${token}`
                }

            }).then(response => {  
                console.log("checkIsMember", response.data)
                setIdMember(response.data.idMembre);
                if(response.data != "" && response.data.status == true)
                    setJoin("Unjoin");
                else if (response.data != "" && response.data.status == false)
                    setJoin("Wainting for Join");
                else
                    setJoin("Join");            
            })
            .catch(error => {
                console.log(error.message);
            }) 
            
        }  
    }, [club]);
    

    const addDefaultSrc1= (ev) => {
        ev.target.src = "https://previews.123rf.com/images/triken/triken1608/triken160800029/61320775-m??nnlich-avatar-profilbild-standard-benutzer-avatar-gast-avatar-einfach-menschlichen-kopf-vektor-ill.jpg" // this could be an imported image or url
    }

    const addDefaultSrc2= (ev) => {
        ev.target.src = "http://apy-ingenierie.fr/wp-content/plugins/uix-page-builder/uixpb_templates/images/UixPageBuilderTmpl/default-cover-2.jpg" // this could be an imported image or url
    }

    const handleUnjoin = () => {
        let a = club
        if(a != null) {
            if(join == "Unjoin"){
                setJoin("Join");
                UserService.deleteMember(idMember);
                toast.warning(" No longer member of club " + a + " !", {
                    position: toast.POSITION.TOP_CENTER});
            }   
        }
    }
    const handleFollow= (ev) => {
        let a = club
        if(a != null) {
            if(follow == "Follow"){
                setFollow("Unfollow");
                UserService.followClub({nomClub: a, idUser: idUser});
                toast.success(" followed club " + a + " !", {
                    position: toast.POSITION.TOP_CENTER});
            }  
            else if(follow == "Unfollow"){
                setFollow("Follow");
                UserService.unfollowClub({nomClub: a, idUser: idUser});
                toast.warning(" Unfollowed club " + a + " !", {
                    position: toast.POSITION.TOP_CENTER});
            }   
        }
         
    }

    return (
        <div className='mt-20 '>
                                                       
            {state ?
            <>
                <div className='bg-cover bg-no-repeat bg-center'>
                    <img 
                        className="md rounded-full relative" 
                        src={'http://localhost:8080/api/user/landing/' + idUser + '/image/downloadCover'}
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
                                        className="w-16 h-16 border-2 border-gray-300 rounded-full" 
                                        src={'http://localhost:8080/api/user/landing/' + idUser + '/image/downloadIcon'}
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
                        src={'http://localhost:8080/api/clubService/landing/' + idClub + '/image/downloadCover'}
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
                                        className="w-16 h-16 border-2 border-gray-300 rounded-full" 
                                        src={'http://localhost:8080/api/clubService/landing/' + idClub + '/image/downloadIcon'}
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
                                        <ToastContainer></ToastContainer>
                                        {follow}    
                                    </button>

                                </> :
                                <>
                                    <button 
                                        onClick={handleFollow}
                                        className="py-2 px-4 bg-white hover:text-white hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-blue-500 w-full transition ease-in duration-200 text-center text-base font-semibold shadow shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg border border-blue-200 "
                                    >
                                        <ToastContainer></ToastContainer>
                                        {follow}    
                                    </button>
                                </>
                            }

                            {UserService.getCurrentUser().roles.includes("ROLE_USER_INTERNAL") &&   
                                <>
                                    {join == "Join" ?
                                    <>
                                        {UserService.getCurrentUser().nonLocked == true ? 
                                            <>
                                                <button
                                                    onClick={handleOpen1} 
                                                    className="py-2 px-4 bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                                                >
                                                    
                                                    {join} 
                                                </button>
                                            </>:
                                            <>
                                                <button 
                                                    className="py-2 px-8 bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                                                    disabled
                                                >

                                                    <RiLock2Fill></RiLock2Fill>
                                                </button>
                                            </>
                                        }

                                    </> :
                                    <>
                                        <button
                                            onClick={handleUnjoin} 
                                            className="py-2 px-4 bg-white hover:text-white hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-blue-500 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                                        >
                                            
                                            {join}
                                        </button>
                                    </>
                                    }
                                </>     
                            }
                                
                            
                             
                        </div>
                    </div>
                </div>
            </>}
           
            <ModalJoin handleClose={handleClose1} show={showModal1} nomClub={club}/>
        
        </div>

    )
}

export default Helmet
