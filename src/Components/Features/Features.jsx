import Card from "../shared/Card";
import Heading from "../shared/Heading";

function Features() {
  return (
    <div className="features section--cream horizontal">
      <Heading
        className="features-heading"
        text={"Trusted by over 350,000+ clients\nworldwide since 2008"}
      />
      <Card
        titleClassName="features-card-title-ratings"
        title="4.6"
        descriptionClassName="features-card-description"
        description={"⭐⭐⭐⭐⭐\n3,350 Ratings"}
      />
      <Card
        titleClassName="features-card-title-sales"
        title="6M+"
        descriptionClassName="features-card-description"
        description={"Worldwide product\nsales per year"}
      />
    </div>
  );
}

export default Features;
