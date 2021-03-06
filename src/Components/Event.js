import React from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import UserService from '../Services/User/UserService';
import { useState } from 'react';
import {HiLocationMarker} from 'react-icons/hi';
import {BsCalendar2DateFill} from 'react-icons/bs';
const Event = ({title, idPost, startDate, endDate, participant, participantMax, building, amphi, status, idEvent}) => {

    const [clubName, setClubName] = useState("");
    
    const [eventStatus, setEventstatus] = useState("");

    const token = UserService.getCurrentUser().accessToken;
    
    useEffect(() => {
        
        axios.get("http://localhost:8080/api/clubService/findClubByPost/" + idPost ,
            {
                headers: {
                    "Content-Type" : "multipart/form-data",
                    'Authorization': `Bearer ${token}`
                }
            }
            ).then(response => {
                setClubName(response.data.nomClub);
            })
            .catch(error => {
                console.log(error.message);
            }) 
    }, []);
    
    useEffect(() => {
        
        axios.get("http://localhost:8080/api/eventService/checkEventStatus/" + idEvent ,
            {
                headers: {
                    "Content-Type" : "multipart/form-data",
                    'Authorization': `Bearer ${token}`
                }
            }
            ).then(response => {
                setEventstatus(response.data);
                
            })
            .catch(error => {
                console.log(error.message);
            }) 
    }, []);

    return (
        
        <div className="w-auto lg:m-3 mb-2 text-gray-800 bg-white divide-y divide-gray-300 shadow-md border-2 border-gray-200">
            <div className="flex items-start px-6 py-5 backdrop-blur-sm" >
                <h2 className="mr-auto">
                    <span className="block font-sans text-2xl font-semibold text-gray-900 ">{title}</span>
                    <span className="block font-dark text-blue-800"> By : {clubName}</span>
                </h2>
            </div>
            <div className="flex px-4 py-4">
                
                <div className='mt-2 text-blue-500'>
                    <BsCalendar2DateFill size={22}></BsCalendar2DateFill>
                </div>
                <div className="text-base font-light text-gray-800">
                    <span className="ml-2 font-semibold text-black">{startDate}</span> 
                    <div className="ml-3 font-semibold text-black"> {endDate}</div>
                </div>
            </div>
            <div className="flex px-4 py-4">
                <div className='text-blue-500'>
                    <HiLocationMarker size={25}></HiLocationMarker>
                </div>
                

                <div className="text-base font-light text-gray-800">
                    <span className='ml-2 text-base'>Building</span>
                    <span className="ml-2 font-semibold text-black">{building}</span>
                </div>
                <div className="text-base font-light text-gray-800">
                    <span className='ml-4 text-base'>amphitheater </span>
                    <span className="ml-1 font-semibold text-black">{amphi}</span>
                </div>
                
            </div>
            <div className="flex px-6 py-2 font-light text-gray-600">
                <span className="font-semibold text-black">{participant}/{participantMax}</span>
                <span className='ml-4 text-base'>People are going to this event</span>
            </div>
            <div className="flex justify-center px-6 py-2 sm:justify-start">
                {eventStatus == "Pending" &&
                    <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                }
                {eventStatus == "on going" &&
                    <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                }
                {eventStatus == "Completed" &&
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                }  
                <span className="font-semibold text-black ml-4"><b> {eventStatus}</b></span>
            </div>
        </div>
    )
}


export default Event
