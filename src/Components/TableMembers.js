import React, { useState } from 'react';

import axios from 'axios';
import UserService from '../Services/User/UserService';
import { BsCheckLg } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";

import Pagination from '@mui/material/Pagination';
import usePagination from'./Utils/Pagination';
import moment from 'moment';

const members = [
    {
        username: "RedaBELHAJ",
        fullname: "Reda BELHAJ",
        status: "Accepted",
        date: "1/23/2022",
        field: "Computer Sciece",
        role: "Vice President",
    },
    {
        username: "YassineBOUZIANE",
        fullname: "Yassine BOUZIANE",
        status: "Accepted",
        date: "1/24/2022",
        field: "Computer Sciece",
        role: "Treasurer",
    }
]

const TableMembers = (props) => {
    const [page, setPage] = React.useState(1);
    const [etat, setEtat] = React.useState(1);
    const PER_PAGE = 9;
    const username = UserService.getCurrentUser().username;
    const id = UserService.getCurrentUser().id;
    const [searchTerm, setSearchTerm] = React.useState("");

    const [changeData, setChangeData] = React.useState("");
    const token = UserService.getCurrentUser().accessToken;
    const count = Math.ceil(props.data.length / PER_PAGE);
    const _DATA = usePagination(props.data, PER_PAGE);


    const handleChange = (event, value) => {
        setPage(value);
        _DATA.jump(value);
    };


    const [data, setData] = useState(_DATA.currentData())
    const [order, setOrder] = useState("ASC")

    const [sortIcons, setSortIcons] = useState(
        {
            nameUser: "ASC",
            nom: "ASC",
            status: "ASC",
            dateCre: "ASC",
            filiere: "ASC",
        }
    )

    const sorting = (col) => {
        if (order === "ASC"){
            const sorted = [...data].sort((a, b)=>
                a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
            );
            setData(sorted)
            setOrder("DESC")
            setSortIcons({...sortIcons, [col]: "DESC"})
        } else if (order === "DESC"){
            const sorted = [...data].sort((a, b)=>
                a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
            );
            setData(sorted)
            setOrder("ASC")
            setSortIcons({...sortIcons, [col]: "ASC"})
        }
    }
    const handleEM = () => {
        setEtat(1);
        if(props.clubName != null){
            
            axios.get("http://localhost:8080/api/memberService/findAllEMembersOfClub/" + props.clubName,
            {
                headers: {
                    "Content-Type" : "multipart/form-data",
                    'Authorization': `Bearer ${token}`
                }
            }
            ).then(response => {
                props.sendData(response.data);
                setData(response.data);
            })
            .catch(error => {
                console.log(error.message);
            }) 
        }

    }

    const handleA = () => {
        setEtat(2);
        if(props.clubName != null){
            
            axios.get("http://localhost:8080/api/memberService/findAllAMembersOfClub/" + props.clubName,
            {
                headers: {
                    "Content-Type" : "multipart/form-data",
                    'Authorization': `Bearer ${token}`
                }
            }
            ).then(response => {
                props.sendData(response.data);
                setData(response.data);
            })
            .catch(error => {
                console.log(error.message);
            }) 
        }

    }

    const handleP = () => {
        setEtat(3);
        if(props.clubName != null){
            
            axios.get("http://localhost:8080/api/memberService/findAllPMembersOfClub/" + props.clubName,
            {
                headers: {
                    "Content-Type" : "multipart/form-data",
                    'Authorization': `Bearer ${token}`
                }
            }
            ).then(response => {
                props.sendData(response.data);
                setData(response.data);
            })
            .catch(error => {
                console.log(error.message);
            }) 
        }

    }

    const handleAccept = (idMembre) => {
        console.log("axios accep plz");
        axios.get("http://localhost:8080/api/memberService/acceptMembre/" + idMembre,
            {
                headers: {
                    "Content-Type" : "multipart/form-data",
                    'Authorization': `Bearer ${token}`
                }
            }
            ).then(response => {
                window.location.reload();
            })
            .catch(error => {
                console.log(error.message);
            })  
    }

    const handleDelete = (idMembre) => {
        
        axios.delete("http://localhost:8080/api/memberService/delete/" + idMembre,
            {
                headers: {
                    "Content-Type" : "multipart/form-data",
                    'Authorization': `Bearer ${token}`
                }
            }
            ).then(response => {
                window.location.reload();
            })
            .catch(error => {
                
                console.log(error.message);
            })   
    }

  return (
    <div className="lg:col-span-5 mb-5 h-auto border-gray-300 rounded-xl border">
        <div className='m-3 lg:m-5 lg:mr-5 mb-2'>
                <input className="mt-1 shadow appearance-none border rounded w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="username" type="text" placeholder="Search by name" onChange={(event) => {setSearchTerm(event.target.value)}}/>
            </div>
        <div className='m-3 mb-0 overflow-auto lg:overflow-hidden lg:grid lg:grid-cols-3 lg:gap-2'>
            <button
                onClick={handleEM} 
                className="mb-2 lg:mb-0 py-2 px-4 bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
                Executive members
            </button>
            <button 
                onClick={handleA}
                className="mb-2 lg:mb-0 py-2 px-4 bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
                Adherent Members
            </button>
            <button 
                onClick={handleP}
                className="mb-2 lg:mb-0 py-2 px-4 bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
                Pending Members
            </button>
        
        </div>
        
        <div className="ml-3 mr-3 overflow-auto lg:overflow-hidden ">
            <table className="table text-gray-400 border-separate w-full text-sm">
                <thead className="text-gray-500">
                    <tr>
                        <th className="p-1 cursor-pointer" onClick={() => sorting("nameUser")}>
                            Username {sortIcons.nameUser === "DESC" ? <>▼</>:<>▲</> }
                        </th>
                        <th className=" cursor-pointer text-left" onClick={() => sorting("nom")}>
                            Full Name {sortIcons.nom === "DESC" ? <>▼</>:<>▲</> }
                        </th>
                        <th className="p-1 cursor-pointer text-left" onClick={() => sorting("status")}>
                            Status {sortIcons.status === "DESC" ? <>▼</>:<>▲</> }
                        </th>
                        <th className="cursor-pointer text-center" onClick={() => sorting("dateCre")}>
                            Date {sortIcons.dateCre === "DESC" ? <>▼</>:<>▲</> }
                        </th>
                        <th className="p-1 cursor-pointer text-left" onClick={() => sorting("filiere")}>
                            Affiliation {sortIcons.filiere === "DESC" ? <>▼</>:<>▲</> }
                        </th>
                        <th className="p-1 cursor-pointer text-left" onClick={() => sorting("role")}>
                            Role {sortIcons.role === "DESC" ? <>▼</>:<>▲</> }
                        </th>
                        {etat != 1 && <th className=" text-left">
                            Action
                        </th>}
                        
                    </tr>
                </thead>
                <tbody>
                {console.log(data)}
                    {data &&
                        data.filter((val) => {
                            if (searchTerm == "") {
                                return val;
                            } else if (val.nameUser.toLowerCase().includes(searchTerm.toLowerCase())){
                                return val;
                            }
                        }).map(item => {
                            
                            return (
                                <tr key={item.idUser} className="bg-blue-100">
                                    <td className="p-3">
                                        {item.nameUser}
                                    </td>
                                    <td className="p-3">
                                        {item.nom}
                                    </td>
                                    <td className="p-3">
                                        {item.status ? <>Verified</>:<>Pending</> }
                                    </td>
                                    <td className="p-3">
                                        {moment(item.dateCre).format('DD/MM/YYYY')}
                                    </td>
                                    <td className="p-3">
                                        {item.filiere}
                                    </td>
                                    <td className="p-3">
                                        {item.fonctionnalites[0].name}
                                    </td>
                                    {etat != 1 && <td className="p-3">
                                        <button onClick={() => {if(!item.status)handleAccept(item.idMembre)}} className="inline-block text-gray-400 hover:text-green-500 ml-2 mr-1">
                                            <BsCheckLg />
                                        </button>
                                        <button onClick={() => {if(item.status)handleDelete(item.idMembre)}} className="inline-block text-gray-400 hover:text-red-600">
                                            <AiFillDelete  />
                                        </button>
                                    </td>}
                                    
                                    
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            {!data.length &&
                <div>
                    <br></br><br></br>
                    <b>No Data found for this set of filters  :(</b>
                </div> 
            }
        </div>
        
        <Pagination 
            className="flex my-4 justify-center" 
            page={page} 
            count={count}
            color="primary" 
            onChange={handleChange}
            size="small"
        />
    </div>
  );
};

export default TableMembers;