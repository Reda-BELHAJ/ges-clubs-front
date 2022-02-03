import React from 'react'
import { useState, useEffect } from 'react'
import UserService from '../../Services/User/UserService'

const PresidentInfo = (props) => {

    const username = UserService.getCurrentUser().username
    const [courseP, setCourseP] = useState("");
    const [fullNameP, setFullNameP] = useState("");
    const [yearP, setYearP] = useState("");
    const [emailP, setEmailP] = useState("");

    useEffect(() => {
        props.nameUser(username);
    }, []);
    

    const handleChangeC =  (e) => {
        e.preventDefault();
        
        props.filiere(e.target.value);
        
    }

    const handleChangeF =  (e) => {
        e.preventDefault();
        
        props.nom(e.target.value);
        
    }

    const handleChangeY =  (e) => {
        e.preventDefault();
        
        props.anneeE(e.target.value);
        
    }

    const handleChangeE =  (e) => {
        e.preventDefault();
        
        props.email(e.target.value);
        
    }

    return (
        <div>
            <div className="block text-grey-darker text-lg font-bold mb-2">
                President Information
            </div>
            
            <div className="mb-4">
                <label className="block text-grey-darker text-sm font-bold mb-2">Full Name:</label>
                <input className=" border rounded w-full py-2 px-3 text-grey-darker" type="text" value={props.getInfo.nom}
                    name="student_user" id="student_user" placeholder="Enter Full Name" onChange={handleChangeF}/>
            </div>

            <div className="mb-4">
                <label className="block text-grey-darker text-sm font-bold mb-2">Username:</label>
                <input className=" border rounded w-full py-2 px-3 text-grey-darker" type="text" 
                    name="student_user" id="student_user" placeholder={username} readOnly="readonly"/>
            </div>

            <div className="mb-4">
                <label className="block text-grey-darker text-sm font-bold mb-2">Course of study</label> 
                <input className=" border rounded w-full py-2 px-3 text-grey-darker" type="text" value={props.getInfo.filiere}
                    name="student_user" id="student_user" placeholder="Enter course of study" onChange={handleChangeC}/>
            </div>
            {console.log(props.getInfo.anneeE)}
            <div onChange={handleChangeY} className="mb-4">
                <label className="block text-grey-darker text-sm font-bold mb-2">school year</label>
                <input style={{marginLeft: 50}} type="radio" value="1" checked={props.getInfo.anneeE === 1} name="gender"/> 1
                <input style={{marginLeft: 50}} type="radio" value="2" checked={props.getInfo.anneeE === 2} name="gender"/> 2
                <input style={{marginLeft: 50}} type="radio" value="3" checked={props.getInfo.anneeE === 3} name="gender"/> 3
                <input style={{marginLeft: 50}} type="radio" value="4" checked={props.getInfo.anneeE === 4} name="gender"/> 4
                <input style={{marginLeft: 50}} type="radio" value="5" checked={props.getInfo.anneeE === 5} name="gender"/> 5
                <input style={{marginLeft: 50}} type="radio" value="6" checked={props.getInfo.anneeE === 6} name="gender"/> 6
                <input style={{marginLeft: 50}} type="radio" value="7" checked={props.getInfo.anneeE === 7} name="gender"/> 7
            </div>

            <div className="mb-4">
                <label className="block text-grey-darker text-sm font-bold mb-2">Email:</label>
                <input className=" border rounded w-full py-2 px-3 text-grey-darker" type="text" value={props.getInfo.email}
                    name="student_user" id="student_user" placeholder="Enter Email" onChange={handleChangeE}/>
            </div>
        </div>
    )
}

export default PresidentInfo
