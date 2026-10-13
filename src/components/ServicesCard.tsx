import React from "react";
import { Link } from "react-router-dom";

function ServicesCard() {
  return (
    <div>
      <div className="w-full text-center absolute mt-30 text-7xl font-semibold font-robotomono">
        Attività libere
      </div>
      <div
        className="flex md:flex-row flex-wrap gap-x-10 justify-self-center absolute  w-450 h-200 mt-50 pl-30"
        style={{ userSelect: "none" }}
      >
        <div className="mt-20 w-90 h-100 drop-shadow-2xl rounded-3xl relative bg-sky-200 hover:scale-110 duration-400 flex flex-col">
          <img src="src\assets\gymcard.jpg" className="rounded-t-3xl"></img>
          <div className=" absolute w-50 h-20 border-8 border-white font-bold text-white  z-10 ml-20 mt-20 text-center text-3xl backdrop-blur-sm pt-3">
            SALA PESI
          </div>
          <h1 className="text-left bg-white pl-5 font-semibold pt-2">
            Sala Pesi
          </h1>
          <div className="grow relative bg-white h-full rounded-b-3xl pl-5 flex md:flex-row flex-wrap items-center justify-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
            <button className="relative rounded-3xl border-2 text-2xl w-40 h-12 mb-5 cursor-pointer font-semibold hover:bg-black hover:text-white -black duration-600">
              Orari e Prezzi
            </button>
          </div>
        </div>

        <div className=" mt-20 ml-30 w-90 h-100 drop-shadow-2xl rounded-3xl relative bg-sky-200 hover:scale-110 duration-400 flex flex-col">
          <img
            src="src\assets\nuotoliberocard.png"
            className="rounded-t-3xl bg-cover"
          ></img>
          <div className=" absolute w-55 h-28 border-8 border-white font-bold text-white  z-10 ml-20 mt-15 text-center text-3xl backdrop-blur-sm pt-3">
            NUOTO LIBERO
          </div>
          <h1 className="text-left bg-white pl-5 font-semibold pt-2">
            Nuoto Libero
          </h1>
          <div className="grow relative bg-white h-full rounded-b-3xl pl-5 flex md:flex-row flex-wrap items-center justify-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
            <button className="relative rounded-3xl border-2 text-2xl w-40 h-12 mb-5 cursor-pointer font-semibold hover:bg-black hover:text-white -black duration-600">
              Orari e Prezzi
            </button>
          </div>
        </div>
      </div>

      {/* CORSI DI TERRA */}
      <div className=" w-full text-center absolute mt-240 text-7xl font-semibold font-robotomono">
        Corsi di terra
      </div>
      <div
        className="flex md:flex-row flex-wrap gap-x-10 justify-self-center absolute  w-450 h-300 mt-260 pl-30"
        style={{ userSelect: "none" }}
      >
        <div className=" mt-20 w-90 h-100 drop-shadow-2xl rounded-3xl relative bg-sky-200 hover:scale-110 duration-400 flex flex-col">
          <img
            src="src\assets\functionalcard5.png"
            className="rounded-t-3xl bg-cover"
          ></img>
          <div className=" absolute w-55 h-20 border-8 border-white font-bold text-white  z-10 ml-20 mt-20 text-center text-3xl backdrop-blur-sm pt-3">
            FUNZIONALE
          </div>
          <h1 className="text-left bg-white pl-5 font-semibold pt-2">
            Funzionale
          </h1>
          <div className="grow relative bg-white h-full rounded-b-3xl pl-5 flex md:flex-row flex-wrap items-center justify-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
            <button className="relative rounded-3xl border-2 text-2xl w-40 h-12 mb-5 cursor-pointer font-semibold hover:bg-black hover:text-white -black duration-600">
              Orari e Prezzi
            </button>
          </div>
        </div>

        <div className=" mt-20 ml-30 w-90 h-100 drop-shadow-2xl rounded-3xl relative bg-sky-200 hover:scale-110 duration-400 flex flex-col">
          <img
            src="src\assets\pilatescard.png"
            className="rounded-t-3xl bg-cover"
          ></img>
          <div className=" absolute w-55 h-20 border-8 border-white font-bold text-white  z-10 ml-20 mt-20 text-center text-3xl backdrop-blur-sm pt-3">
            PILATES
          </div>
          <h1 className="text-left bg-white pl-5 font-semibold pt-2">
            Pilates
          </h1>
          <div className="grow relative bg-white h-full rounded-b-3xl pl-5 flex md:flex-row flex-wrap items-center justify-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
            <button className="relative rounded-3xl border-2 text-2xl w-40 h-12 mb-5 cursor-pointer font-semibold hover:bg-black hover:text-white -black duration-600">
              Orari e Prezzi
            </button>
          </div>
        </div>

        <div className="mt-20 ml-30 w-90 h-100 drop-shadow-2xl rounded-3xl relative bg-sky-200 hover:scale-110 duration-400 flex flex-col">
          <img
            src="src\assets\jiujitsucard.png"
            className="rounded-t-3xl bg-cover"
          ></img>
          <div className="absolute w-55 h-28 border-8 border-white font-bold text-white  z-10 ml-20 mt-15 text-center text-3xl backdrop-blur-sm pt-3 ">
            JIUJITSU BRASILIANO
          </div>
          <h1 className="text-left bg-white pl-5 font-semibold pt-2">
            Jiujitsu Brasiliano
          </h1>
          <div className="grow relative bg-white h-full rounded-b-3xl pl-5 flex md:flex-row flex-wrap items-center justify-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
            <button className="relative rounded-3xl border-2 text-2xl w-40 h-12 mb-5 cursor-pointer font-semibold hover:bg-black hover:text-white -black duration-600">
              Orari e Prezzi
            </button>
          </div>
        </div>

        <div className="mt-20 w-90 h-100 drop-shadow-2xl rounded-3xl relative bg-sky-200 hover:scale-110 duration-400 flex flex-col">
          <img src="src\assets\gymcard.jpg" className="rounded-t-3xl"></img>
          <div className=" absolute w-50 h-20 border-8 border-white font-bold text-white  z-10 ml-20 mt-20 text-center text-3xl backdrop-blur-sm pt-3">
            NULL
          </div>
          <h1 className="text-left bg-white pl-5 font-semibold pt-2">Null</h1>
          <div className="grow relative bg-white h-full rounded-b-3xl pl-5 flex md:flex-row flex-wrap items-center justify-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
            <button className="relative rounded-3xl border-2 text-2xl w-40 h-12 mb-5 cursor-pointer hover:bg-black hover:text-white -black duration-600">
              Null
            </button>
          </div>
        </div>
      </div>

      {/* CORSI DI NUOTO */}
      <div className=" w-full text-center absolute mt-550 text-7xl font-semibold font-robotomono">
        Corsi d'acqua
      </div>
      <div
        className="flex md:flex-row flex-wrap gap-x-40 justify-self-center absolute  w-450 h-400 mt-570 pl-30"
        style={{ userSelect: "none" }}
      >
        <div className="mt-20 w-90 h-100 drop-shadow-2xl rounded-3xl relative bg-sky-200 hover:scale-110 duration-400 flex flex-col">
          <img
            src="src\assets\corsonuotocard.png"
            className="rounded-t-3xl"
          ></img>
          <div className=" absolute w-50 h-28 border-8 border-white font-bold text-white  z-10 ml-20 mt-15 text-center text-3xl backdrop-blur-sm pt-3">
            CORSO DI NUOTO
          </div>
          <h1 className="text-left bg-white pl-5 font-bold pt-2">
            Corso di nuoto (adulti, bambini)
          </h1>
          <div className="grow relative bg-white h-full rounded-b-3xl pl-5 pr-1 gap-y-7 flex md:flex-row flex-wrap items-center justify-center font-robotomono">
            Corsi strutturati per livelli (principianti, intermedio, avanzato)
            per imparare a nuotare o perfezionare la tecnica in totale
            sicurezza.
            <button className="relative rounded-3xl border-2 text-2xl w-40 h-18 mb-5 mt-8 cursor-pointer font-semibold hover:bg-black hover:text-white -black duration-600">
              <Link to="/air-project/corsonuoto">Orari e Prezzi</Link>
            </button>
          </div>
        </div>
        <div className="mt-20 w-90 h-100 drop-shadow-2xl rounded-3xl relative bg-sky-200 hover:scale-110 duration-400 flex flex-col">
          <img
            src="src\assets\corsonuotocard.png"
            className="rounded-t-3xl"
          ></img>
          <div className=" absolute w-50 h-28 border-8 border-white font-bold text-white  z-10 ml-20 mt-15 text-center text-3xl backdrop-blur-sm pt-3">
            NUOTO BABY
          </div>
          <h1 className="text-left bg-white pl-5 font-bold pt-2">
            Nuoto Baby (0-3 anni)
          </h1>
          <div className="grow relative bg-white h-full rounded-b-3xl pl-5 pr-1 gap-y-7 flex md:flex-row flex-wrap items-center justify-center font-robotomono">
            Percorsi dedicati ai più piccoli (fino ai 3 anni) per un primo
            approccio sereno e giocoso con l'acqua.
            <button className="relative rounded-3xl border-2 text-2xl w-40 h-18 mb-5 mt-8 cursor-pointer font-semibold hover:bg-black hover:text-white -black duration-600">
              Orari e Prezzi
            </button>
          </div>
        </div>
        <div className="mt-20 w-90 h-100 drop-shadow-2xl rounded-3xl relative bg-sky-200 hover:scale-110 duration-400 flex flex-col">
          <img
            src="src\assets\gymdolcecard.png"
            className="rounded-t-3xl"
          ></img>
          <div className=" absolute w-50 h-20 border-8 border-white font-bold text-white  z-10 ml-20 mt-20 text-center text-3xl backdrop-blur-sm pt-3">
            GYM DOLCE
          </div>
          <h1 className="text-left bg-white pl-5 font-bold pt-2">Gym Dolce</h1>
          <div className="grow relative bg-white h-full rounded-b-3xl pl-5 pr-1 gap-y-7 flex md:flex-row flex-wrap items-center justify-center font-robotomono">
            Un'attività a basso impatto, ideale per migliorare mobilità,
            equilibrio e tono muscolare in totale sicurezza. Stimola la
            circolazione e dona tutti i benefici dell'attività in acqua.
            <button className="relative rounded-3xl border-2 text-2xl w-40 h-18 mb-5 mt-8 cursor-pointer font-semibold hover:bg-black hover:text-white -black duration-600">
              Orari e Prezzi
            </button>
          </div>
        </div>

        <div className=" mt-20  w-90 h-100 drop-shadow-2xl rounded-3xl relative bg-sky-200 hover:scale-110 duration-400 flex flex-col">
          <img
            src="src\assets\acquagymcard.png"
            className="rounded-t-3xl bg-cover"
          ></img>
          <div className=" absolute w-55 h-20 border-8 border-white font-bold text-white  z-10 ml-20 mt-20 text-center text-3xl backdrop-blur-sm pt-3">
            ACQUAGYM
          </div>
          <h1 className="text-left bg-white pl-5 font-bold pt-2">Acquagym</h1>
          <div className="grow relative bg-white h-full rounded-b-3xl pl-5 flex md:flex-row flex-wrap items-center justify-center font-robotomono">
            Un allenamento completo adatto a tutti i livelli. Le lezioni si
            svolgono in acqua bassa o alta, con intensità variabile a corpo
            libero o con l'utilizzo di piccoli attrezzi. Miglioramento di forza,
            resistenza, coordinazione e benessere.
            <button className="relative rounded-3xl border-2 text-2xl w-40 h-18 mt-2 mb-5 cursor-pointer font-semibold hover:bg-black hover:text-white -black duration-600">
              Orari e Prezzi
            </button>
          </div>
        </div>

        <div className=" mt-20 w-90 h-100 drop-shadow-2xl rounded-3xl relative bg-sky-200 hover:scale-110 duration-400 flex flex-col">
          <img
            src="src\assets\hydrobikecard.png"
            className="rounded-t-3xl bg-cover"
          ></img>
          <div className=" absolute w-55 h-20 border-8 border-white font-bold text-white  z-10 ml-20 mt-20 text-center text-3xl backdrop-blur-sm pt-3">
            HYDROBIKE
          </div>
          <h1 className="text-left bg-white pl-5 font-bold pt-2">Hydrobike</h1>
          <div className="grow relative bg-white h-full rounded-b-3xl pl-5 flex md:flex-row flex-wrap items-center justify-center font-robotomono">
            Ideale per migliorare la circolazione e la resistenza
            cardiovascolare. Tonifica gambe e glutei sfruttando la resistenza
            dell'acqua per un allenamento efficace e a basso impatto articolare!
            <button className="relative rounded-3xl border-2 text-2xl w-40 h-18 mt-2  mb-5 cursor-pointer font-semibold hover:bg-black hover:text-white -black duration-600">
              Orari e Prezzi
            </button>
          </div>
        </div>

        <div className=" mt-20 w-90 h-100 drop-shadow-2xl rounded-3xl relative bg-sky-200 hover:scale-110 duration-400 flex flex-col">
          <img
            src="src\assets\circuitgymcard.png"
            className="rounded-t-3xl bg-cover"
          ></img>
          <div className="absolute w-55 h-20 border-8 border-white font-bold text-white  z-10 ml-20 mt-20 text-center text-3xl backdrop-blur-sm pt-3 ">
            CIRCUIT GYM
          </div>
          <h1 className="text-left bg-white pl-5 font-bold pt-2">
            Circuit Gym
          </h1>
          <div className="grow relative bg-white h-full rounded-b-3xl pl-5 flex md:flex-row flex-wrap items-center justify-center font-robotomono">
            Allenamento HIIT a circuito con musica intervallata e l'utilizzo di
            piccoli o grandi attrezzi. Un lavoro di tonificazione mirato per i
            singoli distretti muscolari con l'obbiettivo di migliorare la forza
            e bruciare calorie.
            <button className="relative rounded-3xl border-2 text-2xl w-40 h-18 mt-2  mb-5 cursor-pointer font-semibold hover:bg-black hover:text-white -black duration-600">
              Orari e Prezzi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesCard;
