import Heading from "../shared/Heading";
import Menu from "../shared/Menu";
import Button from "../shared/Button";
import { LuSearch } from "react-icons/lu";
import { RiShoppingBasketLine } from "react-icons/ri";
import { LuUser } from "react-icons/lu";

function Header() {
  const nav = ["Flavors", "Store", "Blog", "About US"];
  const actions = [
    <Button
      className="header-button"
      content={<LuSearch />}
      ariaLabel="Search"
    />,
    <Button
      className="header-button"
      content={<RiShoppingBasketLine />}
      ariaLabel="Cart"
    />,
    <Button className="header-button" content={<LuUser />} ariaLabel="User" />,
  ];

  return (
    <div className="header horizontal">
      <Heading className="header-heading" text="Beauty" />
      <Menu className="header-nav" items={nav} />
      <Menu className="header-actions" items={actions} />
    </div>
  );
}

export default Header;
