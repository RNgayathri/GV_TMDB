import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function HeaderItems({ title, Icon, href, id, onClickSet }) {
  const router = useRouter();
  let type =
    Object.keys(router.query) != 0
      ? router.query.type
      : router.pathname == "/About"
      ? "about"
      : "contact";
  return (
    <Link
      href={href}
      onClick={() => {
        onClickSet && onClickSet();
        //window.scrollTo(0, 0);
        // let block = document.getElementById("scrollableDiv");
        // block && block.scrollIntoView({ behavior: "auto", block: "start" });
      }}
      className="inline-block text-center group flex-col items-center w-24 sm:w-20 hover:text-white"
    >
      <div>
        <Icon
          key={id}
          className="h-6 mb-1 group-hover:animate-bounce inline-block w-full"
          style={{
            height: id == type ? "30px" : "24px",
            color: id == type ? "#fff" : "#e5e7eb",
          }}
        />
        <p
          className="tracking-widest opacity-0 group-hover:opacity-100 w-full text-center"
          style={{
            color: id == type ? "#fff" : "#e5e7eb",
          }}
        >
          {id != type && title}
        </p>
        <p
          className="tracking-widest w-full text-center"
          style={{
            color: id == type ? "#fff" : "#e5e7eb",
          }}
        >
          {id == type && title}
        </p>
      </div>
    </Link>
  );
}

export default HeaderItems;
