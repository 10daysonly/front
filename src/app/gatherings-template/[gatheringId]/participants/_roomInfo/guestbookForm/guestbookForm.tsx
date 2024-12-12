"use client";

import { Avatar, Button, Form, Input, List, message, Skeleton } from "antd";
import { useEffect, useState } from "react";

export default function GuestbookForm() {
  const [messages, setMessages] = useState<string[]>([]);
  // const [socket, setSocket] = useState<WebSocket | null>(null);

  // useEffect(() => {
  //   // 웹소켓 서버 URL
  //   const ws = new WebSocket("wss://your-websocket-server.com");

  //   // 연결 시 이벤트
  //   ws.onopen = () => {
  //     console.log("WebSocket connected");
  //     ws.send(JSON.stringify({ type: "HELLO", message: "Hello Server!" }));
  //   };

  //   // 메시지 수신 시 이벤트
  //   ws.onmessage = (event) => {
  //     const data = JSON.parse(event.data);
  //     console.log("Message received:", data);
  //     setMessages((prev) => [...prev, data.message]);
  //   };

  //   // 연결 종료 시 이벤트
  //   ws.onclose = () => {
  //     console.log("WebSocket disconnected");
  //   };

  //   // 에러 처리
  //   ws.onerror = (error) => {
  //     console.error("WebSocket error:", error);
  //   };

  //   // 컴포넌트 unmount 시 연결 종료
  //   return () => {
  //     ws.close();
  //   };
  // }, []);

  interface DataType {
    gender?: string;
    name: {
      title?: string;
      first?: string;
      last?: string;
    };
    email?: string;
    picture: {
      large?: string;
      medium?: string;
      thumbnail?: string;
    };
    nat?: string;
    loading: boolean;
  }
  const count = 3;
  const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<DataType[]>([]);
  const [list, setList] = useState<DataType[]>([]);

  useEffect(() => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        setInitLoading(false);
        setData(res.results);
        setList(res.results);
      });
  }, []);

  const onLoadMore = () => {
    setLoading(true);
    setList(
      data.concat([...new Array(count)].map(() => ({ loading: true, name: {}, picture: {} })))
    );
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        const newData = data.concat(res.results);
        setData(newData);
        setList(newData);
        setLoading(false);
        // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
        // In real scene, you can using public method of react-virtualized:
        // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
        window.dispatchEvent(new Event("resize"));
      });
  };
  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: "center",
          marginTop: 12,
          height: 32,
          lineHeight: "32px",
        }}
      >
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    ) : null;

  //---- 등록 부분

  const [value, setValue] = useState(""); // 입력된 값 관리

  // 텍스트 박스 값 변경 핸들러
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  // 등록 버튼 클릭 시 처리
  const handleSubmit = () => {
    if (value.trim()) {
      message.success("등록 성공: " + value);
      setValue(""); // 제출 후 텍스트 박스 초기화
    } else {
      message.error("입력된 값이 없습니다.");
    }
  };
  return (
    <ul>
      {/* {messages.map((msg, idx) => (
        <li key={idx}>{msg}</li>
      ))} */}
      <Input></Input>
      <Form>
        <Form.Item label="내용">
          <Input placeholder="등록할 텍스트를 입력하세요" value={value} onChange={handleChange} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={handleSubmit} block>
            등록
          </Button>
        </Form.Item>
      </Form>
      <List
        className="demo-loadmore-list"
        loading={initLoading}
        itemLayout="horizontal"
        loadMore={loadMore}
        dataSource={list}
        renderItem={(item) => (
          <List.Item actions={[<a key="list-loadmore-edit">X</a>]}>
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                avatar={<Avatar src={item.picture.large} />}
                title={<a href="https://ant.design">{item.name?.last}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
            </Skeleton>
          </List.Item>
        )}
      />
    </ul>
  );
}
