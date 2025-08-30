import "./App.css";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Features from "./Components/Features/Features";
import ProductShowcase from "./Components/ProductShowcase/ProductShowcase";
import Testimonials from "./Components/Testimonials/Testimonials";
import BottomCTA from "./Components/CTA/BottomCTA";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Features />
      <ProductShowcase />
      <Testimonials />
      <BottomCTA />
      <Footer />
    </div>
  );
}

export default App;
