import React from 'react';

import NavbarAuth from '../Components/NavbarAuth'
import Helmet from '../Components/Helmet'
import Widgets from '../Components/Widgets'
import Post from '../Components/Post';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import UserService from '../Services/User/UserService';
import PostService from '../Services/Post/PostService';
import Recommendations from './Recommendations';

const PostDetails = () => {

    const {idPost: idPostFromRoute, Ccount: CcountFromRoute} = useParams();
    const token = UserService.getCurrentUser().accessToken; 
    const [count, setCount] = useState(null);
    const [postId, setPostId] = useState(null);
    const [post, setPost] = useState(null);
    const user = UserService.getCurrentUser();
   
    
    useEffect(() => {
        
        setPostId(idPostFromRoute);
        setCount(CcountFromRoute);

    }, [idPostFromRoute, CcountFromRoute]);

    useEffect(() => {

        if (postId != null) {
            axios.get("http://localhost:8080/api/postService/getPostById/" + postId,   
            {        
                headers: {
                    "Content-Type" : "multipart/form-data",
                    'Authorization': `Bearer ${token}`
                }
            }
            ).then(response => {
                setPost(response.data);
                
            })
            .catch(error => {
                console.log(error.message);
            }) 
        }
    
    }, [postId]);
    
    
    return (
        <div className='flex flex-col min-h-screen overflow-hidden'>
            <NavbarAuth />
            
            <main>
                <div className="w-full lg:grid lg:grid-cols-7 gap-2 max-w-6xl mx-auto px-5 sm:px-6">
                    <div className='lg:col-span-2 hidden lg:block'>
                        <Widgets  recomState={true}/>

                        <Recommendations 
                            header="Which Club To Follow"
                            recomState={true}
                        />

                        <Recommendations 
                            header="Clubs You Follow"
                            recomState={false}
                        />
                    </div>


                    <div className='lg:col-span-5 mb-10 mt-20'>
                        {post != null &&
                            <Post 
                            key={post.postID}
                            username={post.clubName}
                            text={post.description}
                            clubAvatar={'http://localhost:8080/api/clubService/landing/' + post.idClub + '/image/downloadIcon'}    // ClubIcon Download using idClub
                            image={'http://localhost:8080/api/postService/landing/' + 0 + '/image/downloadImagePost'}  /* 0  =======> p.postID */
                            likes={post.likes}
                            comments={post.comments}
                            idClub = {post.idClub}
                            idUser = {post.userID}
                            idPost={post.postID}
                            postedBy={post.userName}
                            creaAt={new Date(Date.parse(post.dateTime)).toUTCString()}
                            video = "d"
                            videoCheck={"nuleee"}
                            imageCheck={"nuleazel"}
                        />
                        }
                        
                        <div className="flex w-full mt-2">
                            {post != null &&
                                <FormComment postID={post.postID} club={post.idClub} />
                            }                        
                        </div>
                        <section className="flex w-full mt-2 bg-white ">
                            <div className="border-gray-300 rounded-xl border w-full px-0 sm:px-5">
                                
                                <Comment 
                                    avatar="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80"
                                    Username="RedaBELHAJ"
                                    text="This is the Text for the comment"
                                    firstItem={true}
                                />
                                {post != null && post.comments.length == 0 &&
                                    <div>
                                        <b>Write a comment ....</b>
                                        <br></br> <br></br> 
                                    </div>
                                }
                                {post != null && post.comments.map((p) => (
                                    <div key={p.commentID}>
                                        <Comment 
                                            avatar={'http://localhost:8080/api/user/landing/' + p.userID + '/image/downloadIcon'}
                                            Username={p.username}
                                            text={p.text}
                                            firstItem={false}
                                            date={new Date(Date.parse(p.dateTime)).toUTCString()} 
                                            role={p.userRole}  
                                            club={p.nomClub}
                                        />
                                    </div>
                                    ))
                                    
                                }
                                
                            </div>
                        </section>
                    </div>
                    
                </div>

            </main>
        </div>
  );
};

export default PostDetails;

const FormComment = ({postID, club}) => {

    const user = UserService.getCurrentUser();
    const [co, setCo] = useState({idClub: club, idPost: postID, idUser: user.id, text: ""})
    

    const handleComment = (e) => {
        e.preventDefault();
        if(co.text != "")
            PostService.saveComment(co);
        
        
    }

    return (
        <form className="border-gray-300 rounded-xl border w-full bg-white rounded-lg px-4 pt-2">
            <div className="flex flex-wrap -mx-3 mb-2">
                <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg font-bold">Add a new comment</h2>
                <div className="w-full md:w-full px-3 mb-2 mt-2">
                    <textarea className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="body" placeholder='Type Your Comment' required
                            onChange={e => {setCo({...co, text: e.target.value})}} ></textarea>
                </div>
                
                <div className="w-full md:w-full flex items-start md:w-full px-3">
                    <div className="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
                        <svg fill="none" className="w-5 h-5 text-gray-600 mr-1" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                    </div>
                    <div className="-mr-1">
                        <input 
                            onSubmit={handleComment}
                            type='submit' 
                            className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100" 
                            value='Post Comment'
                        />
                    </div>
                </div>
            </div>
        </form>
    );
}

const Comment = ({firstItem, avatar, Username, text, date, role, club}) => {
    const addDefaultSrc1= (ev) => {
        ev.target.src = "https://previews.123rf.com/images/triken/triken1608/triken160800029/61320775-männlich-avatar-profilbild-standard-benutzer-avatar-gast-avatar-einfach-menschlichen-kopf-vektor-ill.jpg" // this could be an imported image or url
}
    return (
        <div className='mt-2'>
            {firstItem ? null : <div className="border-gray-300 border border-b-0 my-1" />}
            {!firstItem &&
                <div className="flex flex-row ml-5 md:ml-0 mb-2">
                    <img className="w-12 h-12 border-2 border-gray-300 rounded-full" alt="Avatar"
                        src={avatar} onError={addDefaultSrc1}/>
                    <div className="flex-col mt-1">
                        <div className="flex items-center flex-1 px-4 font-bold leading-tight">
                            {Username}
                            <span className="ml-1 text-xs font-normal text-gray-500">
                                ({role} du club {club})
                            </span>
                            <span className="ml-24 text-xs font-normal text-gray-500">
                                {date}
                            </span>
                        </div>
                        <div className="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">
                            {text}
                        </div>
                    </div>
                </div>
            }
            
        </div>
    );
}