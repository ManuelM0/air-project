//import { useState } from "react";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import BannerCard from "./BannerCard";

//import Services from "../components/Services";
//import { Link } from "react-router-dom";

function Home() {
  return (
    <body className="h-screen w-screen justify-center items-baseline gap-10 -ml-4  bg-gray-300 px-4 sm:grid-cols-3 overflow-x-hidden">
      <div>
        <Header></Header>
        <BannerCard></BannerCard>
      </div>
    </body>
  );
}
export default Home;
