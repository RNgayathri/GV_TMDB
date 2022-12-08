import React, { forwardRef, useState } from "react";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import { PlayIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { BrowserView, MobileView } from "react-device-detect";
const API_KEY_YT = process.env.YT_API_KEY;

async function getVideo(search) {
  const request = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${API_KEY_YT}&part=snippet&maxResult=1&type=video&q=${search}`
  ).then((res) => res.json());
  return {
    props: {
      results: request.items,
    },
  };
}

const Thumbnail = forwardRef(({ result, updateId, popUp }, ref) => {
  const [id, setId] = useState(null);
  const Base_URL = "http://image.tmdb.org/t/p/w500";
  return (
    <div
      ref={ref}
      className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
      onClick={() => {
        let res = getVideo(
          `${result.title || result.original_name} trailer`
        ).then((res) => {
          if (res && res.props && res.props.results && res.props.results[0]) {
            setId(res.props.results[0].id.videoId);
            updateId(res.props.results[0].id.videoId);
            popUp(true);
          }
        });
      }}
    >
      <Image
        layout="responsive"
        placeholder="empty"
        src={`${Base_URL}${result.backdrop_path || result.poster_path}`}
        width={1000}
        height={400}
        className="max-h-64"
        alt={result.title || result.original_name}
        priority
        objectFit="contain"
      />
      <div className="p-2">
        <p className="truncate max-w-md" title={result.overview}>
          {result.overview}
        </p>
        <h2 className="text-start m-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {result.media_type && `${result.media_type}.`}{" "}
          {result.release_date || result.first_air_date}.{" "}
          <HandThumbUpIcon className="h-5 mx-2" />
          {result.vote_count}
        </p>
      </div>
      <BrowserView>
        <div className="absolute top-0 left-0 w-full h-full z-50 drop-shadow-xl opacity-0 hover:opacity-100 select-none">
          <div className="flex justify-center items-center w-full h-full">
            <div className="backdrop-blur-xl bg-black/30 rounded-full p-4 flex flex-row justify-center items-center">
              <PlayIcon className="h-8 mx-2" />
              <h2>Trailer</h2>
            </div>
          </div>
        </div>
      </BrowserView>
      <MobileView>
        <div className="absolute top-0 left-0 w-full h-full z-50 drop-shadow-xl">
          <div className="flex justify-center items-center w-full h-full">
            <div className="backdrop-blur-xl bg-black/30 rounded-full p-4 flex flex-row justify-center items-center select-none ">
              <PlayIcon className="h-8 mx-2" />
              <h2>Trailer</h2>
            </div>
          </div>
        </div>
      </MobileView>
    </div>
  );
});

Thumbnail.displayName = "Thumbnail";

export default Thumbnail;
