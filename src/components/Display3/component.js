import React from 'react';
import Slider from 'react-slick';
import './style.scss';
import Tabs from '../Tabs/component';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TabbedSlider = () => {

  const settings = {
    dots: false,
    arrow: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const items = [
    { tabs: [
      { title: "Stocks", text: "Profit from the purchase and sale of assets.", link: '/' },
      { title: "Metals", text: "Capitalize on price fluctuations and hedge against economic uncertainties.", link: "/" },
      { title: "Forex", text: "Best trading mode for constant learners.", link: "/" },
      { title: "Fixed time spreads", text: "Best trading mode for constanOne of the simplest forms of trading todayt learners.", link: "/" },
      { title: "Commodities", text: "Buy and sell of raw goods or primary products, ranging from agricultural products to energy resources.", link: "/" },
    ]}, 
    { tabs: [
      { title: "Stocks1", text: "Profit from the purchase and sale of assets.", link: '/' },
      { title: "Metals1", text: "Capitalize on price fluctuations and hedge against economic uncertainties.", link: "/" },
      { title: "Forex1", text: "Best trading mode for constant learners.", link: "/" },
      { title: "Fixed time spreads", text: "Best trading mode for constanOne of the simplest forms of trading todayt learners.", link: "/" },
      { title: "Commodities", text: "Buy and sell of raw goods or primary products, ranging from agricultural products to energy resources.", link: "/" },
    ]}, 
    { tabs: [
      { title: "Stocks2", text: "Profit from the purchase and sale of assets.", link: '/' },
      { title: "Metals2", text: "Capitalize on price fluctuations and hedge against economic uncertainties.", link: "/" },
      { title: "Forex2", text: "Best trading mode for constant learners.", link: "/" },
      { title: "Fixed time spreads", text: "Best trading mode for constanOne of the simplest forms of trading todayt learners.", link: "/" },
      { title: "Commodities", text: "Buy and sell of raw goods or primary products, ranging from agricultural products to energy resources.", link: "/" },
    ]}, 
  ];
  
  return (
    <div className='display3'>
      <div className='container'>
        <div className='display3__content'>
          <div className='title'>Trading modes</div>
          <div className='subtitle'>that fit your trading style</div>
          <div className="slider-container">
            <Slider {...settings}>
              {items.map((slide, index) => (
                <div className='slider-item' key={index}>
                  <Tabs tabs={slide.tabs} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabbedSlider;
