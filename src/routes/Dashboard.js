import React, { useState } from "react";
import { useSelector } from "react-redux";
import Gauge from "./Gauge";

import { withRouter } from "react-router-dom";
import GaugeData from "../data/GuageDataForFlangeRun1.json";
import GaugeInfo from "./GaugeInfo";

const Dashboard = ({ history }) => {
  const info = useSelector((state) => state.info.value);

  const [data, setData] = useState(GaugeData.data);

  return (
    <div className="w-screen flex flex-col items-center justify-center space-y-5 sm:space-y-9 ">
      {/* <button onClick={handleOnClick}>test</button> */}
      <div className="  mt-[2rem]   sm:mt-[5rem] space-y-2 sm:space-y-5">
        <div className=" font-bold text-2xl ">
          <span>Material : {info.material}</span>
        </div>
        <div className="font-bold text-2xl ">
          <span>Run ID : {info.runID}</span>
        </div>
        <div className="flex justify-between">
          <span>Number of records proccessed</span>
          <span>7</span>
        </div>
        <div className="flex justify-between">
          <span>Number of attributes proccessed</span>
          <span>0</span>
        </div>
      </div>
      <div className="w-screen">
        <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 md:p-4 lg:grid-cols-4 space-y-7 ">
          {Object.entries(data).map(([key, value]) => (
            <GaugeInfo name={value} key={key} percent={value.data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default withRouter(Dashboard);
