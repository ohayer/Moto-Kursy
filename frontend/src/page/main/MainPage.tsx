import Footer from "../Footer";
import Header from "../Header";
import Cards from "./components/Cards";
import BrandDescription from "./data/BrandDescription";
import "./mainpage.css";

const MainPage = () => (
  <div>
    <Header />
    <div
      id="company-description"
      className="bg-wmain border-b-2 border-black p-4"
    >
      <div id="content" className="p-12">
        <BrandDescription />
      </div>
      <Cards />
    </div>
    <Footer />
  </div>
);

export default MainPage;
