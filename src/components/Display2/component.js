import React, { useEffect, useRef } from 'react';
import './style.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../Button/button';
import arrow from '../../assets/images/arrow-right.svg';
import image1 from '../../assets/images/bg_1.png';
import image2 from '../../assets/images/bg_2.png';
import image3 from '../../assets/images/bg_3.png';

gsap.registerPlugin(ScrollTrigger);

const DisplaySecond = () => {
  const boxesRef = useRef([]);

  const animations = [
    {
      from: { y: '20%' },
      to: { y: '0%' }
    },
    {
      from: { x: '-50%' },
      to: { x: '0%' }
    },
    {
      from: { y: '20%' },
      to: { y: '0%' }
    }
  ];
  
  useEffect(() => {

    boxesRef.current.forEach((element, index) => {
      const animation = animations[index];
      gsap.set(element, animation.from);
    });

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

  return (
    <div className='display2'>
      <div className="container">
        <div className="block block-1">
          <div className='title'>23+ countries</div>
          <div className='text'>We support 7 languages, so traders from all over the world could enjoy and profit anytime</div>
          <Button text='Start Now' icon={arrow} link="/" />
          <div className='bg'><img src={image1} alt='Image' /></div>
        </div>
        <div className="block block-2"
          ref={el => boxesRef.current[0] = el}>
          <div className='title'>$4M+</div>
          <div className='text'>Average monthly payouts </div>
          <div className='bg'><img src={image2} alt='Image' /></div>
        </div>
        <div className="block block-3"
          ref={el => boxesRef.current[1] = el}>
          <div className='title'>10M+</div>
          <div className='text'>Trader accounts</div>
        </div>
        <div className="block block-4"
          ref={el => boxesRef.current[2] = el}>
          <div className='title'>3M+</div>
          <div className='text'>Monthly transactions</div>
          <div className='bg'><img src={image3} alt='Image' /></div>
        </div>
      </div>
    </div>
  );
};

export default DisplaySecond;
