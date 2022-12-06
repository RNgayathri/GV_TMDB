import Link from "next/link";
import React from "react";
import Header from "../components/Header";

function Home() {
  return (
    <div>
      <Header />
      <div className="min-w-screen min-h-screen">
        <Link href="/?genre=fetchingTrending&page=1">
          <button className="bg-blue-500">Movies</button>
        </Link>
        <Link href="/tvShows">TV Shows</Link>
      </div>
      <footer className="absolute bottom-0">
        <p>© 2022 Gayathri R N</p>
      </footer>
    </div>
  );
}

export default Home;
