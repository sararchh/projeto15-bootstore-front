import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: var(--background);

  display: flex;
  align-items: center;
  justify-content: center;
  `;

  export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  `

  export const CardLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    width: 6.25rem;
    height: 6.25rem;
    margin-bottom: 2rem;
  }

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.5rem;
    color: var(--white);
  }
  `

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
`;

export const TextButton = styled.button`
  font-weight: 700;
  color: var(--white);
  font-size: 1rem;
  line-height: 1.12rem;
  cursor: pointer;
  margin-top: 2rem;
`;