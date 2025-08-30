import Menu from "../shared/Menu";
import Socials from "../shared/Socials";
import MainImage from "./MainImage";
import TopCTA from "../CTA/TopCTA";

function Hero() {
  const nav = ["Manufacturing", "Packaging", "Team"];

  return (
    <div className="hero">
      <Menu className="hero-nav" items={nav} />
      <Socials />
      <MainImage />
      <TopCTA />
    </div>
  );
}

export default Hero;
