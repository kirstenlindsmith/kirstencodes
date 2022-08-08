import React from 'react';

export const AACTUserContext = React.createContext<{
  username: string;
  setUsername: (username: string) => void;
} | null>(null);

export const AACTUserProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [username, setUsername] = React.useState<string>('');

  return (
    <AACTUserContext.Provider
      value={{
        username,
        setUsername,
      }}
    >
      {children}
    </AACTUserContext.Provider>
  );
};
