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

const SettingsProfileClub = () => {
    const [page, setPage] = useState(1);
    const [ClubProfiles, setClubProfiles] = useState([]);

    const [club, setClub] = useState({ nomClub: "", descClub: ""});
    const [president, setPresident] = useState({ nom: "", filiere: "", anneeE: "", email: "", nameUser: ""});
    const [vicePresident, setVicePresident] = useState({ fullName: "", course: "", year: "", email: "", username: ""});
    const [treasurer, setTreasurer] = useState({ fullName: "", course: "", year: "", email: "", username: ""});
    const [generalSecretary, setGeneralSecretary] = useState({ fullName: "", course: "", year: "", email: "", username: ""});
    const [academicReferent, setAcademicReferent] = useState({ fullName: "", course: "", email: "", username: ""});
    const [fileC, setFileC] = useState(undefined);
    const [fileL, setFileL] = useState(undefined);

    const [requestCreateClub, setRequestCreateClub] = useState({ clubRequest: {}, referentRequest: {}, presidentRequest: {}, vicePresidentRequest: {}, tresorierRequest: {}, secretaireRequest: {}});

    function goNextPage() {
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
        console.log(requestCreateClub);
        setPage(1);   // hadi wakha redirect mata7yadhach hiya lif lakhar kat update state dyal RequestCreateClub
        ClubService.createClub(requestCreateClub);
        ClubService.findClubByName("qsd");

        return <Navigate to='/profil' />     // redirect la page profil mnin y submit formulaire
    }

    return (
        <div className="lg:col-span-5 mb-5 h-auto border-gray-300 rounded-xl border">
            <div className="mx-auto">
                <form name="settings_profile" id="settings_profile">
                    <div className="py-4 px-8">
                        <div className="block text-grey-darker text-lg font-bold mb-2">
                            Club Settings
                        </div>

                        {page === 1 && <ClubInfo
                            clubName={c => setClub({ ...club, nomClub: c})}
                            clubDesc={c => setClub({ ...club, descClub: c})}
                            logo={c => setFileL(c)}
                            cover={c => setFileC(c)}
                        />}

                        {page === 2 && <PresidentInfo
                            filiere={c => setPresident({ ...president, filiere: c})}
                            nom={c => setPresident({ ...president, nom: c})}
                            anneeE={c => setPresident({ ...president, anneeE: c})}
                            email={c => setPresident({ ...president, email: c})}
                            nameUser={c => setPresident({ ...president, nameUser: c})}
                        />}

                        {page === 3 && <VicePresident
                            course={c => setVicePresident({ ...vicePresident, course: c})}
                            fullName={c => setVicePresident({ ...vicePresident, fullName: c})}
                            year={c => setVicePresident({ ...vicePresident, year: c})}
                            email={c => setVicePresident({ ...vicePresident, email: c})}
                            username={c => setPresident({ ...vicePresident, username: c})}
                        />}

                        {page === 4 && <Treasurer
                            course={c => setTreasurer({ ...treasurer, course: c})}
                            fullName={c => setTreasurer({ ...treasurer, fullName: c})}
                            year={c => setTreasurer({ ...treasurer, year: c})}
                            email={c => setTreasurer({ ...treasurer, email: c})}
                            username={c => setPresident({ ...treasurer, username: c})}
                        />}

                        {page === 5 && <GeneralSecretary
                            course={c => setGeneralSecretary({ ...generalSecretary, course: c})}
                            fullName={c => setGeneralSecretary({ ...generalSecretary, fullName: c})}
                            year={c => setGeneralSecretary({ ...generalSecretary, year: c})}
                            email={c => setGeneralSecretary({ ...generalSecretary, email: c})}
                            username={c => setPresident({ ...generalSecretary, username: c})}
                        />}

                        {page === 6 && <AcademicReferent 
                            course={c => setAcademicReferent({ ...academicReferent, course: c})}
                            fullName={c => setAcademicReferent({ ...academicReferent, fullName: c})}
                            email={c => setAcademicReferent({ ...academicReferent, email: c})}
                            username={c => setPresident({ ...academicReferent, username: c})}
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
    );
};

export default SettingsProfileClub;
