import React, { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import { MainBoxContext } from '../context/ProfileContext';
import { Security } from './ProfileComponents/SecurityComp';
import { QnA } from './ProfileComponents/QnA';
import { PaymentMethods } from './ProfileComponents/PaymentMethodsComp';

const Sidebar: React.FC = () => {
  const { changeMainBoxContext } = useContext(MainBoxContext)!;

  const handleSidebarItemClick = (component: React.ReactNode) => {
    changeMainBoxContext(component);
  };

  return (
    <ListGroup>
      <ListGroup.Item onClick={() => handleSidebarItemClick(<Security />)}>
        Account Security
      </ListGroup.Item>
      <ListGroup.Item onClick={() => handleSidebarItemClick(<PaymentMethods />)}>
        Acceptable Payment Methods
      </ListGroup.Item>
      <ListGroup.Item onClick={() => handleSidebarItemClick(<QnA />)}>
        Q&A
      </ListGroup.Item>
    </ListGroup>
  );
};

export default Sidebar;