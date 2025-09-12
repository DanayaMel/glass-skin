import Card from "../shared/Card";
import SubHeading from "../shared/SubHeading";

function Features() {
  return (
    <div className="features section--cream horizontal">
      <SubHeading
        className="features-heading"
        text={"Trusted by over 350,000+ clients\nworldwide since 2008"}
      />
      <Card
        titleClassName="features-card-title-ratings"
        title="4.6"
        contentClassName="features-card-content"
        content={"⭐⭐⭐⭐⭐\n3,350 Ratings"}
      />
      <Card
        titleClassName="features-card-title-sales"
        title="6M+"
        contentClassName="features-card-content"
        content={"Worldwide product\nsales per year"}
      />
    </div>
  );
}

export default Features;
