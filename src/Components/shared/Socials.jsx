import Menu from "../shared/Menu";
import { FaMeta } from "react-icons/fa6";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { GrLinkedinOption } from "react-icons/gr";

function Socials(props) {
  const nav = [<GrLinkedinOption />, <TiSocialInstagramCircular />, <FaMeta />];
  return <Menu className={props.className} items={nav} />;
}

export default Socials;
