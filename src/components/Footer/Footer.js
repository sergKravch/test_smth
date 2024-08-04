import React from 'react';
import logo from '../../assets/images/logo.svg';
import './style.scss';

const Footer = () => {

  const items = [
    { title: "Contacts:", link: "#"},
    { title: "Terms & Conditions", link: "#"},
    { title: "Address:", link: "#"},
    { title: "Privacy policy", link: "#"},
    { title: "E-Mail:", link: "#"},
    { title: "AML policy", link: "#"},
  ];
  
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer_content'>
          <div className="left-side">
            <div className='logo-wrap'>
              <img src={logo} alt="Logo" className="header-logo" />
            </div>
            <div className='footer-nav'>
              {items.map((item, index) => (
                  <div className='item-block' key={index}>
                    <a href={item.link} className='nav-title'>{item.title}</a>
                  </div>
                ))}
            </div>
          </div>
          <div className='right-side'>
            <div className='nav-title'>Disclaimer</div>
            <div className='text'>Trading involves risk and is not suitable for all investors. Past performance is not indicative of future results. The information provided on Alpha Prime platform is for educational and informational purposes only and should not be construed as investment advice. Alpha Prime does not guarantee the accuracy, completeness, or timeliness of the information provided on its platform. Users of Alpha Prime platform are solely responsible for their own investment decisions and should seek the advice of a qualified investment professional before making any investment decisions. Alpha Prime is not responsible for any losses that may result from using its platform or any information provided on its platform. Trading securities on Alpha Prime platform involves substantial risk and is not appropriate for everyone. Users should consider their investment objectives, risk tolerance, and financial situation before making any investment decisions.</div>
            <div className='copyright'>Alpha Prime © 2023. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
