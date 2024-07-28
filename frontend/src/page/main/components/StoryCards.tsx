interface ImageWithDescriptionProps {
  imgSrc: string;
  description: string;
}

const HistoryCard: React.FC<ImageWithDescriptionProps> = ({
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
  const historyCards = [
    {
      imgSrc:
        "https://i.pinimg.com/564x/ce/50/f9/ce50f9070df3946329f6ee0af12e5678.jpg",
      description:
        "We're organizing motocross events and competitions every year.",
    },
    {
      imgSrc:
        "https://i.pinimg.com/564x/7c/ce/db/7ccedbe42077f2257346640faae95ff6.jpg",
      description: "Our team is same passionate about automotive as you are.",
    },
    {
      imgSrc:
        "https://i.pinimg.com/originals/03/74/a8/0374a84b0a883b56e2a0af550efbac09.jpg",
      description:
        "We value safety over appearance. Unless you come in a suit...",
    },
  ];
  return (
    <div className="mt-40 flex justify-center space-x-4">
      {historyCards.map((card, index) => (
        <HistoryCard
          key={index}
          imgSrc={card.imgSrc}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default StoryCards;
