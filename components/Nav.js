import React from "react";
import requests from "../Utils/requests";
import { useRouter } from "next/router";

function Nav(props) {
  const router = useRouter();
  let genre = router.query.genre;
  let type = router.query.type;
  return (
    <nav className="relative">
      <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        {requests &&
          requests[type] != undefined &&
          Object.entries(requests[type]).length != 0 &&
          Object.entries(requests[type]).map(([key, { title, url }]) => (
            <h2
              key={key}
              onClick={() => {
                router.push(`/?type=${type}&genre=${key}&page=1`);
                props.onClickSet();
              }}
              style={{
                fontWeight: genre == key ? "bold" : "normal",
                color: genre == key ? "#fff" : "#e5e7eb",
                fontSize: genre == key ? "28px" : "inherit",
                height: "auto",
                //transform: genre == key ? "scale(1.25)" : "inherit",
              }}
              className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:scale-125 last:pr-24"
            >
              {title}
            </h2>
          ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from bg-[#040a3a] h-8 sm:w-1/12"></div>
    </nav>
  );
}

export default Nav;
