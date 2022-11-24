import styled from "styled-components";

export const Container = styled.div`
  width: 11.7rem;
  height: 13rem;

  margin: 1rem;

  border-radius: 0.5rem;
  background-color: var(--white);

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 11.6rem;
    height: 5.9rem;
    background-size: cover;
    object-fit: contain;
    position: relative;
  }

  .divStyled {
    display: flex;
    justify-content: space-between;
  }

`;

export const DivStyled = styled.div`
    width: 11.6rem;
    height: 5.9rem;

    background: linear-gradient(180deg, rgba(35, 33, 33, 0.96) 0%, rgba(70, 69, 69, 0) 0.01%, rgba(48, 48, 48, 0.0246667) 70.83%, rgba(49, 49, 49, 0) 79.17%, rgba(36, 36, 36, 0.22) 100%);

    position: absolute;
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1rem;
  color: var(--black);
`;

export const ContentInfo = styled.div`
  width: 11.7rem;
  height: 7.1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 0.5rem;

  .textInfo {
    font-style: normal;
    font-weight: 400;
    font-size: 0.8rem;
    color: var(--black);
  }
`;