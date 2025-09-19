import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <div
      className="contact vertical"
      style={{ display: "flex", alignItems: "flex-start" }}
    >
      <div className="horizontal contact">
        <span style={{ display: "inline-block" }}>
          <FaMapMarkerAlt className="contact-icon" />
        </span>
        <span style={{ display: "inline-block" }}>
          <p>
            1772 Nevskaya Street NW,
            <br />
            Suite 21389, Atlanta, GA
            <br />
            902344
          </p>
        </span>
      </div>
      <br />
      <div className="horizontal">
        <span style={{ display: "block" }}>
          <FaPhoneAlt className="contact-icon" />
        </span>
        <span style={{ display: "inline-block" }}>
          <p>+1 789 123456</p>
        </span>
      </div>
      <br />
      <div className="horizontal">
        <span style={{ display: "inline-block" }}>
          <FaEnvelope className="contact-icon" />
        </span>
        <span style={{ display: "inline-block" }}>
          <p>hello@snallia.co</p>
        </span>
      </div>
    </div>
  );
}

export default Contact;
