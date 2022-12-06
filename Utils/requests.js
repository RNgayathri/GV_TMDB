const API_KEY = process.env.API_KEY;

export default {
  movies: {
    fetchingTrending: {
      title: "Trending",
      url: `/trending/all/week?api_key=${API_KEY}&language=en-us`,
    },
    fetchingTopRated: {
      title: "Top Rated",
      url: `/movie/top_rated?api_key=${API_KEY}&language=en-us`,
    },
    fetchingRomance: {
      title: "Romance",
      url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    },
    fetchingHorror: {
      title: "Horror",
      url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    },
    fetchingUpcoming: {
      title: "Upcoming",
      url: `/movie/upcoming?api_key=${API_KEY}&language=en-us`,
    },
    fetchingNowPlaying: {
      title: "Now Playing",
      url: `/movie/now_playing?api_key=${API_KEY}&language=en-us`,
    },
  },
  tvShows: {
    // fetchingTrendingTvShows: {
    //   title: "Latest",
    //   url: `/tv/latest?api_key=${API_KEY}&language=en-us`,
    // },
    fetchingTopRated: {
      title: "Top Rated",
      url: `/tv/top_rated?api_key=${API_KEY}&language=en-us`,
    },
    fetchingPopular: {
      title: "Popular",
      url: `/tv/popular?api_key=${API_KEY}&language=en-us`,
    },
    fetchingAiringToday: {
      title: "Airing Today",
      url: `/tv/airing_today?api_key=${API_KEY}&language=en-us`,
    },
    fetchingOnTheAir: {
      title: "On The Air",
      url: `/tv/on_the_air?api_key=${API_KEY}&language=en-us`,
    },
  },
};
