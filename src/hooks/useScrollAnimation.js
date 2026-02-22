import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Jika elemen masuk 10% ke layar, jalankan animasi
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, []);

  return { 
    elementRef, 
    // Class CSS transisi: Transparan & turun 20px saat belum terlihat
    animationClass: `transition-all duration-1000 ease-out ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }` 
  };
};