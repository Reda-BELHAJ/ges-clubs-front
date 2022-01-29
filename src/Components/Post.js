import React, {useState, useEffect} from 'react'
import UserService from '../Services/User/UserService';
import axios from 'axios';

export default function Post ({idPost, key, idClub, idUser, clubAvatar, image, text, likes, comments, username, creaAt, postedBy}) {

    const [like,setLike] = useState(likes)
    const [isLiked,setIsLiked] = useState(false)
    const [role, setRole] = useState("");
    const [commentsCount, setCommentsCount] = useState("");
    const token = UserService.getCurrentUser().accessToken;

    useEffect(() => {
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
      
    }, []);

    useEffect(() => {
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
      
    }, []);

    return (
        <div className="flex w-full">
            <div className="border-gray-200 rounded-xl border p-4">
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <img 
                            className="h-11 w-11 rounded-full" 
                            src={clubAvatar}   // IMAGE CLUB
                            alt="avatar"
                        />
                        
                        <div className="ml-1.5 text-sm leading-tight">
                            <span className="text-black font-bold block ">{username}</span>
                        </div>
                    </div>
                </div>
                <p className="text-black block text-xl leading-snug mt-3 "
                >
                    {text}
                </p>
                <p className="text-gray-500 text-base py-1 my-0.5"
                >
                    {"Posted by : "  +  postedBy + " [" + role + "]"}
                </p>
                
                <img 
                    className="mt-2 rounded-2xl border border-gray-100" 
                    src={image}          //IMAGE POST
                    alt=""                    
                />

                <p className="text-gray-500 text-base py-1 my-0.5">
                    {creaAt}
                </p>

                <div className="border-gray-200 border border-b-0 my-1"></div>

                <div className="text-gray-500 flex mt-3">
                    <div className="flex items-center mr-6">
                        <button>
                            <svg viewBox="0 0 24 24" className="fill-current h-5 w-auto r-1re7ezh r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr">
                                <g><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path></g>
                            </svg>
                        </button>
                        <span className="ml-3">
                            {likes}
                        </span>
                    </div>

                    <div className="flex items-center mr-6">
                        <button>
                            <svg viewBox="0 0 24 24" className="fill-current h-5 w-auto r-1re7ezh r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr">
                                <g><path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path></g>
                            </svg>
                        </button>
                        <span className="ml-3">
                            {commentsCount}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

