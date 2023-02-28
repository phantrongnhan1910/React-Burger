import "./App.css";
import Header from "./component/header/Header";
import About from "./component/about/About";
import Offer from "./component/offer/Offer";
import Banner from "./component/banner/Banner";
import Trend from "./component/trend/Trend";
import Dessert from "./component/dessert/Dessert";
import Reviews from "./component/banner-footer/bannerFooter";
import Outstanding from "./component/outstanding/Outstanding";
import Footer from "./component/footer/Footer";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="wrapper">
      <Header />
      <About />
      <Offer />
      <Banner />
      <Trend />
      <Dessert />
      <Reviews />
      <Outstanding />
      <Footer />
    </div>
  );
}

export default App;
