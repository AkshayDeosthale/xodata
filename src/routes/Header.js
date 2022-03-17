import React, { useCallback } from "react";
import { withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push("/"), [history]);
  return (
    <div className="flex bg-red-500 text-white font-bold w-screen p-3 justify-center items-between ">
      <div className="sm:w-1/2 mr-6 sm:mr-0 flex justify-center">
        <button onClick={handleOnClick}>XO DATA</button>
      </div>
      <div className="space-x-5  sm:w-1/2 flex justify-center sm:space-x-9">
        <span>
          {" "}
          <button
            onClick={handleOnClick}
            className="flex justify-center items-center"
          >
            <img src="/home.svg" alt="Home" /> Home
          </button>
        </span>
        <span>
          {" "}
          <button
            onClick={handleOnClick}
            className="flex justify-center items-center"
          >
            <img src="/plus.svg" alt="plus" />
            Add
          </button>
        </span>
        <span>
          {" "}
          <button
            onClick={handleOnClick}
            className="flex justify-center items-center"
          >
            <img src="/que.svg" alt="que" />
            About
          </button>
        </span>
      </div>
    </div>
  );
};

//export default Header;
export default withRouter(Header);
