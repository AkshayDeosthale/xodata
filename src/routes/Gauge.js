import React from "react";
import GaugeChart from "react-gauge-chart";

const Gauge = ({ percent }) => {
  return (
    <div className="">
      <div>
        <GaugeChart id="gauge-chart1" nrOfLevels={5} percent={percent} />
      </div>
    </div>
  );
};

export default Gauge;
