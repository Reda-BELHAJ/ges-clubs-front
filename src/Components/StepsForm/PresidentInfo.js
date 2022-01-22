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
        setCourseP(e.target.value);
        props.filiere(courseP);
        
    }

    const handleChangeF =  (e) => {
        e.preventDefault();
        setFullNameP(e.target.value);
        props.nom(fullNameP);
        
    }

    const handleChangeY =  (e) => {
        e.preventDefault();
        setYearP(e.target.value);
        props.anneeE(yearP);
        
    }

    const handleChangeE =  (e) => {
        e.preventDefault();
        setEmailP(e.target.value);
        props.email(emailP);
        
    }

    return (
        <div>
            <div className="block text-grey-darker text-lg font-bold mb-2">
                President Information
            </div>

            <div className="mb-4">
                <label className="block text-grey-darker text-sm font-bold mb-2">Full Name:</label>
                <input className=" border rounded w-full py-2 px-3 text-grey-darker" type="text"
                    name="student_user" id="student_user" placeholder="Enter Full Name" onChange={handleChangeF}/>
            </div>

            <div className="mb-4">
                <label className="block text-grey-darker text-sm font-bold mb-2">Username:</label>
                <input className=" border rounded w-full py-2 px-3 text-grey-darker" type="text"
                    name="student_user" id="student_user" placeholder={username} readOnly="readonly"/>
            </div>

            <div className="mb-4">
                <label className="block text-grey-darker text-sm font-bold mb-2">Course of study</label>
                <input className=" border rounded w-full py-2 px-3 text-grey-darker" type="text"
                    name="student_user" id="student_user" placeholder="Enter course of study" onChange={handleChangeC}/>
            </div>

            <div onChange={handleChangeY} className="mb-4">
                <label className="block text-grey-darker text-sm font-bold mb-2">school year</label>
                <input style={{marginLeft: 50}} type="radio" value="1" name="gender"/> 1
                <input style={{marginLeft: 50}} type="radio" value="2" name="gender"/> 2
                <input style={{marginLeft: 50}} type="radio" value="3" name="gender"/> 3
                <input style={{marginLeft: 50}} type="radio" value="4" name="gender"/> 4
                <input style={{marginLeft: 50}} type="radio" value="5" name="gender"/> 5
                <input style={{marginLeft: 50}} type="radio" value="6" name="gender"/> 6
                <input style={{marginLeft: 50}} type="radio" value="7" name="gender"/> 7
            </div>

            <div className="mb-4">
                <label className="block text-grey-darker text-sm font-bold mb-2">Email:</label>
                <input className=" border rounded w-full py-2 px-3 text-grey-darker" type="text"
                    name="student_user" id="student_user" placeholder="Enter Email" onChange={handleChangeE}/>
            </div>
        </div>
    )
}

export default PresidentInfo
