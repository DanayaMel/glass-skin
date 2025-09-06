import Socials from "../shared/Socials";
import Menu from "../shared/Menu";
import Contact from "./Contact";
import FooterCTA from "../CTA/FooterCTA";

function Footer() {
  const nav = ["Best Seller", "Skin Products", "Track Your Order", "About Us"];

  return (
    <div className="section--cream">
      <div>
        <p>Love to Learn Yourself!</p>
        <Socials />
      </div>
      <Menu items={nav} />
      <Contact />
      <FooterCTA />
    </div>
  );
}

export default Footer;
