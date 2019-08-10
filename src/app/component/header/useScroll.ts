import { useCallback, useEffect } from 'react';

const useScroll = (callback: EventListener) => {
  const onScroll = useCallback(callback, [callback]);
  useEffect(() => {
    document.addEventListener('scroll', onScroll, true);
    return () => document.removeEventListener('scroll', onScroll, true);
  }, [onScroll]);
};

export default useScroll;
