import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [today, setDate] = React.useState(new Date());
  const Day = new Date().getDate();
  const Month = new Date().getMonth;
  const Hours = new Date().getHours();
  const Minutes = new Date().getMinutes();
  const Seconds = new Date().getSeconds();
  var apertura = "";
  var aperturaColor = "";
  const tempo = new Date(
    Date.UTC(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate(),
      3,
      0,
      0,
    ),
  );

  const options = {
    weekday: "long",
    day: "numeric",
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);
  });

  if (Hours < 7 || Hours > 20) {
    apertura = "Siamo Chiusi!";
  } else apertura = "Siamo Aperti!";

  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-container " style={{ userSelect: "none" }}>
          <ul className="flex items-center gap-10 p-5 md:flex-row bg-white font-bold w-screen shadow font-[lato] fixed -ml-4 shrink basis-auto justify-baseline z-30">
            <li className="hover:scale-110 transition-all duration-300  relative cursor-pointer ml-2">
              <img
                src="src\assets\logo no bg.png"
                height={100}
                width={100}
                object-fit:fill
              />
            </li>
            <Link
              to="/"
              className=" -m-5 cursor-pointer w-20 h-21 group hover:bg-sky-100 duration-800 "
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <li className="group-hover:scale-110 duration-400 flex-1 text-center">
                Home
              </li>
            </Link>
            <Link
              to="/servizi"
              className=" -m-5 cursor-pointer  w-32 h-21 group hover:bg-sky-100 duration-800 "
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <li className="group-hover:scale-110 duration-300  flex-1 text-center">
                Servizi - Prezzi
              </li>
            </Link>
            <li
              className="-m-5 w-23 h-12 group absolute ml-[82%] align-middle text-center"
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              {/* {today.toUTCString().split("2026")[0]} */}
              {tempo.toLocaleDateString("it-IT", options)} {Hours}:{Minutes}
            </li>

            <li
              className="apertura -m-5 w-23 h-12 group rounded-3xl border-2 relative ml-[70%] flex align-middle text-center {aperturaColor}"
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              {apertura}
            </li>

            <Link
              to="/contatti"
              className=" -m-5 cursor-pointer w-23 h-12 group rounded-3xl border-2 hover:bg-black hover:text-white hover:border-black relative ml-auto mr-0.5 duration-800"
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <li className="flex-1 text-center ">Contattaci</li>
            </Link>
          </ul>
        </div>
      </nav>
      {/* <hr></hr> */}
    </header>
  );
}

export default Header;
