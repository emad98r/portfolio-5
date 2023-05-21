
import './Buttons.scss';

const MainButton = (props) => {
  return (
    <button className='main-but'>
      {props.name}
    </button>
  )
}
const SubButton = (props) => {
  return (
    <button className='sub-but'>
      {props.name}
    </button>
  )
}
const DownloadButton = (props) => {
  return (
    <button className='download-but'>
      <a href={props.dFile} download=''>{props.name}</a>
    </button>
  )
}

export default MainButton
export { SubButton }
export { DownloadButton } 