import Card from "../shared/Card";
import Heading from "../shared/Heading";
import { IoRibbonOutline } from "react-icons/io5";
import { AiOutlineTruck } from "react-icons/ai";
import { PiSealCheckLight } from "react-icons/pi";
import { library } from "../shared/text";

function Benefits() {
  return (
    <div className="benefits">
      <Heading className="benefits-heading" text="Our Benefits" />
      <div className="cards horizontal">
        <Card
          className="benefit-card-1"
          iconClassName="benefit-card-icon"
          icon={<IoRibbonOutline />}
          title="Best Quality"
          titleClassName="benefit-card-title-1"
          content={library.benefits.first}
          contentClassName="benefit-card-content-1"
        />
        <Card
          className="benefit-card-2"
          iconClassName="benefit-card-icon"
          icon={<AiOutlineTruck />}
          title="Free Shipping"
          titleClassName="benefit-card-title-2"
          content={library.benefits.second}
          contentClassName="benefit-card-content-2"
        />
        <Card
          className="benefit-card-3"
          iconClassName="benefit-card-icon"
          icon={<PiSealCheckLight />}
          title="Warranty"
          titleClassName="benefit-card-title-3"
          content={library.benefits.third}
          contentClassName="benefit-card-content-3"
        />
      </div>
    </div>
  );
}

export default Benefits;
