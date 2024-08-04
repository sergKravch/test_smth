import React from 'react';
import Slider from 'react-slick';
import image1 from '../../assets/images/slide1.png';
import image2 from '../../assets/images/slide2.png';
import image3 from '../../assets/images/slide3.png';
import image4 from '../../assets/images/slide4.png';
import './style.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TabbedSlider = () => {

  const settings = {
    dots: true,
    arrow: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const items = [
    { title: "Olivia", text: "Invest Wave has truly revolutionized my trading experience. The comprehensive analytics tools provided have been instrumental in helping me make well-informed investment decisions. I highly recommend this platform to anyone serious about enhancing their trading game.", image: image1 },
    { title: "Ethan", text: "As a seasoned trader, I've tried various trading platforms, and Invest Wave stands out for its reliability and speed. The execution of trades is lightning-fast, ensuring that I can capitalize on market opportunities in real-time. The platform's robust security measures also give me peace of mind, knowing that my investments are in safe hands.", image: image2 },
    { title: "Maya", text: "I've been using Invest Wave for a few months now, and I'm thoroughly impressed with the customer support they offer. The responsive and knowledgeable support team has been instrumental in resolving any issues promptly. It's refreshing to know that I can rely on a platform that prioritizes customer satisfaction.", image: image3 },
    { title: "Liam", text: "Invest Wave's intuitive mobile app has been a game-changer for me. The ability to trade on the go without sacrificing functionality is a major advantage. I can stay connected to the markets and manage my portfolio effortlessly, whether I'm at home or on the move. Highly recommend this platform for traders who value flexibility and convenience.", image: image4 },
  ];
  
  return (
    <div className='display5'>
      <div className='container'>
        <div className='display5__content'>
          <div className='title'>Reviews</div>
          <div className="slider-container">
            <Slider {...settings}>
              {items.map((slide, index) => (
                <div className='slider-item' key={index}>
                  <div className='slide-image'>
                    <img src={slide.image} alt='Photo' />
                  </div>
                  <div className='slide-content'>
                    <div className='slide-name'>{slide.title}</div>
                    <div className='slide-text'>{slide.text}</div>
                  </div>
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
