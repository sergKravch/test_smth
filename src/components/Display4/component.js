import React, {useEffect, useRef} from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import icon1 from '../../assets/images/icon_1';
import icon2 from '../../assets/images/icon_2';
import icon3 from '../../assets/images/icon_3';
import icon4 from '../../assets/images/icon_4';
import icon5 from '../../assets/images/icon_5';
import icon6 from '../../assets/images/icon_6';
import './style.scss';

gsap.registerPlugin(ScrollTrigger);

const Grid3Column = () => {
  const boxesRef = useRef([]);

  const animations = [
    {
      from: { y: '30%' },
      to: { y: '0%' }
    },
    {
      from: { y: '30%' },
      to: { y: '0%' }
    },
    {
      from: { y: '30%' },
      to: { y: '0%' }
    },
    {
      from: { x: '-50%' },
      to: { x: '0%' }
    },
    {
      from: { y: '30%' },
      to: { y: '0%' }
    },
    {
      from: { x: '50%' },
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
            end: 'bottom top',
            scrub: true,
          }
        }
      );
    });
  }, []);

  const items = [
      { title: "Spreads from 0 pips", text: "Low floating spreads on all types of accounts, spreads from 0 pips on PRO and VIP accounts.", icon: icon1 },
      { title: "Numerous strategies are allowed", text: "Using expert advisors, intraday trading, hedging, scalping etc.", icon: icon2 },
      { title: "Order execution from 0.01 s", text: "Order execution takes only fractions of a second during normal conditions on the market.", icon: icon3 },
      { title: "Leverage up to 1:3000", text: "An opportunity to choose convenient leverage from 1:1 to 1:3000.", icon: icon4 },
      { title: "230+ trading instruments", text: "We offer a range of currency pairs, precious metals for traders who want to earn on different markets.", icon: icon5 },
      { title: "Ultimate TRADE platform", text: "Best-in-class platform for trading according to your needs and preferences.", icon: icon6 },
  ];

  return (
    <div className='display4'>
      <div className='container'>
        <div className='display4__content'>
          <div className='title'>6 reasons</div>
          <div className='subtitle'>to choose Invest Wave</div>
          <div className="grid-container">
            {items.map((item, index) => (
              <div className='item' 
                key={index}
                ref={el => boxesRef.current[index] = el}>
                <div className='icon'>
                  {item.icon}
                </div>
                <div className='title'>{item.title}</div>
                <div className='text'>{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Grid3Column;