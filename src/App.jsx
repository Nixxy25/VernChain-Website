import Heropage from "./components/sections/Header/heropage";
import AboutUs from "./components/sections/aboutUs";
import ServicesPage from "./components/sections/servicespage";
import PricePage from "./components/sections/pricepage";
import TestimonialComponent from "./components/sections/Testimonial/testimonialComponent";
import CryptoPage from "./components/sections/crypto";
import NewsPage from "./components/sections/newspage";
import Footer from "./components/sections/footer";
import "./App.css";

const App = () => {
  return (
    <div>
      <Heropage />
      <AboutUs />
      <ServicesPage />
      <PricePage />
      <TestimonialComponent />
      <CryptoPage />
      <NewsPage />
      <Footer />
    </div>
  )
}

export default App;