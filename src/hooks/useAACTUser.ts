import React from 'react';
import { AACTUserContext } from '../context/aactUser';

const useAACTUser = () => {
  const context = React.useContext(AACTUserContext);

  if (context === undefined) {
    throw new Error(
      'The useAACTUser hook must be used within an AACTUserProvider component'
    );
  }
  return context;
};

export default useAACTUser;
