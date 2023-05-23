import './Header.scss';
import { Link } from 'react-router-dom'
import { FaHome, FaUserAlt, FaHandsHelping } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { BsFillFileEarmarkCodeFill } from "react-icons/bs";
import { useState } from 'react';

const Header = () => {
  const [activeLink, setActiveLink] = useState('/');
  const handleLinkClick = (to) => {
    setActiveLink(to);
  };

  return (
    <header>
      <Link to='/' className={`nav-bar ${activeLink === '/' ? 'active' : ''}`}
        onClick={() => handleLinkClick('/')} ><FaHome /></Link>
      <Link to='/AboutMe' className={`nav-bar ${activeLink === '/AboutMe' ? 'active' : ''}`}
        onClick={() => handleLinkClick('/AboutMe')} ><FaUserAlt /></Link>
      <Link to='/Projects' className={`nav-bar ${activeLink === '/Projects' ? 'active' : ''}`}
        onClick={() => handleLinkClick('/Projects')} ><BsFillFileEarmarkCodeFill /></Link>
      <Link to='/Contact' className={`nav-bar ${activeLink === '/Contact' ? 'active' : ''}`}
        onClick={() => handleLinkClick('/Contact')} ><MdMarkEmailRead /></Link>
      <Link to='/Services' className={`nav-bar ${activeLink === '/Services' ? 'active' : ''}`}
        onClick={() => handleLinkClick('/Services')} ><FaHandsHelping /></Link>
    </header>
  )
}

export default Header





