import React from "react";
import Header from "./Header";
import ServicesPricesCard from "./ServicesPrices";

function CorsoNuoto() {
  return (
    <body className="h-screen w-screen justify-center items-baseline gap-10 -ml-4  bg-white px-4 sm:grid-cols-3 overflow-x-hidden">
      <div>
        <Header></Header>

        <ServicesPricesCard></ServicesPricesCard>
      </div>
    </body>
  );
}

export default CorsoNuoto;
