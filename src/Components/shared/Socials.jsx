import Menu from "../shared/Menu";
import { FaMeta } from "react-icons/fa6";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { GrLinkedinOption } from "react-icons/gr";
import { FaYoutube } from "react-icons/fa";

function Socials(props) {
  const nav = [
    <GrLinkedinOption />,
    <TiSocialInstagramCircular />,
    <FaMeta />,
    <FaYoutube />,
  ];
  return <Menu className={props.className} items={nav} />;
}

export default Socials;
