import { useState, useEffect } from "react";
import Card, { Course } from "../../../components/Card";
import { RestUrl } from "../../../api/RestUrl";
import axios from "axios";

const Cards = () => {
  const [validCourses, setValidCourses] = useState<Course[]>([]);

  useEffect(() => {
    axios.get<Course[]>(RestUrl.getValidCourses).then((response) => {
      setValidCourses(response.data);
    });
    console.log(validCourses);
  }, []);

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

  const handleNext = () => {
    if (currentIndex + visibleCards < validCourses.length) {
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
      <h6 className="ml-6 text-xl text-black mb-2">
        Course prices are per hour.
      </h6>
      {smallScreen ? (
        // case when screen is small
        <>
          <div className="flex flex-col items-center">
            {validCourses.slice(0, visibleCards).map((card, index) => (
              <div key={index} className="mb-4">
                <Card {...card} />
              </div>
            ))}
          </div>
          {visibleCards < validCourses.length && (
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
              {validCourses.map((card, index) => (
                <div
                  key={index}
                  className="min-w-1/4 flex-shrink-0 px-2 mx-2"
                  style={{ flex: `0 0 calc(${100 / visibleCards}% - 16px)` }}
                >
                  <Card {...card} />
                </div>
              ))}
            </div>
          </div>
          <button
            className="absolute right-0 z-10 bg-gray-200 p-2 rounded-full"
            onClick={handleNext}
            hidden={currentIndex + visibleCards >= validCourses.length}
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default Cards;
