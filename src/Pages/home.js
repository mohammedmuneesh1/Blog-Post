import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./widget/Header";
import HomeContent from "./widget/HomeContent";
import './widget/widget.css';

export default function Home() {
  return (
    <div>
      <Header/>
      <HomeContent/>
    </div>
  );
}
