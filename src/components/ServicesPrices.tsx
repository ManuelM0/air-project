import React from "react";

function ServicesPricesCard() {
  return (
    <div className="font-[lato] bg-white w-screen h-screen overflow-y-auto -ml-4 pb-80 grid gap-10">
      <div className="pt-30 font-semibold text-5xl px-20">ORARI</div>
      <div className="relative  bg-neutral-primary-soft shadow-xs rounded-base border-default w-300 h-48 top-5 left-20 border rounded-2xl bg-white overflow-x-hidden overflow-y-hidden">
        <table className="w-full text-sm text-left rtl:text-right text-body">
          <thead className="text-sm text-body bg-neutral-secondary-medium border-b border-default-medium">
            <tr>
              <th scope="col" className="px-6 py-3 text-3xl"></th>
              <th scope="col" className="px-6 py-3 text-3xl">
                Lunedì-Mercoledì-Venerdì
              </th>
              <th scope="col" className="px-6 py-3 text-3xl">
                Martedì-Giovedì
              </th>
              <th scope="col" className="px-12 py-3 text-3xl">
                Sabato
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
              <th
                scope="row"
                className="px-6 py-4 text-2xl text-heading whitespace-nowrap"
              >
                Mattino
              </th>{" "}
              <td className="px-15 py-4 font-semibold">
                7:00/7:45/8:30/9:15/10:00/13:45/14:00
              </td>
              <td className="px-12 py-4 font-semibold">
                7:00/7:45/8:30/9:15/13:15
              </td>
              <td className="px-15 py-4 font-semibold">9:15/10:00</td>
            </tr>
            <tr className="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
              <th
                scope="row"
                className="px-6 py-4 text-2xl text-heading whitespace-nowrap"
              >
                Pomeriggio
              </th>

              <td className="px-15 py-4 font-semibold">
                17:45/18:30/19:15/20:00
              </td>
              <td className="px-12 py-4 font-semibold">18:30/19:15/20:00</td>
              <td className="px-15 py-4 font-semibold">16:45/17:30</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="pt-30 font-semibold text-5xl px-20">PREZZI</div>
      <div className="font-semibold text-2xl px-20 underline">
        (Al prezzo dell'abbonamento va aggiunta una tassa d'iscrizione di 25€,
        valida fino al 31 Agosto 2027)
      </div>
      <div className="relative bg-neutral-primary-soft shadow-xs rounded-base border-default w-300 h-80 top-5 left-20 border rounded-2xl bg-white overflow-x-hidden overflow-y-hidden">
        <table className="w-full text-sm text-left rtl:text-right text-body">
          <thead className="text-sm text-body bg-neutral-secondary-medium border-b border-default-medium">
            <tr>
              <th scope="col" className="px-6 py-3 text-3xl">
                Cadenza
              </th>
              <th scope="col" className="px-6 py-3 text-3xl"></th>
              <th scope="col" className="px-6 py-3 text-3xl">
                1 mese
              </th>
              <th scope="col" className="px-6 py-3 text-3xl">
                3 mesi
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
              <th
                scope="row"
                className="px-6 py-4 text-2xl text-heading whitespace-nowrap"
              >
                Monosettimanale
              </th>{" "}
              <td className="px-6 py-4 font-semibold"></td>
              <td className="px-6 py-4 font-semibold">45€/mese</td>
              <td className="px-6 py-4 font-semibold">126€/3 mesi</td>
            </tr>
            <tr className="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
              <th
                scope="row"
                className="px-6 py-4 text-2xl text-heading whitespace-nowrap"
              >
                Bisettimanale
              </th>
              <td className="px-6 py-4 font-semibold"></td>
              <td className="px-6 py-4 font-semibold">55€/mese</td>
              <td className="px-6 py-4 font-semibold">153€/3 mesi</td>
            </tr>
            <tr className="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
              <th
                scope="row"
                className="px-6 py-4 text-2xl text-heading whitespace-nowrap"
              >
                Trisettimanale
              </th>
              <td className="px-6 py-4 font-semibold"></td>
              <td className="px-6 py-4 font-semibold">65€/mese</td>
              <td className="px-6 py-4 font-semibold">181€/3 mesi</td>
            </tr>
            <tr className="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
              <th
                scope="row"
                className="px-6 py-4 text-2xl text-heading whitespace-nowrap"
              >
                Gettone singolo
              </th>

              <td className="py-4 font-semibold">13€</td>
              <td className="px-6 py-4 font-semibold"></td>
              <td className="px-6 py-4 font-semibold"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default ServicesPricesCard;
