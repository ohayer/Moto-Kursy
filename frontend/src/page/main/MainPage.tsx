import Footer from "../components/Footer";
import Header from "../components/Header";
import Cards from "./components/Cards";
import BrandDescription from "./components/BrandDescription";
import "./mainpage.css";
import StoryCards from "./components/StoryCards";

const MainPage = () => (
  <div>
    <Header />
    <div id="company-description">
      <div id="content" className="p-12">
        <BrandDescription />
      </div>
      <Cards />
    </div>
    <StoryCards />
    <Footer />
  </div>
);

export default MainPage;
