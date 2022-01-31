
import React from 'react';
import { useState, useEffect } from 'react';
import PostService from '../Services/Post/PostService';
import UserService from '../Services/User/UserService';

const EventForm = ({recomState, club, state}) => {

    const user = UserService.getCurrentUser();
    const [eventRequest, setEventRequest] = useState({ name: "", eventDesc: "", startDate: "", endDate: "",
     maxP: "", budgetE:"", building: "", amphi:""});

    const [requestPost, setRequestPost] = useState({desc: "", nameClub: "", userName: user.username, idUser: user.id});
    const [imagePost, setImagePost] = useState("");
    const [eventRes, setEventRes] = useState("");
     

    useEffect(() => {
        setRequestPost({...requestPost, nameClub: club})
    }, [club]);

    const handleDesc = (e) => {
        setRequestPost({... requestPost, desc: e.target.value});
        setEventRequest({... eventRequest, eventDesc: e.target.value});
    }
    const handleCreate = (e) => {
        e.preventDefault();
        
        PostService.saveEventPost(requestPost, eventRequest, imagePost, eventRes);
    }

     return (
      <div className={`lg:col-span-5 h-auto ${recomState && 'mt-20'} border-gray-200 rounded-xl border`}> 
        <div className="flex w-full">
            <div className="w-full border-gray-200 rounded-xl border p-4">
                <div className="block text-grey-darker text-lg font-bold mb-2">
                    Event Informations
                </div>
                {console.log(requestPost)}
                {console.log(eventRequest)}
                <div className="mb-4">
                    <label className="block text-grey-darker text-sm font-bold mb-2">Name of the event:</label>
                    <input className=" border rounded w-full py-2 px-3 text-grey-darker" type="text"
                        name="event_name" id="event_name" placeholder="Enter The Name of the event" onChange={e => setEventRequest({... eventRequest, name: e.target.value})}/>
                </div>
                <div className="mb-4">
                    <label className="block text-grey-darker text-sm font-bold mb-2">Event Description:</label>
                    <textarea className=" border rounded w-full py-2 px-3 text-grey-darker" rows="3"
                        name="event_desc" id="event_desc" placeholder="Enter The Club Description" onChange={handleDesc}/>
                </div>
                <div className="mb-4">
                    <label className="block text-grey-darker text-sm font-bold mb-2">Start Date:</label>
                    <input className=" border rounded w-full py-2 px-3 text-grey-darker" type="datetime-local"
                        name="start_date" id="start_date" placeholder="Enter The Start Date" onChange={e => setEventRequest({... eventRequest, startDate: e.target.value})}/>
                </div>
                <div className="mb-4">
                    <label className="block text-grey-darker text-sm font-bold mb-2">End Date:</label>
                    <input className="border rounded w-full py-2 px-3 text-grey-darker" type="datetime-local"
                        name="end_date" id="end_date" placeholder="Enter The End Date" onChange={e => setEventRequest({... eventRequest, endDate: e.target.value})}/>
                </div>
                <div className="mb-4">
                    <label className="block text-grey-darker text-sm font-bold mb-2">Max Participants:</label>
                    <input className=" border rounded w-full py-2 px-3 text-grey-darker" type="number" min={1}
                        name="max_part" id="max_part" placeholder="Enter Max number of Participants" onChange={e => setEventRequest({... eventRequest, maxP: e.target.value})}/>
                </div>
                <div className="mb-4">
                    <label className="block text-grey-darker text-sm font-bold mb-2">Estimated Budget:</label>
                    <input className=" border rounded w-full py-2 px-3 text-grey-darker" type="number" min={1}
                        name="max_part" id="max_part" placeholder="Enter Estimated Budget" onChange={e => setEventRequest({... eventRequest, budgetE: e.target.value})}/>
                </div>
                
                <div className="mb-4">
                    <div className='grid grid-cols-2 gap-3'>
                        <div>
                            <label className="block text-grey-darker text-sm font-bold mb-2">Building:</label>
                            <input className=" border rounded w-full py-2 px-3 text-grey-darker" type="number" 
                            name="max_part" id="max_part" placeholder="Enter Building number" onChange={e => setEventRequest({... eventRequest, building: e.target.value})}/>
                        </div> 
                        <div>
                            <label className="block text-grey-darker text-sm font-bold mb-2">Amphi:</label>
                            <input className=" border rounded w-full py-2 px-3 text-grey-darker" type="number"
                                name="max_part" id="max_part" placeholder="Enter Amphi number" onChange={e => setEventRequest({... eventRequest, amphi: e.target.value})}/>
                        </div>        
                    </div>       
                </div>

                <div className="mb-4">
                    <label 
                        className="w-full flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide border border-blue cursor-pointer hover:bg-blue-700 hover:text-white"
                    >
                        <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                        </svg>
                        <span className="mt-2 text-base leading-normal uppercase">Select an Image</span>
                        <input type='file' className="hidden" onChange={e => setImagePost(e.target.files[0])} />

                        {/* {eventImg === null ? <span>No file choosen</span> : <span>{eventImg.name}</span>} */}
                    </label>
                </div>
                <div className="mb-4">
                    <label 
                        className="w-full flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide border border-blue cursor-pointer hover:bg-blue-700 hover:text-white"
                    >
                        <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                        </svg>
                        <span className="mt-2 text-base leading-normal uppercase">Select excel file</span>
                        <input type='file' className="hidden" onChange={e => setEventRes(e.target.files[0])} />

                        {/* {eventImg === null ? <span>No file choosen</span> : <span>{eventImg.name}</span>} */}
                    </label>
                </div>

                <div className="mb-4">
                    <button
                        onClick={handleCreate} 
                        className="py-2 px-4 bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                    >
                        Create
                    </button>
                </div>
            </div>
        </div>
      </div>
        
  )
};

export default EventForm;
