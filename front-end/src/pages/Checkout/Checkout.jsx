import React from 'react';
import DeliveryForm from '../../Components/DeliveryForm/DeliveryForm';
import ItemTable from '../../Components/ItemTable/ItemTable';
import NavBar from '../../Components/NavBar/NavBar';
import Container from './Checkout.styled';

export default function Checkout() {
  return (
    <Container>
      <NavBar label="PRODUTOS" text="MEUS PEDIDOS" />
      <ItemTable prefix="customer_checkout__" />
      <DeliveryForm />
    </Container>
  );
}
