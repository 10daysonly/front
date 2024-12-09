"use client";

export default function CardInfo() {
  return (
    <div style={{ display: "grid", gap: "10px" }}>
      <div style={{ display: "flex" }}>
        <div>
          <small>Date</small>
          <br />
          <p>12월22일 일요일ㅤㅤ</p>
        </div>
        <div>
          <small>Time</small>
          <br />
          <p>오후 7시</p>
        </div>
      </div>
      <div>
        <small>Location</small>
        <p>No location set(장소 미정)</p>
      </div>
      <div>
        <small>Dress code</small>
        <p>크리스마스 트리</p>
      </div>
      <div>
        <small>Additional Info</small>
        <p>선물교환식은 현장에서 랜덤으로 교환하세요!</p>
      </div>
      <hr />
      <text>test</text>
      <hr />
      <small>참석예정자 수</small>
      <p>15 명</p>
    </div>
  );
}
