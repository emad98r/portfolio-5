import './Hero.scss';

import photo from '../../Assets/Images/mypic.png'
import { DownloadButton } from '../../Components/indexCom'
import Cv from '../../Assets/cv.pdf'
const Hero = () => {
  return (
    <div className='hero'>
      <div className="container">
        <div className="img-side">
          <div className="wrapper">
            <img src={photo} alt="" />
          </div>
          <DownloadButton dFile={Cv} name='download CV' />
        </div>
        <div className="info">
          <h1>EMAD RASHAD, WEB DEVELOPER</h1>
          <p>I'm Emad Rashad Mohammed, from Yemen, a web developer. I am a creative, artistic, and ambitious web designer and developer with a talent for thinking outside the box and coming up with innovative ideas and designs.</p>
          <i># frontend developer # freelancer # web developer</i>
        </div>
      </div>

    </div>
  )
}

export default Hero