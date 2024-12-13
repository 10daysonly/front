"use client";

const saveToLocalStorage = (data: string) => {
  localStorage.setItem("user", JSON.stringify(data)); // 데이터를 문자열로 변환하여 저장
  console.log("데이터가 저장되었습니다.");
};
