import React from 'react'
import { useState } from 'react'

const VicePresident = (props) => {
    const [course, setCourse] = useState("");
    const [fullName, setFullName] = useState("");
    const [year, setYear] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");

    const handleChangeC =  (e) => {
        setCourse(e.target.value);
        props.course(course);
        
    }

    const handleChangeF =  (e) => {
        setFullName(e.target.value);
        props.fullName(fullName);
        
    }

    const handleChangeY =  (e) => {
        setYear(e.target.value);
        props.year(year);
        
    }

    const handleChangeE =  (e) => {
        setEmail(e.target.value);
        props.email(email);
        
    }

    const handleChangeU =  (e) => {
        setUsername(e.target.value);
        props.username(username);
        
    }

    return (
        <div>
            <div className="block text-grey-darker text-lg font-bold mb-2">
                VicePresident Information
            </div>

            <div className="mb-4">
                <label className="block text-grey-darker text-sm font-bold mb-2">Full Name:</label>
                <input className=" border rounded w-full py-2 px-3 text-grey-darker" type="text"
                    name="student_user" id="student_user" placeholder="Enter Full Name" onChange={handleChangeF}/>
            </div>

            <div className="mb-4">
                <label className="block text-grey-darker text-sm font-bold mb-2">Username:</label>
                <input className=" border rounded w-full py-2 px-3 text-grey-darker" type="text"
                    name="student_user" id="student_user" placeholder="Enter username" onChange={handleChangeU}/>
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

export default VicePresident