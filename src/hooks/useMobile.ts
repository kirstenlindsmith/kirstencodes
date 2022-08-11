import React from 'react';
import useEnhancedEffect from './useEnhancedEffect';

const useMobile = () => {
  // check to wait for jsdom to support the match media feature.
  // supported browsers have this built-in, but this adds extra protection.
  const supportsMatchMedia =
    window &&
    typeof window !== 'undefined' &&
    typeof window?.matchMedia !== 'undefined';
  const matchMedia = supportsMatchMedia ? window?.matchMedia : null;

  const mobileSize = '(max-width: 900px)';

  const [isMobile, setIsMobile] = React.useState<boolean>(
    () => !!(supportsMatchMedia && matchMedia?.(mobileSize).matches)
  );

  useEnhancedEffect(() => {
    let hookActive = true;

    if (!supportsMatchMedia || !matchMedia) {
      return undefined;
    }

    const mobileQuery = matchMedia(mobileSize);
    const updateMobileStatus = () => {
      // helps work around the safari implementation of matchMedia
      if (hookActive) {
        setIsMobile(mobileQuery.matches);
      }
    };
    updateMobileStatus();
    window.addEventListener('resize', updateMobileStatus);
    return () => {
      hookActive = false;
      window.removeEventListener('resize', updateMobileStatus);
    };
  }, [supportsMatchMedia, matchMedia]);

  return isMobile;
};

export default useMobile;
