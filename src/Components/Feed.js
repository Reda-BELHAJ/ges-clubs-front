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
            <div className={`lg:col-span-5 h-auto ${this.props.recomState && 'mt-20'}`}>
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

                {/* For Testing */}

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
            </div>
        )
    }
   
}


