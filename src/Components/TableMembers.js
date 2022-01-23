import React from 'react';

import { BsCheckLg } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";

const TableMembers = () => {
  return (
    <div className="lg:col-span-5 mb-5 h-auto border-gray-300 rounded-xl border">
        <div className="ml-3 overflow-auto lg:overflow-hidden ">
            <table className="table text-gray-400 border-separate space-y-6 text-sm">
                <thead className="text-gray-500">
                    <tr>
                        <th className="p-3">Username</th>
                        <th className="p-3 text-left">Full Name</th>
                        <th className="p-3 text-left">Status</th>
                        <th className="p-3 text-left">Date</th>
                        <th className="p-3 text-left">Affiliation</th>
                        <th className="p-3 text-left">Role</th>
                        <th className="p-3 text-left">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-blue-100">
                        <td className="p-3">
							RedaBELHAJ
						</td>
                        <td className="p-3">
                            Reda BELHAJ
						</td>
                        <td className="p-3">
                            Accepted
						</td>
                        <td className="p-3">
							1/23/2022
						</td>
                        <td className="p-3">
							Computer Sciece
						</td>
                        <td className="p-3">
							Vice President
						</td>
                        <td className="p-3">
							<a href="#" class="inline-block text-gray-400 hover:text-green-500 mr-1">
                                <BsCheckLg/>
							</a>
							<a href="#" className="inline-block text-gray-400 hover:text-red-600">
                                <AiFillDelete />
							</a>
						</td>
                    </tr>
                    <tr className="bg-blue-100">
                        <td className="p-3">
							Test Testy 2
						</td>
                        <td className="p-3">
                            Test Testy
						</td>
                        <td className="p-3">
                            Pending
						</td>
                        <td className="p-3">
							1/23/2022
						</td>
                        <td className="p-3">
							Computer Sciece
						</td>
                        <td className="p-3">
							Member
						</td>
                        <td className="p-3">
							<a href="#" class="inline-block text-gray-400 hover:text-green-500 mr-1">
                                <BsCheckLg/>
							</a>
							<a href="#" className="inline-block text-gray-400 hover:text-red-600">
                                <AiFillDelete />
							</a>
						</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  );
};

export default TableMembers;
