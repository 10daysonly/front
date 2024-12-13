const path = require("path");

module.exports = {
  reactStrictMode: true,
  // 기타 설정
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.(js|ts)x?$/,
      use: [
        {
          loader: path.resolve("./svg-loader.js"), // 커스텀 로더 추가
        },
      ],
    });
    return config;
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL, // 환경 변수를 클라이언트에서 사용하도록 설정
  },
  images: {
    domains: ["randomuser.me"],
    disableStaticImages: false, // 정적 이미지를 지원하도록 설정
  },
};
