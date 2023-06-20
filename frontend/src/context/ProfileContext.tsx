import React, { createContext, ReactNode } from 'react';
import { useLocalStorage } from '../hook/useLocalStorage';
import { Security } from '../components/ProfileComponents/SecurityComp';

interface MainBoxContextType {
  mainBoxContext: ReactNode;
  changeMainBoxContext: (context: ReactNode) => void;
}

export const MainBoxContext = createContext<MainBoxContextType>({
  mainBoxContext: null,
  changeMainBoxContext: () => {},
});

export const MainBoxProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  
  const [mainBoxContext, setMainBoxContext] = useLocalStorage<ReactNode>('mbcontext', <Security/>);

  const changeMainBoxContext = (context: ReactNode) => {
    setMainBoxContext(context);
  };

  return (
    <MainBoxContext.Provider value={{ mainBoxContext, changeMainBoxContext }}>
      {children}
    </MainBoxContext.Provider>
  );
};