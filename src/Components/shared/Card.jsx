function Card(props) {
  return (
    <div className={props.className}>
      <h4>{props.title}</h4>
      <p>{props.description}</p>
    </div>
  );
}

export default Card;
