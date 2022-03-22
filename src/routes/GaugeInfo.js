import React, { useEffect, useState } from "react";

import Gauge from "./Gauge";

const GaugeInfo = ({ name, percent }) => {
  const [per, setPer] = useState(0);
  const details = name.data;

  useEffect(() => {
    Object.entries(details).forEach(([key, value], index) => {
      if (index === 0) {
        console.log(value.value);
        setPer(value.value);
      }
    });
  }, []);

  return (
    <div>
      <div className=" flex flex-col sm:justify-start items-center space-y-7 sm:mt-[28px]">
        <div>
          <Gauge percent={per} />
        </div>
        <div>
          <div className="flex justify-between flex-col space-y-1">
            {Object.entries(details).map(([key, value]) => (
              <p className="flex justify-between  space-x-5" key={key}>
                <span>{key}</span> <span>{value.value}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GaugeInfo;
