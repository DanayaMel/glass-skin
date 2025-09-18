import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <div>
      <p>
        <FaMapMarkerAlt /> 1772 Nevskaya Street NW,
        <br />
        Suite 21389, Atlanta, GA
        <br />
        902344
      </p>
      <p>
        <FaPhoneAlt /> +1 789 123456
      </p>
      <p>
        <FaEnvelope /> hello@snallia.co
      </p>
    </div>
  );
}

export default Contact;
