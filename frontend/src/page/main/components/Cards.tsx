import { useState, useEffect } from "react";
import Card from "./Card";

const Cards = () => {
  const cardInfo = [
    { title: "Card 1", content: "This is card 1" },
    { title: "Card 2", content: "This is card 2" },
    { title: "Card 3", content: "This is card 3" },
    { title: "Card 4", content: "This is card 4" },
    { title: "Card 5", content: "This is card 5" },
    { title: "Card 6", content: "This is card 6" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const skipCount = 1;
  //   state of the number of cards to show
  const [visibleCards, setVisibleCards] = useState(4);
  //    state to check if the screen is small
  const [smallScreen, setSmallScreen] = useState(false);

  //   useEffect to handle the number of cards to show based on the screen size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1669) {
        // xlarge and bigger
        setSmallScreen(false);
        setVisibleCards(4);
      } else if (width >= 1325) {
        // largre
        setSmallScreen(false);
        setVisibleCards(3);
      } else if (width >= 890) {
        // medium
        setSmallScreen(false);
        setVisibleCards(2);
      } else {
        // small
        setSmallScreen(true);
        setVisibleCards(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log(smallScreen);

  const handleNext = () => {
    if (currentIndex + visibleCards < cardInfo.length) {
      setCurrentIndex(currentIndex + skipCount);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - skipCount);
    }
  };

  const showMore = () => {
    setVisibleCards((prevCount) => prevCount + skipCount);
  };

  return (
    <div className="w-full px-5">
      {smallScreen ? (
        // case when screen is small
        <>
          <div className="flex flex-col items-center">
            {cardInfo.slice(0, visibleCards).map((card, index) => (
              <div key={index} className="mb-4">
                <Card title={card.title} content={card.content} />
              </div>
            ))}
          </div>
          {visibleCards < cardInfo.length && (
            <div className="text-center mt-4">
              <button
                onClick={showMore}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Show more
              </button>
            </div>
          )}
        </>
      ) : (
        // case when screen is not small
        <div className="flex items-center relative">
          <button
            className="absolute left-0 z-10 bg-gray-200 p-2 rounded-full"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            &lt;
          </button>
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${
                  (currentIndex * 100) / visibleCards
                }%)`,
              }}
            >
              {cardInfo.map((card, index) => (
                <div
                  key={index}
                  className="min-w-1/4 flex-shrink-0 px-2 mx-2"
                  style={{ flex: `0 0 calc(${100 / visibleCards}% - 16px)` }}
                >
                  <Card title={card.title} content={card.content} />
                </div>
              ))}
            </div>
          </div>
          <button
            className="absolute right-0 z-10 bg-gray-200 p-2 rounded-full"
            onClick={handleNext}
            hidden={currentIndex + visibleCards >= cardInfo.length}
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default Cards;
