import { useState, useEffect } from 'react';

export const useIsMobile = () => {
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth < 768); // Adjust this value as needed
    };

    window.addEventListener('resize', handleResize);

    handleResize(); // Call initially to set the initial screen size

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobileScreen;
}


