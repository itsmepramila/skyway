// SlideInComponent.js
import React, { useEffect, useState } from 'react';
import './SlideIn.css';

const SlideInComponent = ({ children, direction }) => {
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    setShouldShow(true);
  }, []);

  return (
    <div className={`slide-in slide-in-${direction}${shouldShow ? ' slide-in-appear-active' : ''}`}>
      {children}
    </div>
  );
};

export default SlideInComponent;
