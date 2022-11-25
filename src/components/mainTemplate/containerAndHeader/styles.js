import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  width: 100%;
  height: 100%;
  background-color: var(--background);

  padding: 3rem;

  .divStyled {
    display: flex;
    align-items: center;
    flex-direction: row;
    margin: 5px;
  }

  .svgStyled {
    width: 30px;
    height: 30px;
    color: var(--white);
  }
`;

export const Content = styled.div`
`;

export const Header = styled.header`
  height: 80px;
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

export const TextTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.8rem;
  color: var(--white);
`;