import Menu from "../shared/Menu";

function Socials(props) {
  const nav = ["LinkedIn", "BlueSky", "Meta"];
  return <Menu className={props.className} items={nav} />;
}

export default Socials;
