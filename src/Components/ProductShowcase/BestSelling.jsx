import Heading from "../shared/Heading";
import Card from "../shared/Card";
import { library } from "../shared/text";
import Button from "../shared/Button";

function BestSelling() {
  return (
    <div className="best-selling">
      <Heading className="best-selling-heading" text="Best Selling" />
      <div className="cards horizontal">
        <div className="vertical">
          <Card
            icon={
              <img
                src="..\src\assets\khiels1.avif"
                className="best-selling-card-icon"
              />
            }
            title="Good Genes"
            titleClassName="best-selling-card-title-1"
            content={library.bestSelling.first}
            contentClassName="best-selling-card-content-1"
          />
          <Button content="Buy Now | $39.99" />
        </div>
        <div className="vertical">
          <Card
            className="best-selling-card-2"
            icon={
              <img
                src="..\src\assets\khiels2.avif"
                className="best-selling-card-icon"
              />
            }
            title="Flash Fix Kit"
            titleClassName="best-selling-card-title-2"
            content={library.bestSelling.second}
            contentClassName="best-selling-card-content-2"
          />
          <Button content="Buy Now | $39.99" />
        </div>
        <div className="vertical">
          <Card
            className="best-selling-card-3"
            icon={
              <img
                src="..\src\assets\khiels3.avif"
                className="best-selling-card-icon"
              />
            }
            title="Ceramic Slip"
            titleClassName="best-selling-card-title-3"
            content={library.bestSelling.third}
            contentClassName="best-selling-card-content-3"
          />
          <Button content="Buy Now | $39.99" />
        </div>
      </div>
    </div>
  );
}

export default BestSelling;
