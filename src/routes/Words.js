import React from "react";
import WordCloud from "react-d3-cloud";
import data from "../data/WordCloudRunid1.json";
import { render } from "react-dom";

const Words = () => {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <div>
      {render(
        <WordCloud
          data={data}
          width={300}
          height={300}
          fontSize={5}
          onWordClick={handleClick}
        />,
        document.getElementById("root")
      )}
    </div>
  );
};

export default Words;
