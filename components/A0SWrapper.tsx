'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const  AOSWrapper = ({ children }: { children: React.ReactNode }) =>{
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
      once: true
    });
    AOS.refresh();
  }, []);

  return <>{children}</>;
}
export default  AOSWrapper;