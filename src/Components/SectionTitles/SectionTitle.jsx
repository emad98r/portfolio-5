import './SectionTitle.scss';

const SectionTitle = (props) => {
  return (
    <div className='title'>
      <h2>{props.title1} <span>{props.title2}</span></h2>
    </div>
  )
}

export default SectionTitle