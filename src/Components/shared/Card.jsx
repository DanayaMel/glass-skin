import SubHeading from "./SubHeading";

function Card(props) {
  return (
    <div className="card">
      <div className={props.iconClassName}>{props.icon}</div>
      <SubHeading className={props.titleClassName} text={props.title} />
      <p className={props.contentClassName}>{props.content}</p>
    </div>
  );
}

export default Card;
