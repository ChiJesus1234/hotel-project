import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SuggestedDestinations from "./components/SuggestedDestinations";
import TopDeals from "./components/TopDeals";
import PopularCities from "./components/PopularCities";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <SuggestedDestinations />
      <TopDeals />
      <PopularCities />
      <Newsletter />
      <Footer />
    </div>
  );
}