import React from 'react'
import { useState, useEffect } from 'react'

const AcademicReferent = (props) => {
    const [course, setCourse] = useState("");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");

    const handleChangeC =  (e) => {
        e.preventDefault();
        setCourse(e.target.value);
        props.filiere(course);
        
    }

    const handleChangeF =  (e) => {
        e.preventDefault();
        setFullName(e.target.value);
        props.nom(fullName);
        
    }

    const handleChangeE =  (e) => {
        e.preventDefault();
        setEmail(e.target.value);
        props.email(email);
        
    }

    const handleChangeU =  (e) => {
        e.preventDefault();
        setUsername(e.target.value);
        props.nameUser(username);
        
    }

    return (
        <div>
            <div className="block text-grey-darker text-lg font-bold mb-2">
                Academic Referent Information
            </div>

            <div className="mb-4">
                <label className="block text-grey-darker text-sm font-bold mb-2">Full Name:</label>
                <input className=" border rounded w-full py-2 px-3 text-grey-darker" type="text"
                    name="student_user" id="student_user" placeholder="Full Name" onChange={handleChangeF }/>
            </div>

            <div className="mb-4">
                <label className="block text-grey-darker text-sm font-bold mb-2">Username:</label>
                <input className=" border rounded w-full py-2 px-3 text-grey-darker" type="text"
                    name="student_user" id="student_user" placeholder="Enter username" onChange={handleChangeU }/>
            </div>

            <div className="mb-4">
                <label className="block text-grey-darker text-sm font-bold mb-2">Course of education:</label>
                <input className=" border rounded w-full py-2 px-3 text-grey-darker" type="text"
                    name="student_user" id="student_user" placeholder="Enter course of education" onChange={handleChangeC }/>
            </div>

            <div className="mb-4">
                <label className="block text-grey-darker text-sm font-bold mb-2">Email:</label>
                <input className=" border rounded w-full py-2 px-3 text-grey-darker" type="text"
                    name="student_user" id="student_user" placeholder="Enter Email" onChange={handleChangeE }/>
            </div>
        </div>
    )
}

export default AcademicReferent
