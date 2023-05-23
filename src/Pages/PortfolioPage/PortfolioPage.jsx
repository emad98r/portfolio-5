import './PortfolioPage.scss'
import ProjectsData from '../../Data/ProjectsData'
import SectionTitle from '../../Components/SectionTitles/SectionTitle'


const PortfolioPage = () => {


  return (
    <div className='portfolio-page'>
      <div className="container">
        <SectionTitle title1='MY' title2='portfolio' />
        <div className="all-projects">
          {ProjectsData.map(item => (
            <div className='project' id={item.proName} key={item.id}>
              <img src={item.img} />
              <div className="links">
                <a className='web-link' href={item.webLink}>view</a>
                <a className='git-link' href={item.gitLink}>github</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>)
}

export default PortfolioPage