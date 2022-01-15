import React, { Component, useContext, useEffect, useState } from 'react'
import { format } from "date-fns";
import Post from './Post'
import PostService from '../Services/Post/PostService';
import UserService from '../Services/User/UserService';



const Feed = ({recomState}) => {
    const user = UserService.getCurrentUser();
    const [post, setPost] = useState([]);

    useEffect(() => {
        PostService.getPosts().then(res => {
            setPost(res.data);
            console.log(post);
        });
    
      }, []);

    return(
        <div className={`lg:col-span-5 h-auto ${recomState && 'mt-20'}`}>
            <Post 
                key="12"
                username="Reda"
                text="“SIUUUUUUUUUUUUU.” — Cristiano Ronaldo"
                avatar="https://uifaces.co/our-content/donated/BMGfa1yq.png"
                image="https://talksport.com/wp-content/uploads/sites/5/2020/12/NINTCHDBPICT000628686290-e1610650343631.jpg?strip=all&w=960"
                likes="7"
                comments="45"
                creaAt="10:05 AM · Dec 19, 2020"
            />
            {post.map((p) => (
                        <Post
                            key={p.postId}
                            likes={p.likes}
                            text={p.description}
                            image={p.postImgURL}
                            avatar={p.imageURL}
                            username={p.userName}
                            creaAt={p.dateTime}
                            //comments
                        />
                    ))
                 }
        </div>
    )
}

export default Feed
