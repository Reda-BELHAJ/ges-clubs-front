import React from 'react'

import Event from './Event'
import Pagination from '@mui/material/Pagination';

import usePagination from'./Utils/Pagination';
import { default as data } from "./Utils/dataEvent.json"; // data ghir for test

const ListEvents = () => {
    const [page, setPage] = React.useState(1);

    const PER_PAGE = 9;
    const count = Math.ceil(data.length / PER_PAGE); 

    const _DATA = usePagination(data, PER_PAGE);

    const handleChange = (event, value) => {
        setPage(value);
        _DATA.jump(value);
    };

    return (
        <div className="box-border">
            <div className="lg:grid lg:grid-cols-3 mx-auto sm:flex-row ">
                {
                    _DATA.currentData().map(item => {
                        return (
                            <div key={item.id}>
                                <Event 
                                    title={item.title}
                                    club={item.club}
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

export default ListEvents
