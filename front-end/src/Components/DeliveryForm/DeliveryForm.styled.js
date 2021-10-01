import styled from 'styled-components';

const Container = styled.div`margin: auto;
  margin-top: 2rem;
  width: 79%;

  h1 {
    color: var(--headline);
  }

  form {
    align-items: center;
    display: flex;
    flex-flow: row wrap;
    margin-top: 2rem;

    label {
      font-size: 1.2rem;
      padding: 0 0.5rem;
    }

    select {
      border: none;
      border-radius: 0.25rem;
      font-size: 1.2rem;
      margin-left: 0.3rem;
      padding: 0.3rem;
    }

    input {
      border: none;
      border-radius: 0.25rem;
      font-size: 1.2rem;
      margin-left: 0.3rem;
      padding: 0.3rem 1rem;
    }

    .address {
      width: 20rem;
    }

    .number {
      width: 6rem;
    }

    button {
      background: var(--link);
      border: none;
      border-radius: 0.25rem;
      color: var(--headline);
      font-size: 1.5rem;
      font-weight: 600;
      margin-left: 1rem;
      padding: 0.2rem 0.5rem;
      transition: 250ms;

      &:hover {
        box-shadow: 0.2rem 0.2rem 0.1rem var(--headline);
        filter: brightness(1.1);
      }
    }
  }
`;

export default Container;
