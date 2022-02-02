import React from 'react';

import RowItem from './RowItem';

const LayoutTables = () => {
  return (
      <div className='mt-2 lg:grid lg:grid-cols-2 gap-2'>
            <div className=" border-gray-300 rounded-xl border shadow mb-4 p-4 sm:p-6">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold leading-none text-gray-900">Latest Users</h3>
                    <a href="#" className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2">
                        View all
                    </a>
                </div>
                <div className="flow-root">
                    <ul role="list" className="divide-y divide-gray-200">
                        <RowItem />
                        <RowItem />
                        <RowItem />
                    </ul>
                </div>
            </div>
            <div className="border-gray-300 rounded-xl border shadow mb-4 p-4 sm:p-6">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold leading-none text-gray-900">Latest Clubs</h3>
                    <a href="#" className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2">
                        View all
                    </a>
                </div>
                <div className="flow-root">
                    <ul role="list" className="divide-y divide-gray-200">
                        <RowItem />
                        <RowItem />
                        <RowItem />
                    </ul>
                </div>
            </div>
      </div>
  );
};

export default LayoutTables;
