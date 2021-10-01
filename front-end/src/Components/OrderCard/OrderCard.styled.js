import styled from 'styled-components';

const Container = styled.button`align-items: center;
  border: none;
  border-radius: 0.25rem;
  color: var(--headline);
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  padding: 1rem;
  transition: 250ms;
  width: 30rem;

  &:hover {
    box-shadow: 2px 2px 1px 1px var(--headline);
    filter: brightness(1.2);
  }

  .order-number {
    font-size: 1.5rem;

    span {
      font-weight: 600;
    }
  }

  .order-status {
    background: var(--card-background);
    border-radius: 0.25rem;
    color: var(--card-headline);
    font-size: 2rem;
    padding: 1rem;
  }

  .order-date {
    font-size: 1.5rem;
    font-weight: 600;
  }

  .order-total {
    background: var(--card-background);
    border-radius: 0.25rem;
    color: var(--card-headline);
    padding: 0.3rem;
  }
`;

export default Container;
