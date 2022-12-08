import React from "react";
import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

function Results({ result, type, updateId, popUp }) {
  // const data = (type = "movies")
  //   ? result.filter((res) => res.adult == false)
  //   : result;
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {result.map((res, i) => (
        <Thumbnail key={i} result={res} updateId={updateId} popUp={popUp} />
      ))}
    </FlipMove>
  );
}

export default Results;
