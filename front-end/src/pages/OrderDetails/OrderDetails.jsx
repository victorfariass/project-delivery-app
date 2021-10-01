import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import NavBar from '../../Components/NavBar/NavBar';
import ItemTable from '../../Components/ItemTable/ItemTable';
import { getUserInfo } from '../../service/getLocalStorage';
import { socket } from '../../socket/Socket';
import Container from './OrderDetails.styled';

export default function OrderDetails() {
  const [isLoading, setLoading] = useState(true);
  const [orderProducts, setOrderProducts] = useState([]);
  const [sellerInfos, setSellerInfos] = useState({});
  const { id } = useParams();
  const path = `http://localhost:3001/order/details/${id}`;
  const [orderDetailsInfos, setOrderDetailsInfos] = useState({});
  const [statusOrders, setstatusOrders] = useState('');

  const delivered = async () => {
    socket.emit('entregue', { id });
    setstatusOrders('Entregue');
  };

  const changeStatusOrders = (newStatus) => {
    setstatusOrders(newStatus);
  };

  socket.on('preparando', () => {
    console.log('customer preparando');
    changeStatusOrders('Preparando');
  });
  socket.on('emTransito', () => {
    console.log('customer transito');
    changeStatusOrders('Em Trânsito');
  });
  socket.on('entregue', () => {
    console.log('customer entregue');
    changeStatusOrders('Entregue');
  });

  const formataDate = () => {
    moment.locale();
    // moment(new Date('07-18-2013 UTC')).utc().format("YYYY-MM-DD HH:mm")
    const dateFormate = moment(orderDetailsInfos.sale_date)
      .utc()
      .format('DD-MM-YYYY')
      .replaceAll('-', '/');
    return dateFormate;
  };

  // export const pedidoSendoPreparado = (id) => {
  //   socket.emit('preparando', { id });
  //   return 'Preparando';
  // };
  // export const pedidoEmTransito = (id) => {
  //   socket.emit('emTransito', { id });
  //   return 'Em Trânsito';
  // };
  // export const pedidoEntregue = (id) => {
  //   socket.emit('entregue', { id });
  //   return 'Entregue';
  // };

  const getOrderDetails = async () => {
    setLoading(true);
    try {
      const response = await axios({
        method: 'get',
        url: path,
        headers: {
          authorization: getUserInfo().token,
        },
      });
      const { products, sellerId } = response.data;
      setOrderProducts(products);
      setSellerInfos(sellerId);
      setstatusOrders(response.data.status);
      setOrderDetailsInfos(response.data);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    getOrderDetails();
  }, []);

  const prefix = 'customer_order_details__';

  return (
    <Container>
      <NavBar label="PRODUTOS" text="MEUS PEDIDOS" />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>Detalhe do Pedido</h1>
          <h3 data-testid={ `${prefix}element-order-details-label-order-id` }>
            Pedido
            {' '}
            {orderDetailsInfos.id}
          </h3>
          <h3 data-testid={ `${prefix}element-order-details-label-seller-name` }>
            P. Vend:
            {' '}
            {sellerInfos.name}
          </h3>
          <h3 data-testid={ `${prefix}element-order-details-label-order-date` }>
            {formataDate()}
          </h3>
          <h3
            data-testid={ `${prefix}element-order-details-label-delivery-status` }
          >
            {statusOrders}
          </h3>
          <button
            type="button"
            data-testid={ `${prefix}button-delivery-check` }
            disabled={ statusOrders !== 'Em Trânsito' || statusOrders === 'Entregue' }
            onClick={ delivered }
          >
            Marcar Como Entregue
          </button>
          <ItemTable prefix={ prefix } orderProducts={ orderProducts } />
        </div>
      )}
    </Container>
  );
}
