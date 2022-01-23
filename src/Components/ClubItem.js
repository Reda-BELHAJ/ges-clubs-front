import React from 'react'

import InfoIcon from '@mui/icons-material/Info';
import EmailIcon from '@mui/icons-material/Email';

const ClubItem = ({club, profileImg, coverImg, detail, email}) => {
    return (
        <div className="w-auto lg:m-3 mb-2 text-gray-800 bg-white shadow-md border-2 border-gray-200">
            <div className="h-20" style={{backgroundImage: `url(${coverImg})`}}>
                <div className="flex justify-center">
                    <img 
                        className="mt-8 object-cover w-24 h-24 mt-4 border-4 border-blue-500 rounded-full" 
                        src={profileImg}
                    />
                </div>
            </div>
            <div className="px-6 py-2">
                <div className="flex justify-center mt-10 mb-4 text-xl font-medium">{club}</div>
                <div className="flex w-full text-gray-600">
                    <InfoIcon className="h-5 mt-1 mr-2"/>
                    <span>{detail}</span>
                </div>

                <div className="flex my-1 text-gray-600">
                    <EmailIcon className="h-5 mt-1 mr-2"/>
                    <span>{email}</span>
                </div>
            </div>
            <div className="flex justify-center my-2">
                <button 
                    type="button" 
                    className="inline-flex items-center px-6 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-blue-500 rounded-md hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
                >
                    View Profile
                </button>
            </div>
        </div>
    )
}

export default ClubItem
