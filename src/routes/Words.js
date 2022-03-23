import React from "react";
import WordCloud from "react-d3-cloud";
import data from "../data/WordCloudRunid1.json";
import { render } from "react-dom";
import ReactWordcloud from "react-wordcloud";

const Words = () => {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <div>
      {/* <ReactWordcloud words={data} /> */}
      {/* {render(
        <WordCloud
          data={data}
          width={300}
          height={300}
          fontSize={5}
          onWordClick={handleClick}
        />,
        document.getElementById("root")
      )} */}
      <WordCloud
        data={data}
        width={300}
        height={300}
        fontSize={5}
        onWordClick={handleClick}
      />
    </div>
  );
};

export default Words;
