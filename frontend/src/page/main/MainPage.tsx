import Footer from "../Footer";
import Header from "../Header";
import "./mainpage.css";

const MainPage = () => (
  <div>
    <Header />
    <div
      id="company-description"
      className="bg-wmain border-b-2 border-black p-4"
    >
      <div id="content" className="p-16">
        <h3 className="text-primary font-bold text-5xl">
          Motorcycle Training Courses
        </h3>
        <h5 className="mt-5 font-bold text-black text-lg">
          These are the only courses in Poland conducted under the supervision
          of top specialists.
        </h5>
        <div className="mt-2 text-black max-w-4xl">
          <p>
            Our motorcycle training courses in Poland are designed to teach you
            how to ride safely and maximize your enjoyment on two wheels. We
            offer comprehensive training sessions in the cities of Warsaw,
            Gdańsk, and Kraków, utilizing the most popular tracks in these
            locations. Our instructors are dedicated to helping students achieve
            their motorcycle training goals quickly, understand road safety,
            perceive hazards, and build upon any existing motorcycling skills
            they possess.
          </p>
          <p className="mt-3">
            In addition to training for your motorcycle license, we provide
            sessions that give you a taste of the two-wheeled lifestyle. We also
            offer a wide range of motorcycles available for rent on training
            days, or you can choose to bring your own bike for the sessions.
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default MainPage;
