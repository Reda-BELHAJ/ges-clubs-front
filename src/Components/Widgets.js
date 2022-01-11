import React from 'react'
import { any } from 'prop-types';
import WidgetItem from './WidgetItem'
import { FaUser } from "react-icons/fa";
import { BsFillGearFill } from "react-icons/bs";
import { MdOutlineEvent, MdLogout } from "react-icons/md";
import { VscOrganization } from "react-icons/vsc";
import { AiFillHome } from "react-icons/ai";
import EventBus from '../Utils/EventBus';

const Widgets = ({recomState}) => {

    const onLogoutOut = () => {
        console.log("aeazeazeazeazeazea");
        EventBus.dispatch("logout", any);
    }

    return (
        <div className={`${recomState && 'mt-20'} mb-5 flex flex-col items-start justify-between w-full h-auto overflow-hidden bg-white rounded-lg shadow-xl`}>
            <div className="flex flex-row items-baseline justify-around w-full p-2 pb-0 mb-3">
                <h2 className="mr-auto text-lg font-semibold tracking-wide">
                    Menu
                </h2>
            </div>
            <div className="w-full p-4 py-0 text-gray-800 bg-gray-100 divide-y divide-gray-400">
                <div className="overflow-y-auto overflow-x-hidden flex-grow">
                    <ul className="flex flex-col py-4 space-y-1">
                        <WidgetItem
                            header="Home"
                            path="/home"
                        >
                            <AiFillHome size={20} className='inline-flex justify-center items-center ml-4'/>
                        </WidgetItem>

                        <WidgetItem
                            header="Profile"
                            path="/profile"
                        >
                            <FaUser size={20} className='inline-flex justify-center items-center ml-4'/>
                        </WidgetItem>

                        <WidgetItem
                            header="Events"
                            path="/events"
                        >
                            <MdOutlineEvent size={20} className='inline-flex justify-center items-center ml-4'/>
                        </WidgetItem>

                        <WidgetItem
                            header="Clubs"
                            path="/clubs"
                        >
                            <VscOrganization size={20} className='inline-flex justify-center items-center ml-4'/>
                        </WidgetItem>

                        <WidgetItem
                            header="Settings"
                            path="/settings"
                        >
                            <BsFillGearFill size={20} className='inline-flex justify-center items-center ml-4'/>
                        </WidgetItem>

                        <WidgetItem
                            header="Logout"
                            path="/"
                            click={onLogoutOut}    
                        >
                            <MdLogout size={20} className='inline-flex justify-center items-center ml-4'/>
                        </WidgetItem>
                    </ul>
                </div>
                
                {/* Profile */}
                {/* Events */}
                {/* Clubs */}
                {/* Settings */}
            </div>
        </div>
    )
}

export default Widgets