import React, { createContext, useState, ReactNode } from 'react';
import { Security } from '../components/ProfileComponents/SecurityComp';

interface MainBoxContextType {
  mainBoxContext: ReactNode;
  setMainBoxContext: (context: ReactNode) => void;
  changeMainBoxContext: (context: ReactNode) => void;
}

export const MainBoxContext = createContext<MainBoxContextType>({
  mainBoxContext: null,
  setMainBoxContext: () => {},
  changeMainBoxContext: () => {},
});

export const MainBoxProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [mainBoxContext, setMainBoxContext] = useState<ReactNode>(<Security/>);

  const changeMainBoxContext = (context: ReactNode) => {
    setMainBoxContext(context);
  };

  return (
    <MainBoxContext.Provider value={{ mainBoxContext, setMainBoxContext, changeMainBoxContext }}>
      {children}
    </MainBoxContext.Provider>
  );
};