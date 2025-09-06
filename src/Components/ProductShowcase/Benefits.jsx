import Card from "../shared/Card";
import Heading from "../shared/Heading";

function Benefits() {
  return (
    <div className="benefits">
      <Heading text="Our Benefits" />
      <div className="horizontal">
        <Card title="Best Quality" description="Lorem Ipsum" />
        <Card title="Free Shipping" description="Lorem Ipsum" />
        <Card title="Warranty" description="Lorem Ipsum" />
      </div>
    </div>
  );
}

export default Benefits;
