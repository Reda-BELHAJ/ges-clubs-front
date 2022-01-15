import React, { useState } from 'react'

import ClubInfo from './StepsForm/ClubInfo';
import PresidentInfo from './StepsForm/PresidentInfo';
import VicePresident from './StepsForm/VicePresident';
import Treasurer from './StepsForm/Treasurer';
import GeneralSecretary from './StepsForm/GeneralSecretary';
import AcademicReferent from './StepsForm/AcademicReferent';


const ModalJoin2 = ({recomState}) => {

    const [page, setPage] = useState(1);

    function goNextPage() {
        if (page === 6) return;
        setPage((page) => page + 1);
    }

    function goBackPage() {
        if (page === 1) return;
        setPage((page) => page - 1);
    }

    function handleEntailmentRequest(e, num) {
        e.preventDefault();
        if (num === 1)
            goNextPage();
        else
            goBackPage();
    }

    return (
        <div className={`lg:col-span-5 h-auto ${recomState && 'mt-20'} border-gray-200 rounded-xl border`}>
            <div className="mx-auto bg-white rounded">
                <form name="student_application" id="student_application" action="">
                    <div className="py-4 px-8">
                        <div className="w-full bg-gray-200 h-5 mb-3">
                            <div className="text-xs font-medium text-blue-100 text-center p-1 leading-none bg-blue-500 h-5" style={{width: `${page/6 * 100}%`}}>{`${(page/6 * 100).toFixed(2)}%`}</div>
                        </div>

                        {page === 1 && <ClubInfo />}
                        {page === 2 && <PresidentInfo />}
                        {page === 3 && <VicePresident />}
                        {page === 4 && <Treasurer />}
                        {page === 5 && <GeneralSecretary />}
                        {page === 6 && <AcademicReferent />}

                        <div className='w-full'>
                            {page !== 6 && 
                                <div className="mb-4 inline-block w-full">
                                    <button 
                                        onClick={(e) => handleEntailmentRequest(e, 1)}
                                        className="py-2 px-4 bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 w-full focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                                    >
                                        Next
                                    </button>
                                </div>
                            }
                            {page !== 1 && 
                                <div className="mb-4 inline-block w-full">
                                    <button 
                                        onClick={(e) => handleEntailmentRequest(e, 0)}
                                        className="py-2 px-4 bg-lime-500 hover:bg-lime-700 focus:ring-lime-500 w-full focus:ring-offset-lime-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                                    >
                                        Back
                                    </button>
                                </div>
                            }
                        </div>
                        {page === 6 && (
                            <div className="mb-4">
                                <button 
                                    type="submit"
                                    className="py-2 px-4 bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                                >
                                    Submit
                                </button>
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ModalJoin2