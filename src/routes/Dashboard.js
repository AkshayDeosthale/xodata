import React from "react";
import { useSelector } from "react-redux";
import Gauge from "./Gauge";

import { withRouter } from "react-router-dom";
import GaugeData from "../data/GuageDataForFlangeRun1.json";

const Dashboard = ({ history }) => {
  const info = useSelector((state) => state.info.value);

  // const handleOnClick = () => {
  //   const test =
  //     GaugeData.data["Data Conformance"].data["% of Conformance"].value;
  //   const test1 = GaugeData.data["Data Conformance"].data_seq[1];

  //   // for (const item in test1) {
  //   //   console.log(item.value);
  //   // }

  //   console.log(test);
  // };

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
          <div className=" flex flex-col sm:justify-start items-center space-y-7 sm:mt-[28px]">
            <div>
              <Gauge
                percent={
                  GaugeData.data["Data Completeness"].data["% of Completeness"]
                    .value
                }
              />
            </div>
            <div>
              <div className="flex justify-between space-x-5">
                {/* <span>% of completeness</span> <span>0.0</span>{" "} */}
                <span>% of completeness</span>{" "}
                <span>
                  {
                    GaugeData.data["Data Completeness"].data[
                      "% of Completeness"
                    ].value
                  }
                </span>{" "}
              </div>
              <div className="flex justify-between space-x-5">
                <span>No of attributes for product</span>{" "}
                <span>
                  {
                    GaugeData.data["Data Completeness"].data[
                      "Number of attributes for product"
                    ].value
                  }
                </span>{" "}
              </div>
              <div className="flex justify-between space-x-5">
                <span>No of missing attributes</span>{" "}
                <span>
                  {
                    GaugeData.data["Data Completeness"].data[
                      "Number of missing attributes"
                    ].value
                  }
                </span>{" "}
              </div>
            </div>
          </div>
          <div className=" flex flex-col sm:justify-start items-center space-y-7">
            <div>
              <Gauge
                percent={
                  GaugeData.data["Data Accuracy"].data["% of Normalized"].value
                }
              />
            </div>
            <div>
              <div className="flex justify-between space-x-5">
                <span>% of normalized</span>{" "}
                <span>
                  {
                    GaugeData.data["Data Accuracy"].data["% of Normalized"]
                      .value
                  }
                </span>{" "}
              </div>
              <div className="flex justify-between space-x-5">
                <span>No of words normalized</span>{" "}
                <span>
                  {
                    GaugeData.data["Data Accuracy"].data[
                      "Number of words normalized"
                    ].value
                  }
                </span>{" "}
              </div>
              <div className="flex justify-between space-x-5">
                <span>No of words proccessed</span>{" "}
                <span>
                  {
                    GaugeData.data["Data Accuracy"].data[
                      "Number of words processed"
                    ].value
                  }
                </span>{" "}
              </div>

              <div className="flex justify-between space-x-5">
                <span>% of correct rec</span>{" "}
                <span>
                  {
                    GaugeData.data["Data Accuracy"].data["% of Correct Rec"]
                      .value
                  }
                </span>{" "}
              </div>
              <div className="flex justify-between space-x-5">
                <span>No of correct records</span>{" "}
                <span>
                  {
                    GaugeData.data["Data Accuracy"].data[
                      "Number of correct records"
                    ].value
                  }
                </span>{" "}
              </div>
              <div className="flex justify-between space-x-5">
                <span>No of records</span>{" "}
                <span>
                  {
                    GaugeData.data["Data Accuracy"].data["Number of records"]
                      .value
                  }
                </span>{" "}
              </div>
            </div>
          </div>
          <div className=" flex flex-col justify-center items-center space-y-7 sm:justify-start">
            <div>
              <Gauge
                percent={
                  GaugeData.data["Data Uniqueness"].data["% of Uniqueness"]
                    .value
                }
              />
            </div>
            <div>
              <div className="flex justify-between space-x-5">
                <span>{GaugeData.data["Data Uniqueness"].data_seq[1]}</span>{" "}
                <span>
                  {
                    GaugeData.data["Data Uniqueness"].data["% of Uniqueness"]
                      .value
                  }
                </span>{" "}
              </div>
              <div className="flex justify-between space-x-5">
                <span>{GaugeData.data["Data Uniqueness"].data_seq[2]}</span>{" "}
                <span>
                  {
                    GaugeData.data["Data Uniqueness"].data[
                      "Number of unique records after normalization"
                    ].value
                  }
                </span>{" "}
              </div>

              <div className="flex justify-between space-x-5">
                <span>{GaugeData.data["Data Uniqueness"].data_seq[3]}</span>{" "}
                <span>
                  {
                    GaugeData.data["Data Uniqueness"].data[
                      "Number of unique records before normalization"
                    ].value
                  }
                </span>{" "}
              </div>
            </div>
          </div>
          <div className=" flex flex-col justify-center items-center space-y-7 sm:justify-start">
            <div>
              <Gauge
                percent={
                  GaugeData.data["Data Conformance"].data["% of Conformance"]
                    .value
                }
              />
            </div>
            <div>
              <div className="flex justify-between space-x-5">
                <span>{GaugeData.data["Data Conformance"].data_seq[1]}</span>{" "}
                <span>
                  {
                    GaugeData.data["Data Conformance"].data["% of Conformance"]
                      .value
                  }
                </span>{" "}
              </div>
              <div className="flex justify-between space-x-5">
                <span>{GaugeData.data["Data Conformance"].data_seq[2]}</span>{" "}
                <span>
                  {
                    GaugeData.data["Data Conformance"].data[
                      "Number of Mapped Words"
                    ].value
                  }
                </span>{" "}
              </div>
              <div className="flex justify-between space-x-5">
                <span>{GaugeData.data["Data Conformance"].data_seq[3]}</span>{" "}
                <span>
                  {
                    GaugeData.data["Data Conformance"].data[
                      "Number of not Mapped Words"
                    ].value
                  }
                </span>{" "}
              </div>
              <div className="flex justify-between space-x-5">
                <span>{GaugeData.data["Data Conformance"].data_seq[4]}</span>{" "}
                <span>
                  {
                    GaugeData.data["Data Conformance"].data["Number of Words"]
                      .value
                  }
                </span>{" "}
              </div>
              <div className="flex justify-between space-x-5">
                <span>{GaugeData.data["Data Conformance"].data_seq[5]}</span>{" "}
                <span>
                  {
                    GaugeData.data["Data Conformance"].data[
                      "Mapped ,but not Mapped to Attribute"
                    ].value
                  }
                </span>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Dashboard);
