import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";

import MainPage from "./MainPage";
import { useDispatch } from "react-redux";
import { setOptions } from "../features/dashboardSlice";

const TaskTwo = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleOnClick = useCallback(
    () => history.push("/dashboard"),
    [history]
  );

  const handleOnClickFlangeBlind = () => {
    dispatch(setOptions({ material: "Flange Blind", runID: 2 }));
    handleOnClick();
  };

  const handleOnClickFlange = () => {
    dispatch(setOptions({ material: "Flange", runID: 2 }));
    handleOnClick();
  };
  const handleOnClickNoProd = () => {
    dispatch(setOptions({ material: "No prod", runID: 2 }));
    handleOnClick();
  };
  return (
    <div>
      <div className="flex flex-col justify-center items-center w-screen space-y-5">
        <MainPage />

        <h1 className="font-extrabold">Task Two</h1>

        <div>
          <button
            type="button"
            className="w-52 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handleOnClickFlangeBlind}
          >
            Flange blind
          </button>
        </div>
        <div>
          <button
            type="button"
            className="w-52 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            onClick={handleOnClickFlange}
          >
            Flange
          </button>
        </div>
        <div>
          {" "}
          <button
            type="button"
            className="w-52 text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
            onClick={handleOnClickNoProd}
          >
            No prod mapped
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskTwo;
