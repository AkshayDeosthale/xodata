import React, { useState } from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
    console.log("clicked", visible);
  };

  return (
    <div className="h-[20rem] w-screen flex items-center justify-center flex-col">
      <div className=" w-screen flex flex-col justify-center items-center relative space-y-2">
        <div className="font-bold">XO DATA</div>
        <button
          //   id="dropdownButton"
          //   data-dropdown-toggle="dropdown"
          onClick={handleClick}
          className="w-44 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          Please select runID{" "}
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m19 9-7 7-7-7"
            />
          </svg>
        </button>

        {visible && (
          <div
            // id="dropdown"
            className=" z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 absolute top-full"
          >
            <ul className="py-1" aria-labelledby="dropdownButton">
              <li>
                <Link
                  to="/expenses"
                  className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Run = 1
                </Link>
              </li>
              <li>
                <Link
                  to="/invoices"
                  className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Run = 2
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainPage;
