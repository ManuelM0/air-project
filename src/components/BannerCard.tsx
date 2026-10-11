import "./BannerCard.module.css";
import { useState, useEffect } from "react";
import { getCards } from "../data/cards";
import { RxChevronLeft, RxChevronRight } from "react-icons/rx";
import { RxDotFilled } from "react-icons/rx";

function BannerCard() {
  const cards = getCards();
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevCard = () => {
    const isFirstCard = currentIndex === 0;
    const newIndex = isFirstCard ? cards.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextCard = () => {
    const isLastCard = currentIndex === cards.length - 1;
    const newIndex = isLastCard ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToCard = (cardIndex) => {
    setCurrentIndex(cardIndex);
  };

  useEffect(() => {
    const autoplay = setInterval(() => {
      nextCard();
    }, 6000);
    return () => clearInterval(autoplay);
  });

  return (
    <div
      className=" max-w-180 h-250 w-full m-auto py-16 px-4 relative group scale-85"
      style={{ userSelect: "none" }}
    >
      <div
        className="w-full h-full rounded-3xl bg-center duration-500 bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url('${cards[currentIndex].image}')`,
        }}
      ></div>

      <div className="absolute top-[50%] translate-x-0 translate-y-[-50%] left-7 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer">
        <RxChevronLeft onClick={prevCard} size={30} />
      </div>

      <div className="absolute top-[50%] translate-x-0 translate-y-[-50%] right-7 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer">
        <RxChevronRight onClick={nextCard} size={30} />
      </div>

      {/* <center>
        <div className="flex top-4 justify-center py-2 bg-w w-114 h-10 rounded-b-lg">
          {cards.map((card, cardIndex) => (
            <div
              key={cardIndex}
              onClick={() => goToCard(cardIndex)}
              className="text-2xl cursor-pointer p-5"
            >
              <RxDotFilled className="-mt-5" />
            </div>
          ))}
        </div>
      </center> */}
    </div>
  );
}

export default BannerCard;
