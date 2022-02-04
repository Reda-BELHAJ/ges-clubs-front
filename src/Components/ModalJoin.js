import React from 'react'

import Modal from '@mui/material/Modal';
import UserService from '../Services/User/UserService';
import { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ModalJoin = ({ handleClose, show, nomClub}) => {
    
    const [nom, setNom] = useState("");
    const [filiere, setFiliere] = useState("");
    const [anneeE, setAnneeE] = useState("");
    const [email, setEmail] = useState("");
    const [nameUser, setNameUser] = useState("");
    const [raison, setRaison] = useState("");

    const [requestCreateMember, setRequestCreateMember] = useState({ nom: "", filiere: "", anneeE: "",
    email: "", raison: "", raison: "", nomClub: ""});

    const style = {
        width: '100%',
        maxWidth: '35rem',
        maxHeight: '100%',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        p: 4,
        overflowY: 'auto'
    };

    function setData() {
        toast.success("Join Club demand has been submited !", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000});
       setRequestCreateMember({ nom: nom, filiere: filiere, anneeE: anneeE,
        email: email, nameUser: nameUser, raison: raison, nomClub: nomClub})
    }

    const handleChangeC =  (e) => {
        e.preventDefault();
        setFiliere(e.target.value);
        
    }

    const handleChangeF =  (e) => {
        e.preventDefault();
        setNom(e.target.value);
        
    }

    const handleChangeY =  (e) => {
        e.preventDefault();
        setAnneeE(e.target.value);
        
    }

    const handleChangeE =  (e) => {
        e.preventDefault();
        setEmail(e.target.value);
        
    }

    const handleChangeU =  (e) => {
        e.preventDefault();
        setNameUser(e.target.value);
        
    }

    const handleChangeR =  (e) => {
        e.preventDefault();
        setRaison(e.target.value);
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit");
        
        UserService.saveMember(requestCreateMember);
    }

    return (
        <Modal
            open={show}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div style={style} className="w-96 mx-auto bg-white rounded">

                <form name="student_application" id="student_application" action="#" onSubmit={handleSubmit}>
                    <div className="py-4 px-8">

                        <div className="mb-4">
                            <label className="block text-grey-darker text-sm font-bold mb-2">Full Name:</label>
                            <input className=" border rounded w-full py-2 px-3 text-grey-darker" type="text"
                                name="student_user" id="student_user" placeholder="Enter Full Name" onChange={handleChangeF}/>
                        </div>

                        <div className="mb-4">
                            <label className="block text-grey-darker text-sm font-bold mb-2">Username:</label>
                            <input className=" border rounded w-full py-2 px-3 text-grey-darker" type="text"
                                name="student_user" id="student_user" placeholder={"Enter username"} onChange={handleChangeU}/>
                        </div>

                        <div className="mb-4">
                            <label className="block text-grey-darker text-sm font-bold mb-2">Course of study</label>
                            <input className=" border rounded w-full py-2 px-3 text-grey-darker" type="text"
                                name="student_user" id="student_user" placeholder="Enter course of study" onChange={handleChangeC}/>
                        </div>

                        <div onChange={handleChangeY} className="mb-4">
                            <label className="block text-grey-darker text-sm font-bold mb-2">school year</label>
                            <input style={{marginLeft: 30}} type="radio" value="1" name="gender"/> 1
                            <input style={{marginLeft: 30}} type="radio" value="2" name="gender"/> 2
                            <input style={{marginLeft: 30}} type="radio" value="3" name="gender"/> 3
                            <input style={{marginLeft: 30}} type="radio" value="4" name="gender"/> 4
                            <input style={{marginLeft: 30}} type="radio" value="5" name="gender"/> 5
                            <input style={{marginLeft: 30}} type="radio" value="6" name="gender"/> 6
                            <input style={{marginLeft: 30}} type="radio" value="7" name="gender"/> 7
                        </div>

                        <div className="mb-4">
                            <label className="block text-grey-darker text-sm font-bold mb-2">Email:</label>
                            <input className=" border rounded w-full py-2 px-3 text-grey-darker" type="text"
                                name="student_user" id="student_user" placeholder="Enter Email" onChange={handleChangeE}/>
                        </div>

                        <div className="mb-4">
                            <label className="block text-grey-darker text-sm font-bold mb-2">Reason for joining the club:</label>
                            <input className=" border rounded w-full py-2 px-3 text-grey-darker" type="text"
                                name="student_reason" id="student_reason" placeholder="Why?" onChange={handleChangeR}/>
                        </div>

                        <div className="mb-4">
                            <button 
                                className="py-2 px-4 bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                                onClick={setData}
                            >
                                <ToastContainer></ToastContainer>
                                Submit
                            </button>
                        </div>
                    </div>
                </form>

            </div>
        </Modal>
    )
}

export default ModalJoin
