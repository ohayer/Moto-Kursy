import storyCardsData from "../data/storyCards.json";

interface ImageWithDescriptionProps {
  imgSrc: string;
  description: string;
}

const StroyCard: React.FC<ImageWithDescriptionProps> = ({
  description,
  imgSrc,
}) => {
  return (
    <div className="card bg-base-100 image-full max-w-[400px] shadow-xl max-h-[800px]">
      <figure>
        <img src={imgSrc} alt="Shoes" />
      </figure>
      <div className="card-body">
        <p className="text-xs sm:text-xl lg:text-3xl font-bold">
          {description}
        </p>
      </div>
    </div>
  );
};

const StoryCards = () => {
  return (
    <div className="mt-40 flex justify-center space-x-4">
      {storyCardsData.map((card, index) => (
        <StroyCard
          key={index}
          imgSrc={card.imgSrc}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default StoryCards;
