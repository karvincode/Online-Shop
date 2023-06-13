import React, { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import { MainBoxContext } from '../context/ProfileContext';
import { Security } from './ProfileComponents/SecurityComp';
import { Wishlist } from './ProfileComponents/WishListComp';
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
        Payment Methods
      </ListGroup.Item>
      <ListGroup.Item onClick={() => handleSidebarItemClick(<Wishlist />)}>
        Wishlist
      </ListGroup.Item>
    </ListGroup>
  );
};

export default Sidebar;