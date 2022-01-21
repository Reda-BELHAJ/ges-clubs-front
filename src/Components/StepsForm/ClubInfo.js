import React from 'react'
import { useState, useEffect } from 'react'
import UserService from '../../Services/User/UserService'

const ClubInfo = (props) => {

    const username = UserService.getCurrentUser().username
    const [clubName, setClubName] = useState("");
    const [clubDesc, setClubDesc] = useState(""); 
   
    const [logo, setLogo] = useState(null)
    const [coverImg, setCoverImg] = useState(null)

    const onCoverImgChange = event => {
        setCoverImg(event.target.files[0]);
        {props.cover(coverImg)}
    };

    const onLogoChange = event => {
        setLogo(event.target.files[0]);
        {props.logo(logo)}
    };

    const handleChangeName =  (e) => {
        e.preventDefault();
        setClubName(e.target.value);
        props.clubName(clubName);
        
    };
    
    const handleChangeDesc =  (e) => {
        e.preventDefault();
        setClubDesc(e.target.value);
        props.clubDesc(clubDesc);
        
    };

    function handleEntailmentRequest(e, num) {
        e.preventDefault();
        if (num === 1){
            onCoverImgChange(e);
        }     
        else
            onLogoChange(e);
    }

    return (
        <div>
            <div className="block text-grey-darker text-lg font-bold mb-2">
                Club Information
            </div>
            <div className="mb-4">
                <label className="block text-grey-darker text-sm font-bold mb-2">Username:</label>
                <input className=" border rounded w-full py-2 px-3 text-grey-darker" type="text"
                    name="student_user" id="student_user" placeholder={username} readOnly="readonly"/>
            </div>

            <div className="mb-4">
                <label className="block text-grey-darker text-sm font-bold mb-2">Club Name:</label>
                <input className=" border rounded w-full py-2 px-3 text-grey-darker" type="text" 
                    name="student_name" id="student_name" placeholder="Enter The Club Name"
                    onChange={handleChangeName} value={clubName} />
            </div>

            <div className="mb-4">
                <label className="block text-grey-darker text-sm font-bold mb-2">Club Description:</label>
                <textarea className=" border rounded w-full py-2 px-3 text-grey-darker" rows="3"
                    name="student_name" id="student_name" placeholder="Enter The Club Description"
                    onChange={handleChangeDesc} value={clubDesc}/>
            </div>

            <div className="mb-4">
                <label 
                    className="w-full full flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide border border-blue cursor-pointer hover:bg-blue-700 hover:text-white"
                >
                    <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                    </svg>
                    <span className="mt-2 text-base leading-normal uppercase">Select a Logo</span>
                    <input type='file' className="hidden" onChange={(e) => handleEntailmentRequest(e, 2)}/>

                    {logo === null ? <span>No file choosen</span> : <span>{logo.name}</span>}
                </label>
            </div>

            <div className="mb-4">
                <label 
                    className="w-full flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide border border-blue cursor-pointer hover:bg-blue-700 hover:text-white"
                >
                    <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                    </svg>
                    <span className="mt-2 text-base leading-normal uppercase">Select a Cover Image</span>
                    <input type='file' className="hidden" onChange={(e) => handleEntailmentRequest(e, 1)}/>

                    {coverImg === null ? <span>No file choosen</span> : <span>{coverImg.name}</span>}
                </label>
            </div>
        </div>
    )
}

export default ClubInfo
