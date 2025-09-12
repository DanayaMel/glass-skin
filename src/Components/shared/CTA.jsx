import Heading from "./Heading";

function CTA(props) {
  return (
    <div className={props.className}>
      <form>
        {/* TODO: need <label>? */}
        <Heading text={props.heading} />
        {props.content && <p>{props.content}</p>}
        {props.inputPlaceholderText && (
          <input type="text" placeholder={props.inputPlaceholderText} />
        )}
        <button>{props.buttonText}</button>
        {/* </label> */}
      </form>
    </div>
  );
}

export default CTA;
