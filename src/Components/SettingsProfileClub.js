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

const SettingsProfileClub = ({clubS}) => {
    const [nameClubFromParam, setNameClubFromParam] = useState(clubS);
   
    const [nameClub, setNameClub] = useState(null);
    const token = UserService.getCurrentUser().accessToken;
    
    const [infos, setInfos] = useState({});
    const [infosP, setInfosP] = useState({});
    const [infosV, setInfosV] = useState({});
    const [infosT, setInfosT] = useState({});
    const [infosS, setInfosS] = useState({});
    useEffect(() => {
        
        setNameClub(nameClubFromParam);

    }, [nameClubFromParam]);

    useEffect(() => {
        if(nameClub != null){
            axios.get("http://localhost:8080/api/clubService/findClubByName/" + nameClub ,
            {
                headers: {
                    "Content-Type" : "multipart/form-data",
                    'Authorization': `Bearer ${token}`
                }
            }
            ).then(response => {
                console.log("plzzzz", response.data)
                setInfos(response.data);
                
                
            })
            .catch(error => {
                console.log(error.message);
            }) 
        }

    }, [nameClub]);

    useEffect(() => {
        if(nameClub != null){
            axios.get("http://localhost:8080/api/memberService/findMemberInClub/" + nameClub + "/president" ,
            {
                headers: {
                    "Content-Type" : "multipart/form-data",
                    'Authorization': `Bearer ${token}`
                }
            }
            ).then(response => {
                setInfosP(response.data);
        
            })
            .catch(error => {
                console.log(error.message);
            }) 
        }

    }, [nameClub]);

    useEffect(() => {
        if(nameClub != null){
            axios.get("http://localhost:8080/api/memberService/findMemberInClub/" + nameClub + "/vicepresident" ,
            {
                headers: {
                    "Content-Type" : "multipart/form-data",
                    'Authorization': `Bearer ${token}`
                }
            }
            ).then(response => {
                setInfosV(response.data);
        
            })
            .catch(error => {
                console.log(error.message);
            }) 
        }

    }, [nameClub]);

    useEffect(() => {
        if(nameClub != null){
            axios.get("http://localhost:8080/api/memberService/findMemberInClub/" + nameClub + "/tresorier" ,
            {
                headers: {
                    "Content-Type" : "multipart/form-data",
                    'Authorization': `Bearer ${token}`
                }
            }
            ).then(response => {
                setInfosT(response.data);
        
            })
            .catch(error => {
                console.log(error.message);
            }) 
        }

    }, [nameClub]);

    useEffect(() => {
        if(nameClub != null){
            axios.get("http://localhost:8080/api/memberService/findMemberInClub/" + nameClub + "/secretaire" ,
            {
                headers: {
                    "Content-Type" : "multipart/form-data",
                    'Authorization': `Bearer ${token}`
                }
            }
            ).then(response => {
                setInfosS(response.data);
        
            })
            .catch(error => {
                console.log(error.message);
            }) 
        }

    }, [nameClub]);

    useEffect(() => {
        setClub({nomClub: infos.nomClub, descClub: infos.descClub})
        setPresident({ nom: infosP.nom, filiere: infosP.filiere, anneeE: infosP.anneeE, email: infosP.email, nameUser: infosP.nameUser});
        setVicePresident({ nom: infosV.nom, filiere: infosV.filiere, anneeE: infosV.anneeE, email: infosV.email, nameUser: infosV.nameUser});
        setTreasurer({ nom: infosT.nom, filiere: infosT.filiere, anneeE: infosT.anneeE, email: infosT.email, nameUser: infosT.nameUser});
        setGeneralSecretary({ nom: infosS.nom, filiere: infosS.filiere, anneeE: infosS.anneeE, email: infosS.email, nameUser: infosS.nameUser});
        //setAcademicReferent({ nom: infos.referent.nom, filiere: infos.referent.filiere, email: infos.referent.email, nameUser: infos.referent.nameUser});
        setFileC(infos.coverImg);
        setFileL(infos.log);

    }, [infos, infosP, infosS, infosT, infosV]);

    const [page, setPage] = useState(1);
    const [ClubProfiles, setClubProfiles] = useState([]);

    const [club, setClub] = useState({ nomClub: "", descClub: ""});
    const [president, setPresident] = useState({ nom: "", filiere: "", anneeE: "", email: "", nameUser: ""});
    const [vicePresident, setVicePresident] = useState({ nom: "", filiere: "", anneeE: "", email: "", nameUser: ""});
    const [treasurer, setTreasurer] = useState({ nom: "", filiere: "", anneeE: "", email: "", nameUser: ""});
    const [generalSecretary, setGeneralSecretary] = useState({ nom: "", filiere: "", anneeE: "", email: "", nameUser: ""});
    const [academicReferent, setAcademicReferent] = useState({ nom: "", filiere: "", email: "", nameUser: ""});
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
        if (nameClub != null)
            setRequestCreateClub({clubRequest: club, referentRequest: academicReferent, presidentRequest: president, vicePresidentRequest: vicePresident, tresorierRequest: treasurer, secretaireRequest: generalSecretary, nameClub: nameClub}); 
    }

      
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit");
        console.log(requestCreateClub);
        setPage(1);   // hadi wakha redirect mata7yadhach hiya lif lakhar kat update state dyal RequestCreateClub
        ClubService.updateClub(requestCreateClub);

        return <Navigate to='/profil' />     // redirect la page profil mnin y submit formulaire
    }

    return (
        <div className="lg:col-span-5 mb-5 h-auto border-gray-300 rounded-xl border">
            {console.log(fileC)}
            <div className="mx-auto">
                <form name="settings_profile" id="settings_profile" onSubmit={handleSubmit}>
                    <div className="py-4 px-8">
                        <div className="block text-grey-darker text-lg font-bold mb-2">
                            Club Settings
                        </div>

                        {page === 1 && <ClubInfo
                            getInfo={infos}
                            clubName={c => setClub({ ...club, nomClub: c})}
                            clubDesc={c => setClub({ ...club, descClub: c})}
                            logo={c => setFileL(c)}
                            cover={c => setFileC(c)}
                        />}

                        {page === 2 && <PresidentInfo
                            getInfo={infosP}
                            filiere={c => setPresident({ ...president, filiere: c})}
                            nom={c => setPresident({ ...president, nom: c})}
                            anneeE={c => setPresident({ ...president, anneeE: c})}
                            email={c => setPresident({ ...president, email: c})}
                            nameUser={c => setPresident({ ...president, nameUser: c})}
                        />}

                        {page === 3 && <VicePresident
                            getInfo={infosV}
                            filiere={c => setVicePresident({ ...vicePresident, filiere: c})}
                            nom={c => setVicePresident({ ...vicePresident, nom: c})}
                            anneeE={c => setVicePresident({ ...vicePresident, anneeE: c})}
                            email={c => setVicePresident({ ...vicePresident, email: c})}
                            nameUser={c => setPresident({ ...vicePresident, nameUser: c})}
                        />}

                        {page === 4 && <Treasurer
                            getInfo={infosT}
                            filiere={c => setTreasurer({ ...treasurer, filiere: c})}
                            nom={c => setTreasurer({ ...treasurer, nome: c})}
                            anneeE={c => setTreasurer({ ...treasurer, anneeE: c})}
                            email={c => setTreasurer({ ...treasurer, email: c})}
                            nameUser={c => setPresident({ ...treasurer, nameUser: c})}
                        />}

                        {page === 5 && <GeneralSecretary
                            getInfo={infosS}
                            filiere={c => setGeneralSecretary({ ...generalSecretary, filiere: c})}
                            nom={c => setGeneralSecretary({ ...generalSecretary, nom: c})}
                            anneeE={c => setGeneralSecretary({ ...generalSecretary, anneeE: c})}
                            email={c => setGeneralSecretary({ ...generalSecretary, email: c})}
                            nameUser={c => setPresident({ ...generalSecretary, nameUser: c})}
                        />}

                        {page === 6 && <AcademicReferent 
                            getInfo={{}} // getInfo={infos.referent}
                            filiere={c => setAcademicReferent({ ...academicReferent, filiere: c})}
                            nom={c => setAcademicReferent({ ...academicReferent, nom: c})}
                            email={c => setAcademicReferent({ ...academicReferent, email: c})}
                            nameUser={c => setPresident({ ...academicReferent, nameUser: c})}
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
                                    Update
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
