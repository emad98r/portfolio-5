import SectionTitle from '../../Components/SectionTitles/SectionTitle';
import './Skills.scss';


import html from '../../Assets/Images/html.png';
import css from '../../Assets/Images/css.png';
import js from '../../Assets/Images/js.png';
import sass from '../../Assets/Images/scss.png';
import react from '../../Assets/Images/react.png';
import Jquery from '../../Assets/Images/j query.png';
import github from '../../Assets/Images/github.png';
import bootstrap from '../../Assets/Images/bootstrb.png';
import photoshop from '../../Assets/Images/photoshop.png';
import illustrator from '../../Assets/Images/Illustrator.png';
import adobeXd from '../../Assets/Images/adobe xd.png';

const Skills = () => {
  return (
    <div className='skills'>
      <div className="container">
        <SectionTitle title1='My' title2='Skills' />
        <div className="skills">
          <div className="skill">
            <div className="skill-logo">
              <img src={html} alt="" />
            </div>
            <div className="name-level">
              <h4>Html 5</h4>
              <div className="level" style={{ width: "100%" }}>100%</div>
            </div>
          </div>
          {/* ----------------------------------------- */}
          <div className="skill">
            <div className="skill-logo">
              <img src={css} alt="" />
            </div>
            <div className="name-level">
              <h4>css 3</h4>
              <div className="level" style={{ width: '90%' }}>90%</div>
            </div>
          </div>
          {/* ----------------------------------------- */}
          <div className="skill">
            <div className="skill-logo">
              <img src={js} alt="" />
            </div>
            <div className="name-level">
              <h4>Javascript</h4>
              <div className="level" style={{ width: '70%' }}>70%</div>
            </div>
          </div>
          {/* ----------------------------------------- */}
          <div className="skill">
            <div className="skill-logo">
              <img src={react} alt="" />
            </div>
            <div className="name-level">
              <h4>React</h4>
              <div className="level" style={{ width: '60%' }}>60%</div>
            </div>
          </div>
          {/* ----------------------------------------- */}
          <div className="skill">
            <div className="skill-logo">
              <img src={sass} alt="" />
            </div>
            <div className="name-level">
              <h4>Sass</h4>
              <div className="level" style={{ width: '90%' }}>90%</div>
            </div>
          </div>
          {/* ----------------------------------------- */}
          <div className="skill">
            <div className="skill-logo">
              <img src={Jquery} alt="" />
            </div>
            <div className="name-level">
              <h4>Jquery</h4>
              <div className="level" style={{ width: '40%' }}> 40%</div>
            </div>
          </div>
          {/* ----------------------------------------- */}
          <div className="skill">
            <div className="skill-logo">
              <img src={github} alt="" />
            </div>
            <div className="name-level">
              <h4>github</h4>
              <div className="level" style={{ width: '60%' }}>60%</div>
            </div>
          </div>
          {/* ----------------------------------------- */}
          <div className="skill">
            <div className="skill-logo">
              <img src={bootstrap} alt="" />
            </div>
            <div className="name-level">
              <h4>bootstrap</h4>
              <div className="level" style={{ width: '90%' }}>90%</div>
            </div>
          </div>
          {/* ----------------------------------------- */}
          <div className="skill">
            <div className="skill-logo">
              <img src={illustrator} alt="" />
            </div>
            <div className="name-level">
              <h4>Illustrator</h4>
              <div className="level" style={{ width: '90%' }}>90%</div>
            </div>
          </div>
          {/* ----------------------------------------- */}
          <div className="skill">
            <div className="skill-logo">
              <img src={photoshop} alt="" />
            </div>
            <div className="name-level">
              <h4>Photoshop</h4>
              <div className="level" style={{ width: '80%' }}>80%</div>
            </div>
          </div>
          {/* ----------------------------------------- */}
          <div className="skill">
            <div className="skill-logo">
              <img src={adobeXd} alt="" />
            </div>
            <div className="name-level">
              <h4>Adobe Xd</h4>
              <div className="level" style={{ width: '70%' }}>70%</div>
            </div>
          </div>
          {/* ----------------------------------------- */}
        </div>
      </div>
    </div >
  )
}

export default Skills