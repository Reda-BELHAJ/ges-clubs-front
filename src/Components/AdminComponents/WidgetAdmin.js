import React from 'react';
import WidgetItem from '../WidgetItem'

import { AiFillHome } from "react-icons/ai";
import { VscOrganization } from "react-icons/vsc";
import { FaUserFriends } from "react-icons/fa";
import { BsFillGearFill } from "react-icons/bs";
import { RiDashboardFill } from "react-icons/ri";

const WidgetAdmin = ({recomState}) => {
  return (
    <div className={`${recomState && 'mt-20'} border-gray-300 rounded-xl border mb-5 flex flex-col items-start justify-between w-full h-auto overflow-hidden bg-white rounded-lg`}>
      <div className="flex flex-row items-baseline justify-around w-full p-2 pb-0 mb-3">
          <h2 className="mr-auto text-lg font-semibold tracking-wide">
              Menu
          </h2>
      </div>
      <div className="w-full p-4 py-0 text-gray-800 bg-gray-100 divide-y divide-gray-400">
        <div className="overflow-y-auto overflow-x-hidden flex-grow">
          <ul className="flex flex-col pb-4 space-y-1">
            <WidgetItem header="Dashboards" path="/home" >
              <RiDashboardFill size={20} className='inline-flex justify-center items-center ml-4'/>
            </WidgetItem>

            <WidgetItem header="Clubs" path="/clubsDash">
              <VscOrganization size={20} className='inline-flex justify-center items-center ml-4'/>
            </WidgetItem>

            <WidgetItem header="Users" path="/usersDash">
              <FaUserFriends size={20} className='inline-flex justify-center items-center ml-4'/>
            </WidgetItem>

            <WidgetItem header="Settings" path="/settings" >
              <BsFillGearFill size={20} className='inline-flex justify-center items-center ml-4'/>
            </WidgetItem>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WidgetAdmin;
