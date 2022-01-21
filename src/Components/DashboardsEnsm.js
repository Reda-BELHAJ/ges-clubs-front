import React from 'react';

import UsersByAffiliation from './UsersByAffiliation';
import SmallStats from './SmallStats';

const DashboardsEnsm = () => {
    const smallStats= [
        {
          label: "Posts",
          value: "2,390",
          chartLabels: [null, null, null, null, null, null, null],
          attrs: { md: "6", sm: "6" },
          datasets: [
            {
              label: "Today",
              fill: "start",
              borderWidth: 1.5,
              backgroundColor: "rgba(0, 184, 216, 0.1)",
              borderColor: "rgb(0, 184, 216)",
              data: [1, 2, 1, 3, 5, 4, 7]
            }
          ]
        },
        {
          label: "Members",
          value: "182",
          chartLabels: [null, null, null, null, null, null, null],
          attrs: { md: "6", sm: "6" },
          datasets: [
            {
              label: "Today",
              fill: "start",
              borderWidth: 1.5,
              backgroundColor: "rgba(23,198,113,0.1)",
              borderColor: "rgb(23,198,113)",
              data: [1, 2, 3, 3, 3, 4, 4]
            }
          ]
        },
        {
          label: "Likes",
          value: "8,147",
          decrease: true,
          chartLabels: [null, null, null, null, null, null, null],
          attrs: { md: "4", sm: "6" },
          datasets: [
            {
              label: "Today",
              fill: "start",
              borderWidth: 1.5,
              backgroundColor: "rgba(255,180,0,0.1)",
              borderColor: "rgb(255,180,0)",
              data: [2, 3, 3, 3, 4, 3, 3]
            }
          ]
        }
    ]
    return (
        <div className="lg:col-span-5 mb-5 h-auto border-gray-300 rounded-xl border">
            <div className="mx-auto">
                <div className="py-4 px-8">
                        <div className="block text-grey-darker text-lg font-bold mb-2">
                            Dashboard
                        </div>
                        <div>
                            <div className='grid grid-cols-3 gap-4'>
                                {smallStats.map((stats, idx) => (
                                    <SmallStats
                                    id={`small-stats-${idx}`}
                                    variation="1"
                                    chartData={stats.datasets}
                                    chartLabels={stats.chartLabels}
                                    label={stats.label}
                                    value={stats.value}
                                  />
                                ))}
                            </div>

                            <div>
                                <div className="my-4 rounded p-2 border-blue-500 border-2">
                                    <UsersByAffiliation />
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardsEnsm;
