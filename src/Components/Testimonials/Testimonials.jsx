import Card from "../shared/Card";
import Heading from "../shared/Heading";
import Menu from "../shared/Menu";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";
import Avatar, { genConfig } from "react-nice-avatar";

function Testimonials() {
  const nav = [<IoArrowBackCircleOutline />, <IoArrowForwardCircleOutline />];

  // Helper component for testimonial card content
  const TestimonialContent = ({ text, name, role, avatarConfig }) => (
    <div className="testimonials-card-content">
      <div className="testimonials-card-text">{text}</div>
      <div className="testimonials-card-profile horizontal">
        <Avatar
          className="testimonials-card-avatar"
          style={{ width: "4rem", height: "4rem" }}
          {...avatarConfig}
        />
        <span className="testimonials-card-info">
          {name}
          <br />
          {role}
        </span>
      </div>
    </div>
  );

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
          content={
            <TestimonialContent
              text="Duis at ultricies est, at tincidunt nibh. Donec varius, elit vel iaculis gravida, nisl libero eleifend lectus, eget ullamcorper mauris urna in dui."
              name="Jane Doe"
              role="Designer"
              avatarConfig={genConfig("jane@doe.com")}
            />
          }
        />
        <Card
          className="testimonials-card"
          title="⭐⭐⭐⭐⭐"
          content={
            <TestimonialContent
              text="Pellentesque sagittis nisi eget tellus laoreet faucibus. Quisque dignissim turpis leo, sed mollis dolor tristique ut. Donec lobortis risus turpis."
              name="John Smith"
              role="Developer"
              avatarConfig={genConfig("john@smith.com")}
            />
          }
        />
        <Card
          className="testimonials-card"
          title="⭐⭐⭐⭐⭐"
          content={
            <TestimonialContent
              text="Suspendisse vel odio at ligula ornare vulputate in euismod risus. Vestibulum maximus, augue sit amet fermentum porta, mauris mi egestas."
              name="Alex Lee"
              role="Product Manager"
              avatarConfig={genConfig("alex@lee.com")}
            />
          }
        />
      </div>
    </div>
  );
}

export default Testimonials;
