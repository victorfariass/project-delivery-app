import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NavBar from '../../Components/NavBar/NavBar';
import OrderCard from '../../Components/OrderCard/OrderCard';
import Container from './CustomerOrders.styled';

import { requestAllOrders } from '../../redux/actions/index.action';

export default function CustomerOrders() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.loadingReducer);
  const { orders } = useSelector(
    (state) => state.ordersReducer,
  );

  useEffect(() => {
    dispatch(requestAllOrders());
  }, [dispatch]);
  return (
    <Container>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <NavBar label="PRODUTOS" text="MEUS PEDIDOS" />
          {orders.map((order, index) => (
            <OrderCard
              path="customer"
              key={ index }
              order={ order }
              prefix="customer_orders"
              address=""
              idPedido={ index + 1 }
            />
          ))}
        </div>
      )}
    </Container>
  );
}
