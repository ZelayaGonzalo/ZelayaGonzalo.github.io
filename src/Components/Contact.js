import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
import { useState } from 'react';
import { isMobile } from 'react-device-detect';
init("user_It7Osa2WvVuPFS7QbaKGc");

export default function Contact(props) {
    const [messageSent,setMessageSent] = useState(false)

    function sendEmail(e) {
      e.preventDefault();
      emailjs.sendForm('zelayagonzalo33', 'template_mjmvub4', e.target)
        .then((result) => {
            console.log(result.text);
            setMessageSent(true)
        }, (error) => {
            console.log(error.text);
        });
    }
  
    return (
        <div className={isMobile ? "aboutMe-container mobile-container" : "aboutMe-container"}>
            <div className={props.theme ? "form-container form-container-dark" : "form-container"}>
                <h2>{props.currentLanguage === 'english' ? props.text.english.contactMe.leave: props.text.spanish.contactMe.leave}:</h2>
                <form className="contact-form" onSubmit={sendEmail}>
                    <div className="info">
                        <label className="info-label">{props.currentLanguage === 'english' ? props.text.english.contactMe.name: props.text.spanish.contactMe.name}:
                            <input type="text" name="user_name" required/>
                        </label>
                        <label className="info-label">Email:
                            <input type="email" name="user_email" required/>
                        </label>  
                    </div>  
                    <label className="msg-label">{props.currentLanguage === 'english' ? props.text.english.contactMe.message: props.text.spanish.contactMe.message}:
                        <textarea className="text-area" name="message" />
                    </label>
                    <input className="submit-btn" type="submit" value={props.currentLanguage === 'english' ? props.text.english.contactMe.send: props.text.spanish.contactMe.send} />
                    <div className={messageSent ? "message-sent" : "hidden"}> {props.currentLanguage === 'english' ? props.text.english.contactMe.sent: props.text.spanish.contactMe.sent} </div>
                </form>
            </div>
            <div className={props.theme ? "other-contacts other-contacts-dark" : "other-contacts"}>
                <ul className="contact-items">
                    <li>    
                        <i className="fab fa-whatsapp"></i>
                        <a href="https://wa.me/543876830491" className="text">+54 3876830491</a>
                    </li>
                    <li>    
                        <i className="fas fa-envelope"></i>
                        <a href="mailto: zelayagonzalo33@gmail.com" className="text">zelayagonzalo33@gmail.com</a>
                    </li>
                    <li>    
                        <i className="fab fa-linkedin"></i>
                        <a href="https://www.linkedin.com/in/gonzalo-zelaya-724485208/" target="_blank" rel="noopener noreferrer" className="text">https://www.linkedin.com/in/gonzalo-zelaya-724485208/</a>
                    </li>
                    <li>    
                        <i className="fab fa-github"></i>
                        <a href="https://github.com/ZelayaGonzalo" target="_blank" rel="noopener noreferrer" className="text">https://github.com/ZelayaGonzalo</a>
                    </li>
                </ul>
            </div>
        </div>
    );
  }