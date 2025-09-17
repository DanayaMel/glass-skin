import SubHeading from "./SubHeading";

function Card(props) {
  return (
    <div className="card">
      {props.icon && <div className={props.iconClassName}>{props.icon}</div>}
      <SubHeading className={props.titleClassName} text={props.title} />
      <div className={props.contentClassName}>{props.content}</div>
    </div>
  );
}

export default Card;
