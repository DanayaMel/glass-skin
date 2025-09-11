import Menu from "../shared/Menu";
import Socials from "../shared/Socials";
import TopCTA from "../CTA/TopCTA";
import heroImg from "../../assets/kiehls.webp";

function Hero() {
  const nav = ["Manufacturing", "Packaging", "Team"];

  return (
    <div className="hero horizontal">
      <div className="vertical">
        <Menu className="hero-nav" items={nav} />
        <Socials className="hero-socials" />
      </div>
      <img className="hero-image" src={heroImg} width="798px" height="988px" />
      <TopCTA className="hero-cta" />
    </div>
  );
}

export default Hero;
