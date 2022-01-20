import React from 'react'

const Event = ({title, club}) => {
    return (
        <div className="w-auto lg:m-3 mb-2 text-gray-800 bg-white divide-y divide-gray-300 shadow-md border-2 border-gray-200">
            <div className="flex items-start px-6 py-5 backdrop-blur-sm" >
                <h2 className="mr-auto">
                    <span className="block font-sans text-2xl font-semibold text-gray-900 ">{title}</span>
                    <span className="block font-light text-gray-800">{club}</span>
                </h2>
            </div>
            <div className="flex px-6 py-4">
                <svg className="w-6 h-6 mr-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z">
                    </path>
                </svg>

                <div className="text-base font-light text-gray-800">
                    <span className="block mr-2 sm:inline-block">Oct 02, 2020</span>
                    <span className="block sm:inline-block">7:30 AM to 8:30 AM</span>
                </div>

            </div>
            <div className="flex px-6 py-2 font-light text-gray-600">
                <span className="font-semibold text-black">36</span>
                <span className='ml-4 text-base'>People are going to this event</span>
            </div>
            <div className="flex justify-center px-6 py-2 sm:justify-start">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="ml-3 text-base font-light">Accepted</span>
            </div>
        </div>
    )
}

export default Event
