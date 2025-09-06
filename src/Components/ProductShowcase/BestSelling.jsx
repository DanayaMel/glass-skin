import Heading from "../shared/Heading";
import Product from "./Product";

function BestSelling() {
  return (
    <div className="best-selling">
      <Heading text="Best Selling" />
      <div className="horizontal">
        <Product id="1" />
        <Product id="2" />
        <Product id="3" />
      </div>
    </div>
  );
}

export default BestSelling;
