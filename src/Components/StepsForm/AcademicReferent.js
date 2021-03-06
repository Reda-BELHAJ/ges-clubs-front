import React from 'react'
import { useState, useEffect } from 'react'

const AcademicReferent = (props) => {
    const [course, setCourse] = useState("");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");

    const handleChangeC =  (e) => {
        e.preventDefault();
        
        props.filiere(e.target.value);
        
    }

    const handleChangeF =  (e) => {
        e.preventDefault();
        
        props.nom(e.target.value);
        
    }

    const handleChangeE =  (e) => {
        e.preventDefault();
       
        props.email(e.target.value);
        
    }

    const handleChangeU =  (e) => {
        e.preventDefault();
        
        props.nameUser(e.target.value);
        
    }

    return (
        <div>
            {console.log(props.getInfo)}
            <div className="block text-grey-darker text-lg font-bold mb-2">
                Academic Referent Information
            </div>

            <div className="mb-4">
                <label className="block text-grey-darker text-sm font-bold mb-2">Full Name:</label>
                <input className=" border rounded w-full py-2 px-3 text-grey-darker" type="text" defaultValue={props.getInfo.nom}
                    name="student_user" id="student_user" placeholder="Full Name" onChange={handleChangeF }/>
            </div>

            <div className="mb-4">
                <label className="block text-grey-darker text-sm font-bold mb-2">Username:</label>
                <input className=" border rounded w-full py-2 px-3 text-grey-darker" type="text" defaultValue={props.getInfo.nameUser}
                    name="student_user" id="student_user" placeholder="Enter username" onChange={handleChangeU }/>
            </div>

            <div className="mb-4">
                <label className="block text-grey-darker text-sm font-bold mb-2">Course of education:</label>
                <input className=" border rounded w-full py-2 px-3 text-grey-darker" type="text" defaultValue={props.getInfo.filiere}
                    name="student_user" id="student_user" placeholder="Enter course of education" onChange={handleChangeC }/>
            </div>

            <div className="mb-4">
                <label className="block text-grey-darker text-sm font-bold mb-2">Email:</label>
                <input className=" border rounded w-full py-2 px-3 text-grey-darker" type="text" defaultValue={props.getInfo.email}
                    name="student_user" id="student_user" placeholder="Enter Email" onChange={handleChangeE }/>
            </div>
        </div>
    )
}

export default AcademicReferent
