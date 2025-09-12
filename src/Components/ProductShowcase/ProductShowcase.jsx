import Benefits from "./Benefits";
import BestSelling from "./BestSelling";
import AboutUS from "./AboutUS";

function ProductShowcase() {
  return (
    <div className="product-showcase">
      <Benefits />
      <BestSelling />
      <AboutUS />
    </div>
  );
}

export default ProductShowcase;
