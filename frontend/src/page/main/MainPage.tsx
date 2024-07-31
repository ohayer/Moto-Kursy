import Footer from "../components/Footer";
import Header from "../components/Header";
import Cards from "./components/Cards";
import BrandDescription from "./components/BrandDescription";
import "./mainpage.css";
import StoryCards from "./components/StoryCards";
import MessageSender from "./components/MessageSender";

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
    <MessageSender />
    <Footer />
  </div>
);

export default MainPage;
