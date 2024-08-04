import React, {useState} from 'react';
import Button from '../Button/button';
import logo from '../../assets/images/logo.svg';
import arrow from '../../assets/images/arrow-right.svg';
import './style.scss';


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return <header className="header">
          <div className='container'>
            <div className={`nav ${menuOpen ? 'open' : ''}`}>
              <img src={logo} alt="Logo" className="header-logo" />
              <nav className="header-menu">
                <ul>
                  <li><a href="/" className='nav-item'>Markets</a></li>
                  <li><a href="/" className='nav-item'>Fixed Time Trades</a></li>
                  <li><a href="/" className='nav-item'>Accounts</a></li>
                  <li><a href="/" className='nav-item'>Affiliate program</a></li>
                  <li><a href="/" className='nav-item'>About Us</a></li>
                  <li className='last'><Button text="Start Now" icon={arrow} link="/"></Button></li>
                </ul>
              </nav>
            </div>
            <div className='mobile-content'>
              <div className="language-switcher">
                <button className='current'>
                  EN
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L6.15152 6L11 1" stroke="#313131" strokeOpacity="0.7" stroke-width="1.5"/>
                  </svg>
                </button>
                <button className='lang-hide'>UA</button>

              </div>
              <div className={`burger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </header>;
};

export default Header;