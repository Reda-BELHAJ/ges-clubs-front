import React, { Component, useContext, useEffect, useState } from 'react'
import { format } from "date-fns";
import Post from './Post'
import PostService from '../Services/Post/PostService';
import UserService from '../Services/User/UserService';
import axios from 'axios';

import { RiImage2Fill } from "react-icons/ri";
import { BsFillCameraVideoFill } from "react-icons/bs";

const Feed = ({recomState, state, club}) => {
    const user = UserService.getCurrentUser();
    const [post, setPost] = useState([]);
    const [requestPost, setRequestPost] = useState({desc: "", nameClub: club, userName: user.username, idUser: user.id});
    const [imagePost, setImagePost] = useState("");
    const [videoPost, setVideoPost] = useState("");

    const [isEMember, setIsEMember] = useState(false);
    
    const token = UserService.getCurrentUser().accessToken;

    useEffect(() => {
        axios.get("http://localhost:8080/api/memberService/checkPresident/" + club + "/" + user.id,   
        {        // http://localhost:8080/api/memberService/checkEMember/
            headers: {
                "Content-Type" : "multipart/form-data",
                'Authorization': `Bearer ${token}`
            }
        }
        ).then(response => {
            console.log(response.data);
            setIsEMember(response.data);
            
        })
        .catch(error => {
            console.log(error.message);
        }) 
      
    }, []);

    useEffect(() => {
        PostService.getPosts().then(res => {
            setPost(res.data);
            console.log(post);
        });
    
      }, []);

      const addDefaultSrc1= (ev) => {
        ev.target.src = "https://previews.123rf.com/images/triken/triken1608/triken160800029/61320775-männlich-avatar-profilbild-standard-benutzer-avatar-gast-avatar-einfach-menschlichen-kopf-vektor-ill.jpg" // this could be an imported image or url
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        PostService.savePost(requestPost, imagePost);
    }

    const handleImage = (e) => {
        console.log(e.target.value.substring(12))
        setImagePost(e.target.value.substring(12))
    }

    const handleVideo = (e) => {

        setVideoPost(e.target.value.substring(12))
    }

    return(
        <div className={`lg:col-span-5 h-auto ${recomState && 'mt-20'}`}>
            {console.log("State is : ", state)}
            {!state && isEMember &&
                <div className="flex w-full">
                <div className="w-full border-gray-200 rounded-xl border p-4">
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
                    <div className="border-gray-200 border border-b-0 my-1"></div>

                    <div className="text-gray-500 flex mt-3">
                        <div className="flex items-center mr-6">
                            <label className='cursor-pointer hover:text-blue-700'>
                                <RiImage2Fill size={25}/>
                                <input onChange={handleImage} type='file' className="hidden"/>
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
                            Post
                        </button>
                        <button 
                            className="ml-2 py-2 px-4 bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                        >
                            Create Event
                        </button>
                    </div>
                    
                </div>
            </div>
            }
            <Post 
                key="12"
                username="Reda"
                text=" Posted by : “SIUUUUUUUUUUUUU.” — Cristiano Ronaldo"
                avatar="https://uifaces.co/our-content/donated/BMGfa1yq.png"
                image="https://talksport.com/wp-content/uploads/sites/5/2020/12/NINTCHDBPICT000628686290-e1610650343631.jpg?strip=all&w=960"
                likes="7"
                comments="45"
                creaAt="10:05 AM · Dec 19, 2020"
            />
        
            {post.map((p) => (
                <div key={p.postID}>
                    <Post
                            key={p.postID}
                            idPost={p.postID}
                            likes={p.likes}
                            text={p.description}
                            postedBy={p.userName}
                            image={p.postImgURL}
                            clubAvatar={p.imageURL}    // ClubIcon Download using idClub
                            username={p.userName}
                            creaAt={new Date(Date.parse(p.dateTime)).toUTCString()}
                            idClub = {p.idClub}
                            idUser = {p.userID}
                            //comments
                        />
                </div>                  
                    ))
                 }
        </div>
    )
}

export default Feed
