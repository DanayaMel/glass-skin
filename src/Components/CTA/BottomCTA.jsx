import CTA from "../shared/CTA";

function BottomCTA() {
  return (
    <div className="bottom-cta horizontal">
      <img src="..\src\assets\khiels-flowers.jpeg" />
      <CTA
        heading="Subscribe to Newsletter"
        content="Lorem Ipsum"
        placeholderText="Enter your e-mail."
        buttonText="Get Started"
      />
    </div>
  );
}

export default BottomCTA;
