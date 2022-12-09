import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { BrowserView, MobileView } from "react-device-detect";

const YoutubeEmbed = ({ embedId, popUp }) => (
  <div className="z-50 inline-block bg-transparent sm:grid">
    <div className="flex items-end justify-end p-4">
      <button
        type="button"
        className="btn-close box-content w-4 h-4 p-1 float-right mb-4"
        data-bs-dismiss="modal"
        aria-label="Close"
        onClick={() => popUp(false)}
      >
        <XMarkIcon className="h-6 m-3 text-white" />
      </button>
    </div>
    <BrowserView>
      <iframe
        width="935"
        height="480"
        className="min-w-l md:max-w-4xl"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </BrowserView>
    <MobileView>
      <iframe
        width="935"
        height="480"
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </MobileView>
  </div>
);

export default YoutubeEmbed;
