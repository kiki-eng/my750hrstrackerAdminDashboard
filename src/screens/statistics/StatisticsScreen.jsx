import React from 'react'
import { AreaCards, AreaCharts, AreaTable, AreaTop } from '../../components';

function StatisticsScreen () {
    return (
        <div className="content-area">
          
          <AreaCards />
          <AreaCharts />
          
        </div>
      );
    };
export default StatisticsScreen


/**import { AreaCards, AreaCharts, AreaTable, AreaTop } from "../../components";

const Dashboard = () => {
  return (
    <div className="content-area">
      <AreaTop />
      <AreaCards />
      <AreaCharts />
      <AreaTable />
    </div>
  );
};

export default Dashboard;
 */