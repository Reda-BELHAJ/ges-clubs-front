import React from 'react'
import { Link } from 'react-router-dom'



const WidgetItem = ({path, header, children, click}) => {
    return (
        <Link 
            to={path}
            onClick={click}
            className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-blue-500 pr-6"
        >
            {children}

            <span className="ml-2 font-semibold text-base tracking-wide truncate">
                {header}
            </span>
        </Link>
    )
}

export default WidgetItem
