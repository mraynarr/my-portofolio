import { useState, useRef, useEffect, useCallback } from 'react';

export const useNavAnimation = (defaultSelector = '.contact-btn') => {
  
  const [tabStyle, setTabStyle] = useState({ 
    left: 0, 
    width: 0, 
    top: 0, 
    height: 0, 
    opacity: 0 
  });
  
  const containerRef = useRef(null);

  const handleMouseEnter = useCallback((e) => {
    const { offsetLeft, offsetWidth, offsetTop, offsetHeight } = e.currentTarget;
    
    setTabStyle({
      left: offsetLeft,
      width: offsetWidth,
      top: offsetTop,
      height: offsetHeight,
      opacity: 1,
    });
  }, []);

  const resetTab = useCallback(() => {
    const defaultBtn = containerRef.current?.querySelector(defaultSelector);
    if (defaultBtn) {
      setTabStyle({
        left: defaultBtn.offsetLeft,
        width: defaultBtn.offsetWidth,
        top: defaultBtn.offsetTop,
        height: defaultBtn.offsetHeight,
        opacity: 1,
      });
    } else {
      setTabStyle((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [defaultSelector]);


  useEffect(() => {

    const timeout = setTimeout(resetTab, 100);
    
    window.addEventListener('resize', resetTab);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('resize', resetTab);
    };
  }, [resetTab]);

  return { tabStyle, containerRef, handleMouseEnter, resetTab };
};  