import React, {useState, useEffect, useRef} from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import image from '../../assets/images/img_6.png';
import arrow from '../../assets/images/arrow-right.svg';
import './style.scss';

gsap.registerPlugin(ScrollTrigger);

const Display6 = () => {
  const [activeBlock, setActiveBlock] = useState(1);
  const boxesRef = useRef([]);

  const animations = [
    {
      from: { y: '30%' },
      to: { y: '0%' }
    },
    {
      from: { x: '30%' },
      to: { x: '0%' }
    },
    {
      from: { x: '35%' },
      to: { x: '0%' }
    },
    {
      from: { x: '40%' },
      to: { x: '0%' }
    }
  ];

  useEffect(() => {

    boxesRef.current.forEach((element, index) => {
      const animation = animations[index];

      gsap.fromTo(element, 
        animation.from,
        {
          ...animation.to,
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'bottom center',
            scrub: true,
          }
        }
      );
    });
  }, []);

  const items = [
    { title: "Risk-free trades", text: "Explore the platform and test strategies for free."},
    { title: "Market", text: "Customize the platform with unique tools to elevate your trading skills."},
    { title: "Personal manager", text: "Get exclusive one-on-one guidance with a trading expert."},
  ];
  
  return (
    <div className='display6'>
      <div className='container'>
        <div className='display6__content'>
          <div className='block-1'>
            <div className='title'>A Platform</div>
            <div className='subtitle'>that Works for You</div>
            <div className='text'>These features will help you reach your goals.</div>
          </div>
          <div className='block-2'
            ref={el => boxesRef.current[0] = el}>
            <img src={image} alt='Image' />
          </div>
          <div className="block-3">
              {items.map((item, index) => (
                <div className={`item ${activeBlock === index + 1 ? 'active' : ''}`} 
                  key={index} onMouseEnter={() => setActiveBlock(index + 1)}
                  ref={el => boxesRef.current[index + 1] = el}>
                  <div className='item-icon'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className='item-content'>
                    <div className='item-name'>{item.title}</div>
                    <div className='item-text'>{item.text}</div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display6;
