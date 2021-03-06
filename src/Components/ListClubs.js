
import React from 'react'

import ClubItem from './ClubItem'
import Pagination from '@mui/material/Pagination';
import usePagination from'./Utils/Pagination';
import Select from './Select';


import { useEffect } from 'react';

import axios from 'axios';
import UserService from '../Services/User/UserService';
import { borderColor } from '@mui/system';
import { red } from '@mui/material/colors';


const filters_setOne = [
    {
      id: "1",
      label: "Sort by Name",
      value: "Sort by Name"
    },
    {
      id: "2",
      label: "Sort by Date of Creation",
      value: "Sort by Date of Creation"
    },
    {
        id: "3",
        label: "Sort by Number of Followers",
        value: "Sort by Number of Followers"
    },
]; 

const filters_setTwo = [
    {
        id: "1",
        label: "All Clubs",
        value: "All Clubs"
    },
    
    {
      id: "2",
      label: "Clubs I Own",
      value: "Clubs I Own"
    },
    {
      id: "3",
      label: "Clubs I Joined",
      value: "Clubs I Joined"
    },
    {
        id: "4",
        label: "Clubs I Follow",
        value: "Clubs I Follow"
    }
];

const filters_setThree = [
    {
      id: "1",
      label: "Ascending",
      value: "Ascending"
    },
    {
      id: "2",
      label: "Descending",
      value: "Descending"
    },
]; 

const ListClubs = (props) => {
    const [page, setPage] = React.useState(1);
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

    const temp_one = filters_setOne.find((ext) => ext.value);
    const [currentFilter_one, setCurrentFilter_one] = React.useState(temp_one);

    const temp_two = filters_setTwo.find((ext) => ext.value);
    const [currentFilter_two, setCurrentFilter_two] = React.useState(temp_two);

    const temp_three = filters_setThree.find((ext) => ext.value);
    const [currentFilter_three, setCurrentFilter_three] = React.useState(temp_three);

    function HandleFilters(e){
        e.preventDefault();
        console.log(changeData);
        props.sendData(changeData);
    }

    useEffect(() => {

        let sortType = "";
        let sortOrder = false;
            
        if (currentFilter_one.label == "Sort by Name" && currentFilter_three.label == "Ascending") {
            sortType = "nomClub";
            sortOrder = true;
        }
        if (currentFilter_one.label == "Sort by Name" && currentFilter_three.label == "Descending") {
            sortType = "nomClub";
            sortOrder = false;
        }
        if (currentFilter_one.label == "Sort by Date of Creation" && currentFilter_three.label == "Ascending") {
            sortType = "dateCre";
            sortOrder = true;
        }
        if (currentFilter_one.label == "Sort by Date of Creation" && currentFilter_three.label == "Descending") {
            sortType = "dateCre";
            sortOrder = false;
        }   
        if (currentFilter_one.label == "Sort by Number of Followers" && currentFilter_three.label == "Ascending") {
            sortType = "nbrFollowers";
            sortOrder = true;
        }
        if (currentFilter_one.label == "Sort by Number of Followers" && currentFilter_three.label == "Descending") {
            sortType = "nbrFollowers";
            sortOrder = false;
        }

        if (currentFilter_two.label == "All Clubs"){
            
            axios.get("http://localhost:8080/api/clubService/getClubs/" + sortType + "/" + sortOrder ,
            {
                headers: {
                    "Content-Type" : "multipart/form-data",
                    'Authorization': `Bearer ${token}`
                }
            }
            ).then(response => {
                const newData = response.data;
                setChangeData(newData);
            })
            .catch(error => {
                console.log(error.message);
            }) 

        }

        if (currentFilter_two.label == "Clubs I Own"){
            
            axios.get("http://localhost:8080/api/user/findClubOwned/" + username,
            {
                headers: {
                    "Content-Type" : "multipart/form-data",
                    'Authorization': `Bearer ${token}`
                }
            }
            ).then(response => {
                
                const newData = response.data;
                setChangeData(newData);
            })
            .catch(error => {
                console.log(error.message);
            }) 
        }

        if (currentFilter_two.label == "Clubs I Follow"){
            
            axios.get("http://localhost:8080/api/user/findClubFollowed/" + id + "/" + sortType + "/" + sortOrder,
            {
                headers: {
                    "Content-Type" : "multipart/form-data",
                    'Authorization': `Bearer ${token}`
                }
            }
            ).then(response => {
                
                const newData = response.data;
                setChangeData(newData);
            })
            .catch(error => {
                console.log(error.message);
            }) 
            
        }

        if (currentFilter_two.label == "Clubs I Joined"){
            
            axios.get("http://localhost:8080/api/memberService/findClubJoined/" + id + "/" + sortType + "/" + sortOrder,
            {
                headers: {
                    "Content-Type" : "multipart/form-data",
                    'Authorization': `Bearer ${token}`
                }
            }
            ).then(response => {
                
                const newData = response.data;
                setChangeData(newData);
            })
            .catch(error => {
                console.log(error.message);
            }) 
            
        }
        
    }, [currentFilter_one, currentFilter_three, currentFilter_two]);

    return (
        <div className="box-border">
            
            <div className='lg:grid lg:grid-cols-4'>
                <Select
                    options={filters_setOne}
                    selectedOption={currentFilter_one}
                    handelChange={(event) => {
                        setCurrentFilter_one(event);    
                    }}
                />
                <Select
                    options={filters_setTwo}
                    selectedOption={currentFilter_two}
                    handelChange={(event) => {
                        setCurrentFilter_two(event);
                    }}
                />
                <Select
                    options={filters_setThree}
                    selectedOption={currentFilter_three}
                    handelChange={(event) => {
                        setCurrentFilter_three(event);
                    }}
                />
                <div className='lg:m-3 lg:mr-0 mb-2 '>
                    <input className="mt-1 shadow appearance-none border rounded w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="username" type="text" placeholder="Search by name" onChange={(event) => {setSearchTerm(event.target.value)}}/>
                </div>
                
            </div>

            <div className="mb-4 lg:ml-3">
                <button 
                    className="py-2 px-4 bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                    onClick={HandleFilters}
                >
                    Apply filters
                </button>
            </div>

            <div className="lg:grid lg:grid-cols-3 mx-auto sm:flex-row ">     
               
                {_DATA && 
                    _DATA.currentData().filter((val) => {
                        if (searchTerm == "") {
                            return val;
                        } else if (val.nomClub.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val;
                        }
                    }).map(item => { 
                        return (
                            <div key={item.idClub}>
                                <ClubItem 
                                    club={item.nomClub}
                                    profileImg={'http://localhost:8080/api/clubService/landing/' + item.idClub + '/image/downloadIcon'}  // 0 ==> item.idClub
                                    coverImg={'http://localhost:8080/api/clubService/landing/' + item.idClub + '/image/downloadCover'}  // 0 ==> item.idClub 
                                    detail={item.descClub}
                                    email={item.email}
                                    followers={item.nbrFollowers}
                                    dateCre={new Date(Date.parse(item.dateCre)).toUTCString()}
                                />
                            </div>
                            
                        )
                    })
                }

                {!_DATA.currentData().length &&
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
    )
}

export default ListClubs