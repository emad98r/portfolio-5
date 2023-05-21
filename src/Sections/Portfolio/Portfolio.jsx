import './Portfolio.scss'
import SectionTitle from '../../Components/SectionTitles/SectionTitle'
import ProjectsData from '../../Data/ProjectsData'
import { MainButton } from '../../Components/indexCom'
import { Link } from 'react-router-dom'


const Portfolio = () => {
  return (
    <div className='portfolio'>
      <div className="container">
        <SectionTitle title1='MY' title2='portfolio' />
        <div className="all-projects">
          {ProjectsData.map(item => (
            <div className='project' key={item.id}>
              <img src={item.img} />
              <div className="links">
                <a target='_block' className='web-link' href={item.webLink}>view</a>
                <a target='_block' className='git-link' href={item.gitLink}>github</a>
              </div>
            </div>
          ))}
        </div>
        <Link to='Projects' className='pages-but' >
          <MainButton name='more' />
        </Link>
      </div>
    </div>
  )
}

export default Portfolio