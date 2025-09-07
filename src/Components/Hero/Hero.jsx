import Menu from "../shared/Menu";
import Socials from "../shared/Socials";
import MainImage from "./MainImage";
import TopCTA from "../CTA/TopCTA";

function Hero() {
  const nav = ["Manufacturing", "Packaging", "Team"];

  return (
    <div className="hero">
      <div className="vertical">
        <Menu className="hero-nav" items={nav} />
        <Socials className="hero-socials" />
      </div>
      <MainImage className="hero-img" />
      <TopCTA className="hero-cta" />
    </div>
  );
}

export default Hero;
