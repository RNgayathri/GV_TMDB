import React, { forwardRef } from "react";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const Thumbnail = forwardRef(({ result }, ref) => {
  const Base_URL = "http://image.tmdb.org/t/p/w500";
  return (
    <div
      ref={ref}
      className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
    >
      <Image
        layout="responsive"
        placeholder="empty"
        src={`${Base_URL}${result.backdrop_path || result.poster_path}`}
        width={1000}
        height={400}
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
    </div>
  );
});

Thumbnail.displayName = "Thumbnail";

export default Thumbnail;
