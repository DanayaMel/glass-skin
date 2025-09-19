import CTA from "../shared/CTA";

function TopCTA() {
  return (
    <div className="top-cta">
      <h1 className="top-cta-heading">
        Sunday
        <br />
        Rieley
      </h1>
      <CTA
        className="top-cta-text"
        content={
          "Formulated with Goji Berry, Lemon Balm, and Vitamin E to\nprovide antioxidant protection against free radicals. Inspired\nby Korean skincare healthy-looking skin. Formulated with\nGoji Berry, Lemon Balm, and Vitamin E to provide antioxidant\nprotection against free radicals."
        }
        buttonText="Buy Now | $39.99"
      />
    </div>
  );
}

export default TopCTA;
