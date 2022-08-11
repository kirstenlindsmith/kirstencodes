import React from 'react';

// useLayoutEffect fires synchonously after all DOM mutations complete
// standard useEffect is prefered to avoid blocking visual updates.
const useEnhancedEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

export default useEnhancedEffect;
