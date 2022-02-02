import React from 'react';

const RowItem = () => {
  return (
    <li className="py-3 sm:py-4">
        <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
                <img className="h-8 w-8 rounded-full" src="https://demo.themesberg.com/windster/images/users/neil-sims.png" alt="Neil image"/>
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                    Neil Sims
                </p>
                <p className="text-sm text-gray-500 truncate">
                    email@windster.com
                </p>
            </div>
        </div>
    </li>
  );
};

export default RowItem;
