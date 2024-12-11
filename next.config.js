module.exports = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL, // 환경 변수를 클라이언트에서 사용하도록 설정
  },
};
