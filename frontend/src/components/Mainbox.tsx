import React, { useContext } from 'react';
import { MainBoxContext } from '../context/ProfileContext';

interface MainBoxProps {
    // Define any props for the MainBox component if needed
    children: React.ReactNode;
  }
const MainBox: React.FC<MainBoxProps> = ({ children }) => {
    const { mainBoxContext } = useContext(MainBoxContext)!;
  
    return (
      <div>
        <p>Context: {mainBoxContext}</p>
        {children}
      </div>
    );
  };

  export default MainBox;