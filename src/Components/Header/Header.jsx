import Heading from "../shared/Heading";
import Menu from "../shared/Menu";
import Button from "../shared/Button";
import { LuSearch } from "react-icons/lu";
import { RiShoppingBasketLine } from "react-icons/ri";
import { LuUser } from "react-icons/lu";

function Header() {
  const nav = ["Flavors", "Store", "Blog", "About Us"];
  const actions = [
    <Button content={<LuSearch />} ariaLabel="Search" />,
    <Button content={<RiShoppingBasketLine />} ariaLabel="Cart" />,
    <Button content={<LuUser />} ariaLabel="User" />,
  ];

  return (
    <div className="header">
      <Heading className="header-heading" text="Beauty" />
      <Menu className="header-nav" items={nav} />
      <Menu className="header-actions" items={actions} />
    </div>
  );
}

export default Header;
