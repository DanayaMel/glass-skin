import Heading from "../shared/Heading";
import Menu from "../shared/Menu";

function Header() {
  const nav = ["Flavors", "Store", "Blog", "About Us"];
  const actions = ["Search", "Cart", "Account"];

  return (
    <div className="header">
      <Heading className="header-heading" text="Beauty" />
      <Menu className="header-nav" items={nav} />
      <Menu className="header-actions" items={actions} />
    </div>
  );
}

export default Header;
