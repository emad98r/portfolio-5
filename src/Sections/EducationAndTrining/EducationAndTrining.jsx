import './EducationAndTrining.scss'
import SectionTitle from '../../Components/SectionTitles/SectionTitle'
import EductionData from '../../Data/EducationData'
import TriningCaData from '../../Data/TriningCaData'
import OnlineCoursesData from '../../Data/OnlineCoursesData'

const EducationAndTrining = () => {
  return (
    <div className='edu-trn'>
      <div className="container">
        <div className="edc">
          <SectionTitle title1='EXPERIENCE &' title2='EDUCATION' />
          <div className="edc-info">
            {EductionData.map(item => (
              <div className='info' key={item.id}>
                <b>{item.date}</b>
                <h2> <i>{item.icon}</i> {item.title} <span>{item.collage}</span> </h2>

                <p>{item.p}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
      <hr />
      <div className="container">
        <div className="trn">
          <SectionTitle title2='COURSES' />
          <div className="trn-info">
            {TriningCaData.map(item => (
              <div className='info' key={item.id}>
                <b>{item.date}</b>
                <h2> <i>{item.icon}</i> {item.title} <span>{item.collage}</span> </h2>

              </div>
            ))}
          </div>
        </div>
      </div>
      <hr />
      <div className="container">
        <div className="trn">
          <SectionTitle title1='ONLINE' title2='COURSES' />
          <div className="trn-info">
            {OnlineCoursesData.map(item => (
              <div className='info' key={item.id}>
                <b>{item.date}</b>
                <h2> <i>{item.icon}</i> {item.title} <span>{item.collage}</span> </h2>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EducationAndTrining