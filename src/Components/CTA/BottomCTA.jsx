import CTA from "../shared/CTA";

function BottomCTA() {
  return (
    <div className="bottom-cta horizontal">
      <img src="..\src\assets\khiels2.jpg" />
      {/** todo: add id for input. move input cursor over. */}
      <CTA
        heading="Subscribe to Newsletter"
        headingClassName="bottom-cta-heading"
        content="Enter your email below for daily updates."
        inputPlaceholderText="Enter your e-mail."
        buttonText="Get Start"
      />
    </div>
  );
}

export default BottomCTA;
