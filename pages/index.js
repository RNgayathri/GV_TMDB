import { useState, useEffect, useRef, use } from "react";
import Head from "next/head";
import Image from "next/image";
import requests from "../Utils/requests";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import YoutubeEmbed from "../components/YoutubeEmbed";
import InfiniteScroll from "react-infinite-scroll-component";
import { useRouter } from "next/router";

const API_KEY = process.env.API_KEY;

export default function Home(props) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [id, setID] = useState(null);
  const [popUp, setPopup] = useState(false);
  const router = useRouter();
  let type = router.query.type;

  function fetchData() {
    const url = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-us&page=1`;
    const request = fetch(url).then((res) => res.json());
    return {
      props: {
        results: request.results,
      },
    };
  }

  useEffect(() => {
    if (router.query == {} && data == []) {
      router.push(`/?type=movies&genre=fetchingTrending&page=1`);
      async () => {
        const updatedData = await fetchData();
        setData(updatedData);
      };
    } else {
      let updatedData = [];
      if (page != 1) {
        updatedData = [...data, ...props.results];
        setData(updatedData);
      } else {
        setData(props.results);
      }
    }
  }, [props.results]);
  return (
    <div>
      <div className="sticky top-0 left-0 bg-[#040a3a] z-50 pb-5">
        <Head>
          <title>GV TMDB</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="./Images/favicon.ico" />
        </Head>
        <Header
          onClickSet={() => {
            setPage(1);
          }}
        />
        <Nav
          onClickSet={() => {
            setPage(1);
          }}
          requests={requests}
        />
      </div>
      <div
        className="overflow-y-scroll max-h-screen md:max-h-screen pb-44"
        id="scrollableDiv"
      >
        <InfiniteScroll
          dataLength={data.length} //This is important field to render the next data
          next={() => {
            let genre = router.query.genre;
            let pageUrl = parseInt(router.query.page) + 1;
            let type = router.query.type;
            setPage(pageUrl);
            router.push(`/?type=${type}&genre=${genre}&page=${pageUrl}`);
          }}
          scrollableTarget="scrollableDiv"
          hasMore={true}
          scrollThreshold="100px"
          loader={<h4>Loading...</h4>}
          // refreshFunction={() => {
          //   let block = document.getElementById("scrollableDiv");
          //   block && block.scrollIntoView({ behavior: "auto", block: "start" });
          // }}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <Results
            result={data}
            type={type}
            updateId={(ID) => setID(ID)}
            popUp={(value) => setPopup(value)}
          />
        </InfiniteScroll>
      </div>
      {popUp == true && id != null && (
        <div className="justify-center items-center flex fixed top-0 left-0 w-screen h-screen z-50 backdrop-blur-xl bg-black/30">
          <YoutubeEmbed embedId={id} popUp={(value) => setPopup(value)} />
        </div>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const page = context.query.page || 1;
  const type = context.query.type || "movies";
  const url =
    type == "movies"
      ? `https://api.themoviedb.org/3${
          requests.movies[genre]?.url || requests.movies.fetchTrending.url
        }&page=${page}`
      : `https://api.themoviedb.org/3${
          requests.tvShows[genre]?.url || requests.tvShows.fetchingTopRated.url
        }&page=${page}`;
  const request = await fetch(url).then((res) => res.json());
  return {
    props: {
      results: request.results,
    },
  };
}
