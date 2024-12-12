"use client";
import { Button } from "antd";
import styles from "./main.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div>로고</div>
        <br />
        <div>일산 속 만남도 특별한 즐거움으로!</div>
        <br />
        <Button
          type="primary"
          onClick={() => {
            router.push("/invite/upsert");
          }}
        >
          시작
        </Button>
      </main>
    </div>
  );
}
