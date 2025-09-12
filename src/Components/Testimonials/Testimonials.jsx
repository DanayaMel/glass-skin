import Card from "../shared/Card";
import Heading from "../shared/Heading";

function Testimonials() {
  return (
    <div className="section--cream testimonials">
      <div>
        <Heading text="Testimonials" />
        {/* <Icon className="left-arrow" />
        <Icon className="right-arrow" /> */}
        {/*TODO: Add actions for buttons. (Where should Icons go? Maybe make this a menu component.)*/}
      </div>
      <div>
        <Card title="star" content="Lorem Ipsum" />
        <Card title="star" content="Lorem Ipsum" />
        <Card title="star" content="Lorem Ipsum" />
      </div>
    </div>
  );
}

export default Testimonials;
