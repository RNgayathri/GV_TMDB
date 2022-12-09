import requests from "./requests";

export async function getServerSideProps() {
  const queryParameters = new URLSearchParams(window.location.search);
  const genre = queryParameters.get("genre");
  // console.log(genre);
  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());
  return request.results;
}
