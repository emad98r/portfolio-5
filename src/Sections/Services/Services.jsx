import SectionTitle from '../../Components/SectionTitles/SectionTitle';
import './Services.scss';

import responsive from '../../Assets/Images/RESPONSIVE DESIGN.jpg'
import design from '../../Assets/Images/WEB DESIGN.jpg'
import code from '../../Assets/Images/CLEAN CODE.jpg'
import support from '../../Assets/Images/SUPPORT.jpg'


const Services = () => {
  return (
    <div id='services' className='services'>
      <div className="container">
        <SectionTitle title1='what i' title2='provide' />
        <div className="service-wrapper">
          <div className="service-card">
            <div className="img-wrapper">
              <img src={responsive} alt="" />
            </div>
            <div className="info">
              <h3>RESPONSIVE website</h3>
              <p>Responsive web design is about creating web pages that look good on all devices! A responsive web design will automatically adjust for different screen sizes and viewpoints.</p>
            </div>
          </div>
          <div className="service-card">
            <div className="img-wrapper">
              <img src={design} alt="" />
            </div>
            <div className="info">
              <h3>WEB DESIGN</h3>
              <p>Get Your Beautiful Website Designed By Me At Very Reasonable Price and in the least amount of time.</p>
            </div>
          </div>
          <div className="service-card">
            <div className="img-wrapper">
              <img src={code} alt="" />
            </div>
            <div className="info">
              <h3>CLEAN CODE</h3>
              <p>Coding a clean code without errors or problems that affect the functioning of the web page or the looks of the web page</p>
            </div>
          </div>
          <div className="service-card">
            <div className="img-wrapper">
              <img src={support} alt="" />
            </div>
            <div className="info">
              <h3>GREAT SUPPORT</h3>
              <p>Getting support if there is any problem that shows in the webpage I coded.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services