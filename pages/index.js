import { useState, useEffect, useRef, use } from "react";
import Head from "next/head";
import Image from "next/image";
import requests from "../Utils/requests";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import InfiniteScroll from "react-infinite-scroll-component";
import { useRouter } from "next/router";

export default function Home(props) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const router = useRouter();
  let type = router.query.type;
  console.log(page);
  useEffect(() => {
    let updatedData = [];
    if (page != 1) {
      updatedData = [...data, ...props.results];
      setData(updatedData);
    } else {
      setData(props.results);
    }
  }, [props.results]);
  return (
    <div>
      <div className="sticky top-0 left-0 bg-[#040a3a] z-50 pb-5">
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="./Images/favicon.png" />
        </Head>
        <Header />
        <Nav
          onClickSet={() => {
            setPage(1);
          }}
        />
      </div>
      <div
        className="overflow-y-scroll max-h-full md:max-h-screen pb-44"
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
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <Results result={data} type={type} />
        </InfiniteScroll>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const page = context.query.page;
  const type = context.query.type;
  console.log(genre, page, type, requests);
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
