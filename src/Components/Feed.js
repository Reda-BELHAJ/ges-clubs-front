import React, { Component, useContext, useEffect, useState } from 'react'

import Post from './Post'
import PostService from '../Services/Post/PostService';
import UserService from '../Services/User/UserService';

import axios from 'axios';
import { Link } from 'react-router-dom';

import { RiImage2Fill } from "react-icons/ri";
import { BsFillCameraVideoFill } from "react-icons/bs";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Feed = ({recomState, state, club}) => {
    const user = UserService.getCurrentUser();
    const [post, setPost] = useState([]);
    const [requestPost, setRequestPost] = useState({desc: "", nameClub: club, userName: user.username, idUser: user.id});
    const [imagePost, setImagePost] = useState("");
    const [videoPost, setVideoPost] = useState("");

    const [isEMember, setIsEMember] = useState(false);
    
    const token = UserService.getCurrentUser().accessToken;

    useEffect(() => {
        if (club != null) {
                axios.get("http://localhost:8080/api/memberService/checkPresident/" + club + "/" + user.id,   
            {        // http://localhost:8080/api/memberService/checkEMember/
                headers: {
                    "Content-Type" : "multipart/form-data",
                    'Authorization': `Bearer ${token}`
                }
            }
            ).then(response => {
                setIsEMember(response.data);
                
            })
            .catch(error => {
                console.log(error.message);
            }) 
        }
        
      
    }, []);

    useEffect(() => {
        PostService.getPostsForClubFollowed(user.id).then(res => {
            setPost(res.data.reverse());

        });
    
      }, []);

      const addDefaultSrc1= (ev) => {
        ev.target.src = "https://previews.123rf.com/images/triken/triken1608/triken160800029/61320775-männlich-avatar-profilbild-standard-benutzer-avatar-gast-avatar-einfach-menschlichen-kopf-vektor-ill.jpg" // this could be an imported image or url
    }

    const handleSubmit = (e) => {
        

        if (imagePost != ""){
            toast.success("Post has been submited !", {
                position: toast.POSITION.TOP_CENTER});
            PostService.savePost(requestPost, imagePost, 0);
        }
            
            
        if (videoPost != ""){
            toast.success("Post has been submited !", {
                position: toast.POSITION.TOP_CENTER});

            PostService.savePost(requestPost, videoPost, 1);
        }
           
        if(imagePost == "" && videoPost == ""){
            toast.success("Post has been submited !", {
                position: toast.POSITION.TOP_CENTER});
            PostService.savePostOnlyText(requestPost);
        }
              
    }

    const handleImage = (e) => {
        setImagePost(e.target.files[0]);
        setVideoPost("");
    }

    const handleVideo = (e) => {
        setVideoPost(e.target.files[0]);
        setImagePost("");
    }

    return(
        <div className={`lg:col-span-5 h-auto ${recomState && 'mt-20'}`}>
            
            {!state && isEMember &&
                <div className="flex w-full mb-3">
                <div className="w-full border-gray-300 rounded-xl border p-4">
                    <div className="flex justify-between">
                        <div className="flex items-center">
                            <img 
                                className="h-11 w-11 rounded-full" 
                                src={'http://localhost:8080/api/clubService/landing/' + 0 + '/image/downloadIcon'}
                                alt={"Loading"} 
                                onError={addDefaultSrc1}
                            />
                            
                            <div className="ml-1.5 text-sm leading-tight">
                                <span className="text-black font-bold block ">{club}</span>
                            </div>
                        </div>
                    </div>
                    
                    <textarea
                        onChange={e => {setRequestPost({ ...requestPost, desc: e.target.value})}}
                        className="my-2 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding rounded transition ease-in-out m-0 focus:text-gray-700 "
                        id="exampleFormControlTextarea1"
                        rows="2"
                        placeholder="Your message"
                    />
                    <b>{imagePost.name}{videoPost.name}</b>
                    <div className="border-gray-300 border border-b-0 my-1"></div>

                    <div className="text-gray-500 flex mt-3">
                        <div className="flex items-center mr-6">
                            <label className='cursor-pointer hover:text-blue-700'>
                                <RiImage2Fill  type={Image} size={25}/>
                                <input type='file' onChange={handleImage} className="hidden"/>
                            </label>
                        </div>

                        <div className="flex items-center mr-6">
                            <label className='cursor-pointer hover:text-blue-700'>
                                <BsFillCameraVideoFill size={25}/>
                                <input onChange={handleVideo} type='file' className="hidden"/>
                            </label>
                        </div>
                        <button 
                            onClick={handleSubmit}
                            className="py-2 px-4 bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                        >
                            <ToastContainer></ToastContainer>
                            Post
                        </button>
                        <Link
                            to = {`/createEvent/${club}/0`}
                            className="ml-2 py-2 px-4 bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                        >
                            Create Event
                        </Link>
                    </div>
                    
                </div>
            </div>
            }
            {post.length == 0 && 
                
                        <Link 
                            to="/clubs"
                            className="flex w-full py-2 px-4 bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                        >
                            New User ? Follow Clubs to View their posts
                        </Link>       
            }
            {post.map((p) => (
                
                <div className='mb-3' key={p.postID}>
                    <Post
                            comments={p.comments}
                            idPost={p.postID}
                            likes={p.likes}
                            text={p.description}
                            postedBy={p.userName}
                            image={'http://localhost:8080/api/postService/landing/' + p.postID + '/image/downloadImagePost'}  /* 0  =======> p.postID */
                            clubAvatar={'http://localhost:8080/api/clubService/landing/' + p.idClub + '/image/downloadIcon'}    // ClubIcon Download using idClub
                            username={p.clubName }
                            creaAt={new Date(Date.parse(p.dateTime)).toUTCString()}
                            idClub = {p.idClub}
                            idUser = {p.userID}
                            disableComments={false}
                            EventBool={p.event}
                            video ={'http://localhost:8080/api/postService/landing/' + p.postID + '/image/downloadVideoPost'} /* 0  =======> p.postID */
                            videoCheck={p.postVideo}
                            imageCheck={p.postImgURL}
                            //comments
                        />
                </div>                  
                    ))
            }
        </div>
    )
}

export default Feed


