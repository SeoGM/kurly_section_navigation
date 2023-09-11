import React, { createRef, useState } from "react";
import "./global.css";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import Section from "./components/Section";

const sections = [
  {
    id: "event1",
    title: "페스타딜"
  },
  {
    id: "event2",
    title: "브랜드관"
  },
  {
    id: "event3",
    title: "인기 상품"
  }
];

export default function App() {
  return (
    <>
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "56px",
          background: "#f2f2f2"
        }}
      >
        <h1>Logo</h1>
        <div>GNB</div>
      </div>
      <Main image="" alt="메인이미지" />

      <Navigation items={sections} bgColor="#5b3f37" />

      {sections.map((section) => (
        <Section key={section.id} data={section} />
      ))}
      <div style={{ height: "556px" }}>FOOTER</div>
    </>
  );
}
