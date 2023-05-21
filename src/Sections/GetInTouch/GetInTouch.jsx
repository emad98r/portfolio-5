import SectionTitle from '../../Components/SectionTitles/SectionTitle';
import './GetInTouch.scss';
import { FaMapMarker, FaPhoneAlt, FaEnvelope, FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaLocationArrow } from "react-icons/fa";


const GetInTouch = () => {
  return (
    <div className='get-in-touch'>
      <SectionTitle title1='get in' title2='touch' />
      <div className="container">
        <div className="info">
          <h3>Don't be shy !</h3>
          <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
          <div className="contact-info">
            <section>
              <FaMapMarker />
              <div className="data">
                <h5>current address</h5>
                <p>Hyderabad / india</p>
              </div>
            </section>
            <section>
              <FaEnvelope />
              <div className="data">
                <h5>EMAIL</h5>
                <p>emadrashadm@gmail.com</p>
              </div>
            </section>
            <section>
              <FaPhoneAlt />
              <div className="data">
                <h5>CALL</h5>
                <p>+919642672923</p>
              </div>
            </section>
          </div>
          <div className="s-m">
            <a href="https://www.facebook.com/profile.php?id=100005185022147&sk=likes" target='_bolck'><FaFacebookF /></a>
            <a href="https://www.instagram.com/3mad_7/?r=nametag" target='_bolck'><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/emad-rashad-9164041b6/" target='_bolck'><FaLinkedinIn /></a>
            <a href="https://github.com/emad98r" target='_bolck'><FaGithub /></a>
          </div>
        </div>
        <form action="https://formsubmit.co/emadrashadm@gmail.com" method="POST">
          <div className="your-info">
            <input type="text" name="name" placeholder='Your Name' required />
            <input type="email" name="email" placeholder='Your Email' required />
          </div>
          <input type="text" name="subject" placeholder='Subject' />
          <textarea type='text' name='message' cols='30' rows='10' placeholder='Message' required></textarea>
          <button type="submit"><FaLocationArrow />Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default GetInTouch