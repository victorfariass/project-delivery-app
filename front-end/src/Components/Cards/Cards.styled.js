import styled from 'styled-components';

const Container = styled.div`display: inline-grid;
  grid-auto-rows: auto;
  grid-gap: 1rem;
  grid-template-columns: auto auto auto;
  margin-top: 5rem;
  text-align: center;

  main {
    background: var(--card-background);
    border-radius: 0.5rem;
    height: 33rem;
    transition: 250ms;
    width: 28rem;

    &:hover {
      box-shadow: 0.3rem 0.3rem 0.2rem var(--headline);
    }
  }

  h2 {
    color: var(--card-headline);
    font-size: 3rem;
  }

  img {
    height: 20rem;
  }

  h3 {
    color: var(--card-headline);
    font-size: 2rem;
  }

  div {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  button {
    background: var(--card-background);
    border: none;
    border-radius: 0.25rem;
    color: var(--card-headline);
    font-size: 2.5rem;
    font-weight: 600;
    width: 3rem;
  }

  input {
    height: 3rem;
    text-align: center;
    width: 4rem;
  }
`;

export default Container;
