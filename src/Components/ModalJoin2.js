import React, { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import axios from 'axios';

import ClubInfo from './StepsForm/ClubInfo';
import PresidentInfo from './StepsForm/PresidentInfo';
import VicePresident from './StepsForm/VicePresident';
import Treasurer from './StepsForm/Treasurer';
import GeneralSecretary from './StepsForm/GeneralSecretary';
import AcademicReferent from './StepsForm/AcademicReferent';
import ClubService from '../Services/Club/ClubService';
import UserService from '../Services/User/UserService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


const ModalJoin2 = ({recomState}) => {

    const presidentClub = UserService.getCurrentUser().username;
    const [page, setPage] = useState(1);
    const [ClubProfiles, setClubProfiles] = useState({});
    let navigate = useNavigate();
    const [club, setClub] = useState({ nomClub: "", descClub: ""});
    const [president, setPresident] = useState({ nom: "", filiere: "", anneeE: "", email: "", nameUser: ""});
    const [vicePresident, setVicePresident] = useState({ nom: "", filiere: "", anneeE: "", email: "", nameUser: ""});
    const [treasurer, setTreasurer] = useState({ nom: "", filiere: "", anneeE: "", email: "", nameUser: ""});
    const [generalSecretary, setGeneralSecretary] = useState({ nom: "", filiere: "", anneeE: "", email: "", nameUser: ""});
    const [academicReferent, setAcademicReferent] = useState({ nom: "", filiere: "", email: "", nameUser: ""});
    const [fileC, setFileC] = useState(undefined);
    const [fileL, setFileL] = useState(undefined);

    const [requestCreateClub, setRequestCreateClub] = useState({ clubRequest: {}, referentRequest: {}, presidentRequest: {}, vicePresidentRequest: {}, tresorierRequest: {}, secretaireRequest: {}});

    function goNextPage() {;
        if (page === 6) return;
        setPage((page) => page + 1);
    }

    function goBackPage() {
        if (page === 1) return;
        setPage((page) => page - 1);
    }

    function handleEntailmentRequest(e, num) {
        e.preventDefault();
        if (num === 1)
            goNextPage();
        else
            goBackPage();
    }

    function setData() {
        setRequestCreateClub({clubRequest: club, referentRequest: academicReferent, presidentRequest: president, vicePresidentRequest: vicePresident, tresorierRequest: treasurer, secretaireRequest: generalSecretary}); 
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit");
        console.log(requestCreateClub)
        
        ClubService.createClub(requestCreateClub, club.nomClub, fileC, fileL);
        toast.success("Club demand have been submited !", {
            position: toast.POSITION.TOP_CENTER,
            onClose: () => {navigate("/home")},
            });
        //

        return <Navigate to='/profil' />     // redirect la page profil mnin y submit formulaire
    }

    return (
        <div className={`lg:col-span-5 h-auto ${recomState && 'mt-20'} border-gray-200 rounded-xl border`}>
            <div className="mx-auto bg-white rounded">
                <form name="student_application" id="student_application" onSubmit={handleSubmit} action="#">
                    <ToastContainer autoClose={3000} ></ToastContainer>
                    <div className="py-4 px-8">
                        <div className="w-full bg-gray-200 h-5 mb-3">
                            <div className="text-xs font-medium text-blue-100 text-center p-1 leading-none bg-blue-500 h-5" style={{width: `${page/6 * 100}%`}}>{`${(page/6 * 100).toFixed(2)}%`}</div>
                        </div>
                    
                        {page === 1 && <ClubInfo
                            getInfo={{}}
                            clubName={c => setClub({ ...club, nomClub: c})}
                            clubDesc={c => setClub({ ...club, descClub: c})}
                            logo={c => setFileL(c)}
                            cover={c => setFileC(c)}
                        />}
                        
                        {page === 2 && <PresidentInfo
                            getInfo={{}}
                            filiere={c => setPresident({ ...president, filiere: c})}
                            nom={c => setPresident({ ...president, nom: c})}
                            anneeE={c => setPresident({ ...president, anneeE: c})}
                            email={c => setPresident({ ...president, email: c})}
                            nameUser={c => setPresident({ ...president, nameUser: c})}
                        />}
                            
                        
                        {page === 3 && <VicePresident
                            getInfo={{}}
                            filiere={c => setVicePresident({ ...vicePresident, filiere: c})}
                            nom={c => setVicePresident({ ...vicePresident, nom: c})}
                            anneeE={c => setVicePresident({ ...vicePresident, anneeE: c})}
                            email={c => setVicePresident({ ...vicePresident, email: c})}
                            nameUser={c => setVicePresident({ ...vicePresident, nameUser: c})}
                        />}

                        {page === 4 && <Treasurer
                            getInfo={{}}
                            filiere={c => setTreasurer({ ...treasurer, filiere: c})}
                            nom={c => setTreasurer({ ...treasurer, nom: c})}
                            anneeE={c => setTreasurer({ ...treasurer,anneeE: c})}
                            email={c => setTreasurer({ ...treasurer, email: c})}
                            nameUser={c => setTreasurer({ ...treasurer, nameUser: c})}
                        />}

                        {page === 5 && <GeneralSecretary
                            getInfo={{}}
                            filiere={c => setGeneralSecretary({ ...generalSecretary, filiere: c})}
                            nom={c => setGeneralSecretary({ ...generalSecretary, nom: c})}
                            anneeE={c => setGeneralSecretary({ ...generalSecretary, anneeE: c})}
                            email={c => setGeneralSecretary({ ...generalSecretary, email: c})}
                            nameUser={c => setGeneralSecretary({ ...generalSecretary, nameUser: c})}
                        />}

                        {page === 6 && <AcademicReferent 
                            getInfo={{}}
                            filiere={c => setAcademicReferent({ ...academicReferent, filiere: c})}
                            nom={c => setAcademicReferent({ ...academicReferent, nom: c})}
                            email={c => setAcademicReferent({ ...academicReferent, email: c})}
                            nameUser={c => setAcademicReferent({ ...academicReferent, nameUser: c})}
                        />}

                        <div className='w-full'>
                            {page !== 6 && 
                                <div className="mb-4 inline-block w-full">
                                    <button 
                                        onClick={(e) => handleEntailmentRequest(e, 1)}
                                        className="py-2 px-4 bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 w-full focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                                    >
                                        Next
                                    </button>
                                </div>
                            }
                            {page !== 1 && 
                                <div className="mb-4 inline-block w-full">
                                    <button 
                                        onClick={(e) => handleEntailmentRequest(e, 0)}
                                        className="py-2 px-4 bg-lime-500 hover:bg-lime-700 focus:ring-lime-500 w-full focus:ring-offset-lime-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                                    >
                                        Back
                                    </button>
                                </div>
                            }
                        </div>
                        {page === 6 && (
                            <div className="mb-4">
                                <button 
                                    type="submit"
                                    className="py-2 px-4 bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                                    onClick={setData}
                                >
                                    Submit
                                </button>
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ModalJoin2