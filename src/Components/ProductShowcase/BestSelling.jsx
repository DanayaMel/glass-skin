import Heading from "../shared/Heading";
import Product from "./Product";

function BestSelling() {
  return (
    <div>
      <Heading text="Best Selling" />
      <Product id="1" />
      <Product id="2" />
      <Product id="3" />
    </div>
  );
}

export default BestSelling;
