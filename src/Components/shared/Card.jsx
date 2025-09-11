function Card(props) {
  return (
    <div className={props.className}>
      <h4 className={props.titleClassName}>{props.title}</h4>
      <p className={props.descriptionClassName}>{props.description}</p>
    </div>
  );
}

export default Card;
