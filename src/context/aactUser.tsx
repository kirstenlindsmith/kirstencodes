import React from 'react';

export const AACTUserContext = React.createContext<{
  username: string;
  setUsername: (username: string) => void;
} | null>(null);

export const AACTUserProvider = ({
  children,
  username,
  setUsername,
}: {
  children: React.ReactNode;
  username: string;
  setUsername: (username: string) => void;
}) => (
  <AACTUserContext.Provider
    value={{
      username,
      setUsername,
    }}
  >
    {children}
  </AACTUserContext.Provider>
);
