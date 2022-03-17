import React from "react";
import Gauge from "./Gauge";
import Header from "./Header";

const Dashboard = () => {
  return (
    <div className="w-screen flex flex-col items-center justify-center space-y-5 sm:space-y-9 ">
      <div className="  mt-[2rem]   sm:mt-[5rem] space-y-2 sm:space-y-5">
        <div className=" font-bold text-2xl ">
          <span>Material : Flange Blind</span>
        </div>
        <div className="font-bold text-2xl ">
          <span>Run ID : 1</span>
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
          <div className=" flex flex-col sm:justify-start items-center space-y-7 sm:mt-[28px]">
            <div>
              <Gauge percent={0} />
            </div>
            <div>
              <div className="flex justify-between space-x-5">
                <span>% of completeness</span> <span>0.0</span>{" "}
              </div>
              <div className="flex justify-between space-x-5">
                <span>No of attributes for product</span> <span>0.0</span>{" "}
              </div>
              <div className="flex justify-between space-x-5">
                <span>No of missing attributes</span> <span>0.0</span>{" "}
              </div>
            </div>
          </div>
          <div className=" flex flex-col sm:justify-start items-center space-y-7">
            <div>
              <Gauge percent={0.2} />
            </div>
            <div>
              <div className="flex justify-between space-x-5">
                <span>% of normalized</span> <span>20.0</span>{" "}
              </div>
              <div className="flex justify-between space-x-5">
                <span>No of words normalized</span> <span>12.0</span>{" "}
              </div>
              <div className="flex justify-between space-x-5">
                <span>No of words proccessed</span> <span>60.0</span>{" "}
              </div>
              <div className="flex justify-between space-x-5">
                <span>No of words normalized</span> <span>0.0</span>{" "}
              </div>
              <div className="flex justify-between space-x-5">
                <span>% of correct rec</span> <span>0.0</span>{" "}
              </div>
              <div className="flex justify-between space-x-5">
                <span>No of correct records</span> <span>0.0</span>{" "}
              </div>
              <div className="flex justify-between space-x-5">
                <span>No of records</span> <span>7.0</span>{" "}
              </div>
            </div>
          </div>
          <div className=" flex flex-col justify-center items-center space-y-7 sm:justify-start">
            <div>
              <Gauge percent={1} />
            </div>
            <div>
              <div className="flex justify-between space-x-5">
                <span>% of uniqeness</span> <span>100.0</span>{" "}
              </div>
              <div className="flex justify-between space-x-5">
                <span>No of uniqie records after</span> <span>7.0</span>{" "}
              </div>

              <div className="flex justify-between space-x-5">
                <span>No of uniqie records before</span> <span>7.0</span>{" "}
              </div>
            </div>
          </div>
          <div className=" flex flex-col justify-center items-center space-y-7 sm:justify-start">
            <div>
              <Gauge percent={0.87} />
            </div>
            <div>
              <div className="flex justify-between space-x-5">
                <span>No of conformance</span> <span>87.0</span>{" "}
              </div>
              <div className="flex justify-between space-x-5">
                <span>No of mapped words</span> <span>7.0</span>{" "}
              </div>
              <div className="flex justify-between space-x-5">
                <span>No of not mapped words</span> <span>7.0</span>{" "}
              </div>
              <div className="flex justify-between space-x-5">
                <span>No of words</span> <span>7.0</span>{" "}
              </div>
              <div className="flex justify-between space-x-5">
                <span>mapped,but not mapped to attribute</span> <span>7.0</span>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
