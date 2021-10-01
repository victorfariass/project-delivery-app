import styled from 'styled-components';

const Container = styled.div`margin: auto;
  margin-top: 3rem;

  .order-details {
    margin: auto;
    text-align: left;
    width: 79%;
  }

  .card-details {
    background: var(--card-background);
    border-radius: 0.25rem;
    color: var(--card-headline);
    font-size: 1.2rem;
    line-height: 2.2rem;
    padding: 0 1rem;
    width: 20%;
  }

  .btn-delivery {
    background: var(--link);
    border: none;
    border-radius: 0.25rem;
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 0.5rem;
    padding: 0.5rem;
  }
`;

export default Container;
