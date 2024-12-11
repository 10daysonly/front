export default {
  reactStrictMode: true,
  // 기타 설정
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"], // SVG 파일을 컴포넌트로 가져오기
    });
    return config;
  },
};
