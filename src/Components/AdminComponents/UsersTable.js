import React, { useState } from 'react';

import { BsCheckLg } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";

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

const UsersTable = () => {
    const [data, setData] = useState(members)
    const [order, setOrder] = useState("ASC")

    const [sortIcons, setSortIcons] = useState(
        {
            username: "ASC",
            fullname: "ASC",
            status: "ASC",
            date: "ASC",
            field: "ASC",
            role: "ASC",
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
  return (
    <div className="lg:col-span-5 mb-5 h-auto border-gray-300 rounded-xl border">
        <div className='m-3 mb-0 overflow-auto lg:overflow-hidden lg:grid lg:grid-cols-3 lg:gap-2'>
            <button 
                className="mb-2 lg:mb-0 py-2 px-4 bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
                Executive members
            </button>
            <button 
                className="mb-2 lg:mb-0 py-2 px-4 bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
                Adherent Members
            </button>
            <button 
                className="mb-2 lg:mb-0 py-2 px-4 bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
                Pending Members
            </button>

        </div>
        
        <div className="ml-3 mr-3 overflow-auto lg:overflow-hidden ">
            <table className="table text-gray-400 border-separate w-full text-sm">
                <thead className="text-gray-500">
                    <tr>
                        <th className="p-3 cursor-pointer" onClick={() => sorting("username")}>
                            Username {sortIcons.username === "DESC" ? <>▼</>:<>▲</> }
                        </th>
                        <th className="p-3 cursor-pointer text-left" onClick={() => sorting("fullname")}>
                            Full Name {sortIcons.fullname === "DESC" ? <>▼</>:<>▲</> }
                        </th>
                        <th className="p-3 cursor-pointer text-left" onClick={() => sorting("status")}>
                            Status {sortIcons.status === "DESC" ? <>▼</>:<>▲</> }
                        </th>
                        <th className="p-3 cursor-pointer text-left" onClick={() => sorting("date")}>
                            Date {sortIcons.date === "DESC" ? <>▼</>:<>▲</> }
                        </th>
                        <th className="p-3 cursor-pointer text-left" onClick={() => sorting("field")}>
                            Affiliation {sortIcons.field === "DESC" ? <>▼</>:<>▲</> }
                        </th>
                        <th className="p-3 cursor-pointer text-left" onClick={() => sorting("role")}>
                            Role {sortIcons.role === "DESC" ? <>▼</>:<>▲</> }
                        </th>
                        <th className="p-3 text-left">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(item => {
                            return (
                                <tr key={item.username} className="bg-blue-100">
                                    <td className="p-3">
                                        {item.username}
                                    </td>
                                    <td className="p-3">
                                        {item.fullname}
                                    </td>
                                    <td className="p-3">
                                        {item.status}
                                    </td>
                                    <td className="p-3">
                                        {item.date}
                                    </td>
                                    <td className="p-3">
                                        {item.field}
                                    </td>
                                    <td className="p-3">
                                        {item.role}
                                    </td>
                                    <td className="p-3">
                                        <a href="#" className="inline-block text-gray-400 hover:text-green-500 ml-2 mr-1">
                                            <BsCheckLg/>
                                        </a>
                                        <a href="#" className="inline-block text-gray-400 hover:text-red-600">
                                            <AiFillDelete />
                                        </a>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  );
};

export default UsersTable;