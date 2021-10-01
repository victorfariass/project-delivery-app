import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setCarrinho } from '../../service/setLocalStorage';
import { actionChangeTotalValue } from '../../redux/actions/index.action';
import Container from './Cards.styled';

export default function Cards({ product }) {
  const [quantity, setQuantity] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();
  const addItem = () => {
    setQuantity(quantity + 1);
  };

  const { name, price, url_image: urlImage, id } = product;

  const removeItem = () => {
    if (quantity === 0) setCarrinho({ id, name, price, quantity, urlImage });
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  // productInfos deve conter {id, name, price, quantity, urlImage}
  useEffect(() => {
    if (quantity > 0) {
      setDisabled(false);
      setCarrinho({ id, name, price, quantity, urlImage });
      dispatch(actionChangeTotalValue());
    } else {
      setDisabled(true);
    }
  }, [quantity, dispatch]);

  const changeQuantityByInput = ({ target }) => {
    const { value } = target;
    if (typeof Number(value) === 'number') {
      if (Number(value) === 0) {
        setCarrinho({ id, name, price, quantity, urlImage });
      } else {
        setQuantity(Number(value));
      }
    }
  };

  const handleClickInputClearEntry = () => {
    setQuantity('');
  };

  return (
    <Container>
      <main>
        <h2 data-testid={ `customer_products__element-card-price-${id}` }>
          {price.toString().replace('.', ',')}
        </h2>
        <img
          data-testid={ `customer_products__img-card-bg-image-${id}` }
          src={ urlImage }
          alt="Imagem"
        />
        <h3 data-testid={ `customer_products__element-card-title-${id}` }>
          {name}
        </h3>
        <div>
          <button
            data-testid={ `customer_products__button-card-rm-item-${id}` }
            type="button"
            onClick={ removeItem }
            disabled={ disabled }
          >
            -
          </button>
          <input
            data-testid={ `customer_products__input-card-quantity-${id}` }
            type="text"
            value={ quantity }
            onClick={ handleClickInputClearEntry }
            onChange={ changeQuantityByInput }
          />
          <button
            data-testid={ `customer_products__button-card-add-item-${id}` }
            type="button"
            onClick={ addItem }
          >
            +
          </button>
        </div>
      </main>
    </Container>
  );
}

Cards.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    url_image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};
