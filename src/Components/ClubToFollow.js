import React from 'react'
import { Link } from 'react-router-dom'

const ClubToFollow = ({image, alt, path, numberMembers, numberFollowers, recomState, name}) => {
    const addDefaultSrc1= (ev) => {
        ev.target.src = "https://previews.123rf.com/images/triken/triken1608/triken160800029/61320775-männlich-avatar-profilbild-standard-benutzer-avatar-gast-avatar-einfach-menschlichen-kopf-vektor-ill.jpg" // this could be an imported image or url
    }
    return (
        <div className="flex flex-row gap-1 items-center justify-between py-4">
            <img 
                src={image}
                alt={alt}
                className="w-12 h-12 rounded-full "
                onError={addDefaultSrc1} 
            />

            <div className="text-sm ">
                <span className="block font-semibold">{name} </span>
                <span className="block text-xs font-light text-gray-700 overflow-hidden truncate">{numberMembers} members</span>

            </div>
            

            <Link 
                to={path}
                className={`
                            self-start block px-2 py-px mt-1 text-xs font-semibold tracking-wide uppercase border border-gray-400 rounded-full  
                            ${!recomState && 'bg-blue-500 text-white border-transparent hover:bg-white hover:text-black hover:border-gray-400'} 
                            ${recomState && 'hover:bg-blue-500 hover:text-white hover:border-transparent'}
                          `}
            >
                {recomState ? "follow": "followed"}
            </Link>
        </div>
    )
}

export default ClubToFollow
