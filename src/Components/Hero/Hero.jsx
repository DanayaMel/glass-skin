import Menu from "../shared/Menu";
import Socials from "../shared/Socials";
import TopCTA from "../CTA/TopCTA";
import heroImg from "../../assets/kiehls1.avif";

function Hero() {
  const nav = ["Manufacturing", "Packaging", "Team"];

  return (
    <div className="hero horizontal">
      <div className="vertical">
        <Menu className="hero-nav" items={nav} />
        <Socials className="hero-socials" />
      </div>
      <img className="hero-image" src={heroImg} width="100%" height="878px" />
      <TopCTA className="hero-cta" />
    </div>
  );
}

export default Hero;
