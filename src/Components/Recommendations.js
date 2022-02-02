import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import ClubToFollow from './ClubToFollow'
import UserService from '../Services/User/UserService'
import axios from 'axios'

const Recommendations = ({header, recomState}) => {

    const user = UserService.getCurrentUser();
    const token = UserService.getCurrentUser().accessToken;
    const [data, setData] = useState(undefined);

    useEffect(() => {
        if(!recomState){
            axios.get("http://localhost:8080/api/user/findClubFollowed/" + user.id + "/" + "dateCre" + "/" + "true",
            {
                headers: {
                    "Content-Type" : "multipart/form-data",
                    'Authorization': `Bearer ${token}`
                }
            }
            ).then(response => {
                
                setData(response.data);
            })
            .catch(error => {
                console.log(error.message);
            }) 
        }
        else{
            axios.get("http://localhost:8080/api/user/findClubNotFollowed/" + user.id + "/" + "dateCre" + "/" + "true",
            {
                headers: {
                    "Content-Type" : "multipart/form-data",
                    'Authorization': `Bearer ${token}`
                }
            }
            ).then(response => {
                
                setData(response.data);
            })
            .catch(error => {
                console.log(error.message);
            }) 
        }
    }, []);
    
    return (
        <div className={`flex flex-col items-start justify-between w-full h-auto mb-5 overflow-hidden bg-white rounded-lg shadow-xl`}>
            <div className="flex flex-row items-baseline justify-around w-full p-2 pb-0 mb-3">
                <h2 className="mr-auto text-lg font-semibold tracking-wide">
                    {header}
                </h2>
                <div className="flex flex-row">
                    <span className="self-center w-1 h-1 mx-2 bg-gray-500 rounded-full"></span>
                    <Link 
                        to="/clubs" 
                        className="text-xs text-blue-700 "
                    >
                        See All
                    </Link>
                </div>
            </div>
            <div className="w-full p-4 pt-0 text-gray-800 bg-gray-100 divide-y divide-gray-400">
            
            {data != undefined ? 
                <>
                
                {data.length == 0 && 
                    <div className="flex flex-row">
                        <span className="self-center w-1 h-1 mx-2 bg-gray-500 rounded-full"></span>
                        <Link 
                            to="/clubs" 
                            className="text-xs text-blue-700 "
                        >
                            No Clubs followed, See All
                        </Link>
                    </div>
                }
                {data != undefined && data.map(p => {
                    return(
                        <ClubToFollow
                            key={p.idClub} 
                            image={'http://localhost:8080/api/clubService/landing/' + 0 + '/image/downloadIcon'}  // 0 ==> item.idClub
                            alt="A"
                            path={`/profile/${p.nomClub}/0`}
                            numberMembers={p.membres.length}
                            numberFollowers={p.nbrFollowers}
                            recomState={recomState}
                            name={p.nomClub}
                        />
                    )
                            
                        })
                    }
                </>:
                <>     
                </>
            }
            
            
            </div>
        </div>
    )
}

export default Recommendations
