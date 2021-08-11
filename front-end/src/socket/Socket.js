import { io } from 'socket.io-client';

export const socket = io('http://localhost:3001/');

export const pedidoSendoPreparado = (id) => {
  socket.emit('preparando', { id });
  return 'Preparando';
};

export const pedidoEmTransito = (id) => {
  socket.emit('emTransito', { id });
  return 'Em Trânsito';
};

export const pedidoEntregue = (id) => {
  socket.emit('entregue', { id });
  return 'Entregue';
};

// export default Socket;
