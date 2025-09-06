import Menu from "../shared/Menu";
import Socials from "../shared/Socials";
import MainImage from "./MainImage";
import TopCTA from "../CTA/TopCTA";

function Hero() {
  const nav = ["Manufacturing", "Packaging", "Team"];

  return (
    <div className="hero">
      <div className="horizontal">
        <div className="vertical">
          <Menu className="hero-nav" items={nav} />
          <Socials className="hero-nav" />
        </div>
        <div className="hero-item horizontal">
          <MainImage />
          <TopCTA />
        </div>
      </div>
    </div>
  );
}

export default Hero;
