/** @type {import('next').NextConfig} */
module.exports = {
  env: {
    YT_API_KEY: process.env.YT_API_KEY,
  },
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org"],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination:
          "https://www.gayathri.app/?type=movies&genre=fetchingTrending&page=1",
        permanent: true,
        has: [
          {
            type: "cookie",
            key: "authorized",
            value: "false",
          },
        ],
      },
    ];
  },
};
