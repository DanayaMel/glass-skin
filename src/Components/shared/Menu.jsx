function Menu(props) {
  return (
    <ul className={props.className}>
      {props.items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default Menu;
