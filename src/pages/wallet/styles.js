import styled from "styled-components";

export const ContentReturnPage = styled.div`
  margin: 2rem 0 3rem 3rem;

  display: flex;
  align-items: center;

  svg {
    width: 2rem;
    height: 2rem;
    color: var(--white);
  }

  p {
    font-weight: 400;
    font-size: 1rem;
    line-height: 22px;
  }
`;

export const ContentInfo = styled.div`
  width: 50rem;
  height: auto;
  margin: 0 auto;

  .divHr {
    width: 50rem;
    height: 1.5px;
    background-color:  rgba(110, 110, 110, 0.7);
    margin: 1.5rem 0;
  }

  .divStyled {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 1.5rem;
      height: 1.5rem;
      color: var(--red);
      margin: 6px 0 0 7px ;
    }
  }

  .divAlign {
    width: 100%;
    display: flex;
    justify-content: end;
    margin-bottom: 2rem;
  }
`;

export const Product = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.7rem;

  justify-content: space-between;

  img {
    width: 5rem;
    height: 5rem;
    border-radius: 0.3rem;
    background-size: cover;
    margin-right: 1rem;
  }

  p {
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 1rem;
    margin-top: 0.5rem;
  }

  .title {
    font-size: 1.2rem;
  }
`;