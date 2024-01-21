import React, { useEffect, useState } from 'react';
import './scrollDiv.css';

const ScrollDiv = ({ children }) => {
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    const handleScroll = () => {
      const divElement = document.getElementById('scroll-div');
      if (divElement && isInViewport(divElement)) {
        setShouldShow(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      id="scroll-div"
      className={shouldShow ? 'scroll-div-show' : 'scroll-div-hide'}
    >
      {children}
    </div>
  );
};

export default ScrollDiv;
