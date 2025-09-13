import CTA from "../shared/CTA";

function AboutUs() {
  return (
    <div className="about-us horizontal">
      <img src="..\src\assets\khiels-flowers.jpeg" />
      <CTA
        className="about-us-cta"
        heading="About US"
        headingClassName="about-us-heading"
        titleClassName="best-selling-card-title-1"
        content="Juice is a drink made from the extraction or pressing of the natural liquid contained in fruits and vegetables. It can also refer to liquids that are flavored with concentrate or other biological food sources, such as meat or seafood, such as clam juice."
        buttonText="Read More"
      />
    </div>
  );
}

export default AboutUs;
