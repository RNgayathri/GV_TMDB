/** @type {import('next').NextConfig} */
module.exports = {
  //reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org"],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/?type=movies&genre=fetchingTrending&page=1",
        permanent: false,
      },
    ];
  },
};
