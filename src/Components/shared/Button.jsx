function Button(props) {
  return (
    <button className={props.className} aria-label={props.ariaLabel}>
      {/*TODO: aria-label not working*/}
      {props.content}
    </button>
  );
}

export default Button;
