import React, {useState} from "react";
import PropTypes from 'prop-types';
import Button from '../Button/button';
import arrow from '../../assets/images/arrow-right.svg';
import './style.scss';

const Tabs = ({ tabs }) => {

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className='item'>
      <div className="tab-titles">
        {tabs.map((tab, index) => (
          <div className='tab-titles__item' key={index}>
            <div className='item-index'>{index + 1 < 10 ? `0${index + 1}` : index + 1}</div>
            <button
              key={index}
              className={`btn ${activeTab === index ? 'active' : ''}`}
              onClick={() => handleTabClick(index)}
            >
              {tab.title}
              <i className='icon'>
                <img src={arrow} alt='Icon' />
              </i>
            </button>
          </div>
        ))}
      </div>
      <div className="tab-content">
        {tabs.map((tab, index) => (
          <div className={`tab-content__item ${activeTab === index ? 'active' : ''}`} 
            key={index}>
            <div className='title'>
              {tab.title}
            </div>
            <div className='text'>
              {tab.text}
            </div>
            <Button text='Start Now' icon={arrow} link={tab.link} />
            </div>
        ))}
      </div>
    </div>
  )
}

Tabs.propTypes = {
  tabs: PropTypes.array.isRequired,
};

export default Tabs;