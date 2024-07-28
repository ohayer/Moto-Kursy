import desc from "../data/brandDescription.json";

const BrandDescription = () => (
  <>
    <h3 className="text-primary font-bold text-2xl sm:text-5xl">
      {desc.mainTitle}
    </h3>
    <h5 className="mt-5 font-bold text-black text-base sm:text-lg">
      {desc.subTitle}
    </h5>
    <div className="mt-2 text-black max-w-4xl text-sm sm:text-base">
      <p>{desc.firstText}</p>
      <p className="mt-3">{desc.secondText}</p>
    </div>
    <div className="flex flex-col justify-center items-center text-black mt-2">
      <p>We're in:</p>
      <div className="flex flex-row space-x-4 mt-2 italic">
        <p>@Kraków</p>
        <p>@Warszawa</p>
        <p>@Gdańsk</p>
      </div>
    </div>
  </>
);

export default BrandDescription;
