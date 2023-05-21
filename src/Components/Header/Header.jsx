import './Header.scss';
import { Link } from 'react-router-dom'
import { FaHome, FaUserAlt, FaHandsHelping } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { BsFillFileEarmarkCodeFill } from "react-icons/bs";

const Header = () => {
  return (
    <header>
      <Link to='/' className='nav-bar active' ><FaHome /></Link>
      <Link to='/AboutMe' className='nav-bar ' ><FaUserAlt /></Link>
      <Link to='/Projects' className='nav-bar ' ><BsFillFileEarmarkCodeFill /></Link>
      <Link to='/Contact' className='nav-bar ' ><MdMarkEmailRead /></Link>
      <Link to='/Services' className='nav-bar ' ><FaHandsHelping /></Link>
    </header>
  )
}

export default Header
