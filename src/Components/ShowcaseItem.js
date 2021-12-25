import React, {useState, useEffect, useCallback} from 'react'


import {useDropzone} from 'react-dropzone';
import axios from 'axios';

const ClubProfiles = () => {
    const [ClubProfiles, setClubProfiles] = useState([]);
  
    const fetchClubProfiles = () => {
      axios.get("http://localhost:8080/api/club").then(res => {
        console.log(res);
        setClubProfiles(res.data);
      });
    }
  
    useEffect( () => {
      fetchClubProfiles();
    }, []);
  
    return ClubProfiles.map((clubProfiles, index) => {
  
      return (
        <div key={index}>
          {clubProfiles.nomClub}
          {clubProfiles.idClub ? (
            <img alt={clubProfiles.idClub} src={'http://localhost:8080/api/'+ clubProfiles.idClub +'/image/download'} ></img>
          ) : null }
          <Dropzone {...clubProfiles}></Dropzone>
        </div>
      )
    })
  };
  
  function Dropzone({ idClub }) {
    const onDrop = useCallback(acceptedFiles => {
      const file = acceptedFiles[0];
      console.log(file);
  
      const formData = new FormData();
      formData.append("file", file);
      
      axios.post(
        'http://localhost:8080/api/'+ idClub +'/image/upload', 
        formData,
        {
          headers: {
            "Content-Type" : "multipart/form-data"
          }
        }
      )
      .then(() => {
        console.log("file  uploaded successfully");
      })
      .catch(err => {
        console.log(err);
      });
      
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
  
    return (
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p>Drop the files here ...</p> :
            <button> <small> <small> <small>jUST FOR TESING : Update club logo</small></small></small>  </button>
            
        }
      </div>
    )
  }


const ShowcaseItem = ({width, height}) => {
    return (
        <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
            <ClubProfiles></ClubProfiles>
        </div>
    )
}

export default ShowcaseItem
