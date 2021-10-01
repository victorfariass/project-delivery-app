import styled from 'styled-components';

export const Container = styled.ul`background-color: #abd1c6;
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: auto;
  overflow: hidden;
  padding: 0;
  width: 79%;
`;

export const LeftItem = styled.li`border-radius: 0.25rem;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  text-align: center;
  text-decoration: none;
  width: 25rem;

  button {
    background: var(--card-background);
    border: none;
    border-radius: 0.25rem;
    color: var(--card-headline);
    cursor: pointer;
    font-family: Poppins , sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    padding: 0 0.8rem;
    transition: 250ms;

    &:hover {
      box-shadow: 0.2rem 0.2rem 0.1rem var(--headline);
      filter: brightness(1.3);
    }
  }
`;

export const RightItem = styled.li`align-items: center;
  border-radius: 0.25rem;
  color: var(--headline);
  display: flex;
  font-family: Nunito , sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  justify-content: space-between;
  padding: 0 20px;
  text-align: center;
  text-decoration: none;
  width: 24rem;

  button {
    background: var(--exit);
    border: none;
    border-radius: 0.25rem;
    color: var(--card-headline);
    cursor: pointer;
    font-family: Poppins , sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    padding: 0 0.5rem;
    transition: 250ms;

    &:hover {
      box-shadow: 0.2rem 0.2rem 0.1rem var(--headline);
      filter: brightness(1.3);
    }
  }
`;
