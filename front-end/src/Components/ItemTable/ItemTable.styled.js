import styled from 'styled-components';

const Container = styled.div`margin-top: 2rem;

  h1 {
    margin: auto;
    width: 79%;
  }

  table {
    border-spacing: 0 0.5rem;
    margin: auto;
    margin-bottom: 1rem;
    width: 79%;

    th {
      color: var(--headline);
      font-size: 1.2rem;
      font-weight: 600;
      line-height: 1.5rem;
      padding: 1rem 2rem;
      text-align: left;
    }

    td {
      background: var(--card-headline);
      border: 0;
      border-radius: 0.25rem;
      color: var(--form-button-text);
      font-size: 1.2rem;
      font-weight: 400;
      padding: 0.5rem 1rem;

      &:first-child {
        font-weight: 600;
      }

      &:last-child {
        text-align: center;
      }
    }

    button {
      background: var(--terciary);
      border: none;
      border-radius: 0.25rem;
      color: var(--card-headline);
      font-size: 1.3rem;
      font-weight: 700;
      padding: 0.2rem 0.8rem;
      transition: 250ms;

      &:hover {
        filter: brightness(1.2);
      }
    }
  }

  span {
    background: var(--card-background);
    border-radius: 0.25rem;
    color: var(--card-headline);
    font-size: 2rem;
    font-weight: 600;
    margin-left: 12.8rem;
    padding: 0.2rem 0.5rem;
    width: 79%;
  }
`;

export default Container;
