import styled from 'styled-components';

const Container = styled.div`text-align: left;

  h1 {
    color: var(--headline);
    font-size: 3rem;
    font-weight: 700;
    padding: 2rem 0;
    text-align: center;
  }

  form {
    align-items: center;
    background: var(--card-background);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    height: 22rem;
    margin: auto;
    width: 25rem;
  }

  label {
    color: var(--card-headline);
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
    font-weight: 600;
    margin-top: 10px;
  }

  input {
    border-radius: 0.25rem;
    font-size: 1rem;
    margin-top: 5px;
    padding: 0.5rem;
    width: 22rem;
  }

  button {
    background: var(--link);
    border: none;
    border-radius: 0.25rem;
    color: var(--headline);
    font-family: Poppins , monospace;
    font-size: x-large;
    font-weight: 600;
    margin-top: 1.5rem;
    padding: 4px;
    transition: 250ms;
    width: 22rem;
  }
`;

export default Container;
