import Card from "../shared/Card";
import Heading from "../shared/Heading";
import Menu from "../shared/Menu";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";

function Testimonials() {
  const nav = [<IoArrowBackCircleOutline />, <IoArrowForwardCircleOutline />];

  return (
    <div className="testimonials section--cream">
      <div className="horizontal">
        <Heading className="testimonials-heading" text="Testimonials" />
        {/*TODO: Add actions for buttons. (Where should Icons go? Maybe make this a menu component.)*/}
        <Menu className="testimonials-nav horizontal" items={nav} />
      </div>
      <div className="testimonials-cards horizontal">
        <Card
          className="testimonials-card"
          title="⭐⭐⭐⭐⭐"
          content="Duis at ultricies est, at tincidunt nibh. Donec varius, elit vel iaculis gravida, nisl libero eleifend lectus, eget ullamcorper mauris urna in dui."
        />
        <Card
          className="testimonials-card"
          title="⭐⭐⭐⭐⭐"
          content="Pellentesque sagittis nisi eget tellus laoreet faucibus. Quisque dignissim turpis leo, sed mollis dolor tristique ut. Donec lobortis risus turpis."
        />
        <Card
          className="testimonials-card"
          title="⭐⭐⭐⭐⭐"
          content="Suspendisse vel odio at ligula ornare vulputate in euismod risus. Vestibulum maximus, augue sit amet fermentum porta, mauris mi egestas."
        />
      </div>
    </div>
  );
}

export default Testimonials;
