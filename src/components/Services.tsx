import Header from "./Header";
import ServicesPricesCard from "./ServicesPrices";
import ServicesCard from "./ServicesCard";

function ServicesPrices() {
  return (
    <body className="h-screen justify-center items-baseline -ml-4  gap-10  px-4 sm:grid-cols-3">
      <div>
        <Header></Header>

        <ServicesCard></ServicesCard>
      </div>
    </body>
  );
}

export default ServicesPrices;
