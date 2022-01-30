import React, {useState, useEffect, useCallback} from 'react'

import UserService from '../Services/User/UserService';
import axios from 'axios';

const ClubProfiles = () => {
    
  
    return ClubProfiles.map((clubProfiles, index) => {
        // 'http://localhost:8080/api/clubService/landing/'+ clubProfiles.idClub +'/image/downloadIcon'  ============== src={}
      return (
        <div  style={{margin: 30}} key={index}>
          {clubProfiles.nomClub}
          
        </div>
      )
    })
  };

const ShowcaseItem = ({width, height}) => {

  const [ClubProfiles, setClubProfiles] = useState([]);
  
  const fetchClubProfiles = () => {
    axios.get("http://localhost:8080/api/clubService/getClubs" , {
      
    }).then(res => {
      console.log(res);
      setClubProfiles(res.data);
    });
  }

  useEffect( () => {
    fetchClubProfiles();
  }, []);

    return (
        ClubProfiles.map((clubProfiles) => {
            // 'http://localhost:8080/api/clubService/landing/'+ clubProfiles.idClub +'/image/downloadIcon'  ============== src={}
          return (
            <div className="flex items-center justify-center py-2 grayscale col-span-2 md:col-auto" key={clubProfiles.idClub}>
              
              {clubProfiles.idClub ? (
                <img
                  style={{ tintColor: 'gray' }}
                  className="fill-current" 
                  width={width}
                  height={height}
                  alt={clubProfiles.idClub} 
                  //src={} 
                />
              ) : null }
            </div>
          )
        })
            
    )
}

export default ShowcaseItem
