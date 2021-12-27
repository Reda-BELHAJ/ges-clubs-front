import React from 'react'
import { Link } from 'react-router-dom'

import ClubToFollow from './ClubToFollow'

const Recommendations = ({header, recomState}) => {
    return (
        <div className={`flex flex-col items-start justify-between w-full h-auto  mb-5 overflow-hidden bg-white rounded-lg shadow-xl`}>
            <div className="flex flex-row items-baseline justify-around w-full p-2 pb-0 mb-3">
                <h2 className="mr-auto text-lg font-semibold tracking-wide">
                    {header}
                </h2>
                <div className="flex flex-row">
                    <span className="self-center w-1 h-1 mx-2 bg-gray-500 rounded-full"></span>
                    <Link 
                        to="/clubs" 
                        className="text-xs text-blue-700 "
                    >
                        See All
                    </Link>
                </div>
            </div>
            <div className="w-full p-4 pt-0 text-gray-800 bg-gray-100 divide-y divide-gray-400">

                <ClubToFollow 
                    image="https://uifaces.co/our-content/donated/BMGfa1yq.png"
                    alt="A"
                    path="/"
                    numberMembers={34}
                    recomState={recomState}
                />

                <ClubToFollow 
                    image="https://uifaces.co/our-content/donated/BMGfa1yq.png"
                    alt="A"
                    path="/"
                    numberMembers={34}
                    recomState={recomState}
                />
                
                <ClubToFollow 
                    image="https://uifaces.co/our-content/donated/BMGfa1yq.png"
                    alt="A"
                    path="/"
                    numberMembers={34}
                    recomState={recomState}
                />

            </div>
        </div>
    )
}

export default Recommendations
