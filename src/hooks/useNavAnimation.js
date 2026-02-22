import { useState, useRef, useEffect, useCallback } from 'react';

export const useNavAnimation = (defaultSelector = '.contact-btn') => {
  // Kita tambahkan top dan height agar mendukung pergerakan vertikal di Mobile
  const [tabStyle, setTabStyle] = useState({ 
    left: 0, 
    width: 0, 
    top: 0, 
    height: 0, 
    opacity: 0 
  });
  
  const containerRef = useRef(null);

  // Fungsi untuk menggerakkan background ke elemen yang di-hover
  const handleMouseEnter = useCallback((e) => {
    const { offsetLeft, offsetWidth, offsetTop, offsetHeight } = e.currentTarget;
    
    setTabStyle({
      left: offsetLeft,
      width: offsetWidth,
      top: offsetTop,
      height: offsetHeight,
      opacity: 1, // Tetap 1 agar tidak menghilang saat pindah
    });
  }, []);

  // Fungsi untuk mengembalikan background ke posisi default (Contact Me)
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

  // Efek untuk inisialisasi awal dan menangani perubahan ukuran layar
  useEffect(() => {
    // Beri sedikit delay agar browser selesai menghitung layout sebelum menentukan posisi
    const timeout = setTimeout(resetTab, 100);
    
    window.addEventListener('resize', resetTab);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('resize', resetTab);
    };
  }, [resetTab]);

  return { tabStyle, containerRef, handleMouseEnter, resetTab };
};  