import { AboutMe, EducationAndTrining, GetInTouch, Hero, Portfolio, Services, Skills } from '../../Sections/indexSec'
const Home = () => {
  return (
    <div className='home'>
      <div className='Container'>
        <Hero />
        <AboutMe />
        <Skills />
        <EducationAndTrining />
        <Portfolio />
        <GetInTouch />
        <Services />
      </div>
    </div>
  )
}

export default Home