import React, {useState, useEffect} from 'react'
import UserService from '../Services/User/UserService';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {FaRegCommentAlt} from 'react-icons/fa';
import {FaCommentAlt} from 'react-icons/fa';
import { BsHeartFill, BsHeart } from 'react-icons/bs';

export default function Post ({idPost, idClub, idUser, clubAvatar, image, text, likes, comments, username, creaAt, postedBy, EventBool, video, imageCheck, videoCheck}) {

    const [like,setLike] = useState(likes)
    const [isLiked,setIsLiked] = useState(true)
    const [role, setRole] = useState("");
    const [commentsCount, setCommentsCount] = useState("");
    const [commentsColor, setCommentsColor] = useState(false);
    const [likeColor, setLikeColor] = useState(false);
    const token = UserService.getCurrentUser().accessToken;
    

    useEffect(() => {
        
        if (idClub != undefined && idUser != undefined) {
            axios.get("http://localhost:8080/api/memberService/findMemberRole/" + idClub + "/" + idUser,   
        {        // http://localhost:8080/api/memberService/checkEMember/
            headers: {
                "Content-Type" : "multipart/form-data",
                'Authorization': `Bearer ${token}`
            }
        }
        ).then(response => {
            
            setRole(response.data);
            
        })
        .catch(error => {
            console.log(error.message);
        }) 
        }
          
    }, []);

    useEffect(() => {
        if (idPost != undefined) {
            axios.get("http://localhost:8080/api/postService/getCommentsSize/" + idPost,   
            {        
                headers: {
                    "Content-Type" : "multipart/form-data",
                    'Authorization': `Bearer ${token}`
                }
            }
            ).then(response => {
            
                setCommentsCount(response.data);
                
            })
            .catch(error => {
                console.log(error.message);
            }) 
          
        }
       
    }, []);

    const addDefaultSrc1= (ev) => {
            ev.target.src = "https://previews.123rf.com/images/triken/triken1608/triken160800029/61320775-männlich-avatar-profilbild-standard-benutzer-avatar-gast-avatar-einfach-menschlichen-kopf-vektor-ill.jpg" // this could be an imported image or url
    }

    return (
        <div className="flex w-full">
            <div className={`w-full border-gray-200 rounded-xl border p-4 ${EventBool && 'bg-gradient-to-r from-green-200 via-cyan-200 to-blue-200'}`}>
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <img 
                            className="h-11 w-11 rounded-full" 
                            src={clubAvatar}   // IMAGE CLUB
                            alt="avatar"
                            onError={addDefaultSrc1}
                            
                        />
                        
                        <div className="ml-1.5 text-sm leading-tight">
                            <span className="text-black font-bold block ">{username}</span>  {/* nom Club */}
                        </div>
                    </div>
                </div>
                <p className="overflow-hidden text-black block text-xl leading-snug mt-3 "
                >
                    {text}
                </p>
                <p className="text-gray-500 text-base py-1 my-0.5"
                >
                    {"Posted by : "  +  postedBy + " [" + role + "]"}
                </p>
                {
                    imageCheck == null && videoCheck != null &&
                    <video controls
                        
                        className="w-full overflow-hidden mt-2 rounded-2xl object-cover" 
                        src={video}
                        alt="--------------------------------------------------------------------" 
                    />
                }
                {
                    videoCheck == null && imageCheck != null &&
                    <img 
                        className="w-full overflow-hidden mt-2 rounded-2xl object-cover" 
                        src={image}          //IMAGE POST
                        alt="--------------------------------------------------------------------"                    
                    />
                }

                <p className="text-gray-500 text-base py-1 my-0.5">
                    {creaAt}
                </p>

                <div className="border-gray-300 border border-b-0 my-1"></div>

                <div className="text-gray-500 flex mt-3">
                    <div className="flex items-center mr-6">
                        <button onClick={() => {setIsLiked(!isLiked)}} className='focus:outline-0'>
                            <div onMouseEnter={() => {
                                setLikeColor(true);
                            }} onMouseLeave={() => {setLikeColor(false)}} >
                                { likeColor || isLiked ? 
                                <>
                                    <BsHeartFill
                                        className="text-red-600 fill-current h-5 w-auto r-1re7ezh r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
                                    />
                                </>:
                                <>
                                    <BsHeart
                                        className="hover:text-red-600 fill-current h-5 w-auto r-1re7ezh r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
                                    />
                                </>
                                }
                            </div>
                        </button>
                        <span className="ml-3">
                            {likes}
                        </span>
                    </div>

                    <div className="flex items-center mr-6">
                        
                        <div onMouseEnter={() => {
                            setCommentsColor(true);
                        }} onMouseLeave={() => {setCommentsColor(false)}} >

                            <Link 
                                to={`/postDetails/${idPost}/${commentsCount}`}
                                className='focus:outline-0'
                            >   
                            { commentsColor ? 
                            <>
                                <FaCommentAlt
                                    className="text-blue-600 fill-current h-5 w-auto r-1re7ezh r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
                                />
                            </>:
                            <>
                                <FaRegCommentAlt
                                    className="hover:text-blue-600 fill-current h-5 w-auto r-1re7ezh r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
                                />
                            </>
                            }
                            </Link>
                        </div>
                            
                        
                        <span className="ml-3">
                            {commentsCount}
                        </span>
                    </div>
                    {
                        EventBool ? <button 
                            className="py-2 px-4 bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                        >
                            Interested
                        </button> :
                        null
                    }
                    
                    
                </div>
            </div>
        </div>
    )
}

