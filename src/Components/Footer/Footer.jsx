import Socials from "../shared/Socials";
import Menu from "../shared/Menu";
import Contact from "./Contact";
import FooterCTA from "../CTA/FooterCTA";

function Footer() {
  const nav = ["Best Seller", "Skin Products", "Track Your Order", "About Us"];

  return (
    <div className="footer section--cream horizontal">
      <div className="vertical">
        <p>Love to Learn Yourself!</p>
        <Socials className="footer-socials horizontal" />
      </div>
      <div className="vertical">
        <Menu className="footer-nav" items={nav} />
      </div>
      <Contact />
      <FooterCTA />
    </div>
  );
}

export default Footer;
