import React, {useState, useEffect, useCallback} from 'react'


import {useDropzone} from 'react-dropzone';
import axios from 'axios';

const ClubProfiles = () => {
    const [ClubProfiles, setClubProfiles] = useState([]);
  
    const fetchClubProfiles = () => {
      axios.get("http://localhost:8080/api/clubService/getClubs").then(res => {
        console.log(res);
        setClubProfiles(res.data);
      });
    }
  
    useEffect( () => {
      fetchClubProfiles();
    }, []);
  
    return ClubProfiles.map((clubProfiles, index) => {
  
      return (
        <div  style={{margin: 30}} key={index}>
          {clubProfiles.nomClub}
          {clubProfiles.idClub ? (
            <img alt={clubProfiles.idClub} src={'http://localhost:8080/api/clubService/landing/'+ clubProfiles.idClub +'/image/downloadIcon'} ></img>
          ) : null }
        </div>
      )
    })
  };

const ShowcaseItem = ({width, height}) => {
    return (
        <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
            <ClubProfiles></ClubProfiles>
        </div>
    )
}

export default ShowcaseItem
