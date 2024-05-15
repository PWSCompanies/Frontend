import { useEffect, useState } from 'react';

const useMediaBreakpoint = (maxWidth) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMatches(window.innerWidth <= maxWidth);
    };

    handleResize(); // Check on initial render

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [maxWidth]);

  return matches;
};

export default useMediaBreakpoint;