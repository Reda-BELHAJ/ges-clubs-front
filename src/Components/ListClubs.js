
import React from 'react'

import ClubItem from './ClubItem'
import Pagination from '@mui/material/Pagination';

import usePagination from'./Utils/Pagination';

const ListClubs = (data) => {
    const [page, setPage] = React.useState(1);
    
    const PER_PAGE = 9;
    const count = Math.ceil(data.data.length / PER_PAGE); 

    const _DATA = usePagination(data.data, PER_PAGE);

    const handleChange = (event, value) => {
        setPage(value);
        _DATA.jump(value);
    };

    return (
        <div className="box-border">
            <div className="lg:grid lg:grid-cols-3 mx-auto sm:flex-row ">
                <h1><b>Club you own</b></h1>
                <ClubItem
                    club={"still working on it"}
                    profileImg={"still working on it"}
                    coverImg={"still working on it"}
                    detail={"still working on it"}
                    email={"still working on it"}
                />
                <br></br><br></br><br></br><br></br> <br></br>      
                  
                <h1 ><b>Alls Clubs</b></h1>       
                {
                    _DATA.currentData().map(item => {
                        return (
                            <div key={item.idClub}>
                                <ClubItem 
                                    club={item.nomClub}
                                    profileImg={'http://localhost:8080/api/clubService/landing/' + item.idClub + '/image/downloadIcon'}
                                    coverImg={'http://localhost:8080/api/clubService/landing/' + item.idClub + '/image/downloadCover'}
                                    detail={item.descClub}
                                    email={item.email}
                                />
                            </div>
                            
                        )
                    })
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