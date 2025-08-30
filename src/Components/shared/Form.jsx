import Heading from "./Heading";

function Form(props) {
  return (
    <form>
      <label>
        <Heading className="secondary-heading" text={props.text} />
        <h3 className="label-text">{props.description}</h3>
        <input type="text" placeholder={props.placeholderText} />
        <button>{props.buttonText}</button>
      </label>
    </form>
  );
}

export default Form;
