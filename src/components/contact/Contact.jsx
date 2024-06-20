import "./contact.css";
import mail from "../../../public/mail.png";
import user from "../../../public/user.png";
import { useRef } from "react";
const Contact = () => {
  const nameElement = useRef();
  const emailElement = useRef();
  const messageElement = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      nameElement.current.value,
      emailElement.current.value,
      messageElement.current.value
    );
    nameElement.current.value = "";
    emailElement.current.value = "";
    messageElement.current.value = "";
  };
  return (
    <div className="contactContainer" id="contactMe">
      <div className="contacts">
        <div className="contactLeft">
          <div className="contactTop">
            <p>Get In Touch</p>
          </div>
          <div className="contactBottom">
            <p>
              Thanks for stopping by, I'm currently looking for new
              opportunities. If you think we might be a good fit for one
              another, Send me a mail or Contact here..
            </p>
          </div>
        </div>
        <div className="contactRight">
          <div className="formContainer">
            <form method="POST" action="" onSubmit={handleSubmit}>
              <div className="input input1">
                {/* <label htmlFor="name" className="name">
                Name
              </label> */}
                <div className="userDiv">
                  <img src={user} alt="" className="user" />
                  <input
                    type="text"
                    name=""
                    id="name"
                    placeholder="Your name"
                    ref={nameElement}
                  />
                </div>
              </div>
              <div className="input input2">
                {/* <label htmlFor="email" className="name">
                Email
              </label> */}
                <div className="emailDiv">
                  <img src={mail} alt="" className="mail" />
                  <input
                    type="text"
                    name=""
                    id="email"
                    placeholder="email"
                    ref={emailElement}
                  />
                </div>
              </div>
              <div className="input input3">
                {/* <label htmlFor="message" className="name">
                  Message
                </label> */}
                <textarea
                  name="message"
                  id="message"
                  placeholder="Enter your message here..."
                  ref={messageElement}
                ></textarea>
              </div>
              <div className="btnContainer">
                <button type="submit" className="btnCss">
                  Hit me up!
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
