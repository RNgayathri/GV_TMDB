import React from "react";
import reactImg from "../Images/subheading.gif";
import Image from "next/image";
import HeaderItems from "./HeaderItems";
import {
  HomeIcon,
  InformationCircleIcon,
  PhoneIcon,
  CameraIcon,
  ChartPieIcon,
  FilmIcon,
  TvIcon,
} from "@heroicons/react/24/outline";
import { GlobeAltIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  let type = router.query.type;
  return (
    <div>
      <header className="flex flex-col items-center sm:flex-row m-5 justify-between h-auto">
        <Image
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            backgroundBlendMode: "hard-light",
          }}
          alt="Logo"
          className="object-contain inline-block"
          src={reactImg}
          width={200}
          height={100}
        />
        <div className="flex justify-evenly max-w-2xl">
          <HeaderItems
            title="Movies"
            Icon={FilmIcon}
            id="movies"
            href="/?type=movies&genre=fetchingTrending&page=1"
          />
          <HeaderItems
            title="TV"
            id="tvShows"
            Icon={TvIcon}
            href="/?type=tvShows&genre=fetchingTopRated&page=1"
          />
          <HeaderItems
            title="About"
            id="about"
            Icon={InformationCircleIcon}
            href="/About"
          />
          <HeaderItems
            title="Contact"
            id="contact"
            Icon={PhoneIcon}
            href="/Contact"
          />
        </div>
      </header>
      {/* <div>
        {type == "movies" ? "MOVIES" : (type = "tvShows" ? "TV Shows" : "")}
      </div> */}
    </div>
  );
}

export default Header;
