import ContactForm from "./ContactForm";
import SocialMedia from "./SocialMedia";

export default function Contacts() {
  return (
    <>
      <div className="row mt-2">
        <div className="col-md-6 d-flex align-items-stretch">
          <div className="info-box">
            <i className="bx bx-map"></i>
            <h3>My Address</h3>
            <p>Stockholm, Sweden</p>
          </div>
        </div>
        <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
          <div className="info-box">
            <i className="bx bx-share-alt"></i>
            <h3>Social Profiles</h3>
            <SocialMedia />
          </div>
        </div>
        <div className="col-md-6 mt-4 d-flex align-items-stretch">
          <div className="info-box">
            <i className="bx bi-envelope-at"></i>
            <h3>Email Me</h3>
            <p>viktorysafsweden@gmail.com</p>
          </div>
        </div>
        <div className="col-md-6 mt-4 d-flex align-items-stretch">
          <div className="info-box">
            <i className="bx bi-whatsapp"></i>
            <h3>Text Me on Telegram/WhatsApp</h3>
            <p>(+46) 768848754</p>
          </div>
        </div>
      </div>
      <ContactForm />
    </>
  );
}
