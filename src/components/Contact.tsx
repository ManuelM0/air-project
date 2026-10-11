import React from "react";
import Header from "./Header";

function Contact() {
  return (
    <body className="h-screen items-baseline px-4  -ml-4 overflow-x-hidden relative font-[lato]">
      <div>
        <Header></Header>
        <div className="relative h-screen w-screen bg-white -ml-4 bord">
          <h1 className="text-6xl pt-30 justify-center text-center ">
            Contattaci
          </h1>
          <ul className=" fixed w-75 h-full p-5 pt-10 -mt-24 bg-sky-100">
            <li className="text-5xl px-6 w-100">Orari</li>
            <li className="text-2xl px-7 w-100 text-gray-700 py-2">
              6:30 - 21:30
            </li>

            <li className="text-5xl pt-30 px-6 w-100">Telefono</li>
            <li className="text-2xl px-7 w-100 text-gray-700 py-2">
              344 089 8804
            </li>
            <li className="text-2xl px-7 w-100 text-gray-700">0789 646 044</li>
            <li className="text-5xl px-6 w-100 pt-10">E-mail</li>
            <li className="text-2xl px-7 w-100 text-gray-700 py-2">
              olbianuoto@gmail.com
            </li>
          </ul>
        </div>
      </div>
    </body>
  );
}

export default Contact;
