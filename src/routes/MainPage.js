import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import data from "../data/runidsDropdown.json";

const MainPage = () => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <div className="h-[20rem] w-screen flex items-center justify-center flex-col">
      <div className=" w-screen flex flex-col justify-center items-center relative space-y-2">
        <Dropdown toggle={handleClick} isOpen={visible}>
          <DropdownToggle caret className="font-bold ">
            Please select run ID
          </DropdownToggle>
          <DropdownMenu>
            {data.map((run, i) => (
              <DropdownItem key={i}>
                <Link to={run.value === 1 ? "/taskone" : "/tasktwo"}>
                  {run.display}
                </Link>
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
};

export default MainPage;
