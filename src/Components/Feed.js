import React, { Component, useContext, useEffect, useState } from 'react'
import { format } from "date-fns";
import Post from './Post'
import PostService from '../Services/Post/PostService';

export default class Feed extends Component {
    state = {
        posts: [],
    };
   
    componentDidMount() {
        PostService.getPosts().then(res => {
            this.setState({posts: res.data})
            console.log(this.state.posts)
        });
    }

    render() {
        return (
            <div className='lg:col-span-5 h-auto mt-20'>
                {this.state.posts.map((p) => (
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
   
}


