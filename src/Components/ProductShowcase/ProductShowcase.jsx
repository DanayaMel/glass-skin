import Benefits from "./Benefits";
import BestSelling from "./BestSelling";
import AboutUs from "./AboutUs";

function ProductShowcase() {
  return (
    <div className="product-showcase">
      <Benefits />
      <BestSelling />
      <AboutUs />
    </div>
  );
}

export default ProductShowcase;
