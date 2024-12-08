import { useEffect, useState } from "react";
import axios from "axios";
import "./invite-card.module.css";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/external-api"); // Next.js API Route 호출
      setData(response.data); // 응답 데이터는 response.data에 저장
    } catch (err: any) {
      console.log("error");
    }
  };

  return <div>초대장 생성{data}</div>;
}
