module.exports = {
  reactStrictMode: true,
  // 기타 설정
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"], // SVG 파일을 컴포넌트로 가져오기
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
