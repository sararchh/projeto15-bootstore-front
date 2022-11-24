import styled from "styled-components";

export const SearchSection = styled.section`
  width: 90%;
  height: 3.1rem;
  margin: 0 auto;

  margin-top: 4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    width: 2rem;
    height: 2rem;
  }

  .buttonStyled {
    display: flex;
    align-items: center;

    svg {
      color: var(--white);
    }
  }
`;

export const ContentSearch = styled.div`
  .inputPosition {
    position: relative;
  }

  svg {
    color: var(--gray);
    position: absolute;
    top: -4px;
    right: 5px;
  }

 
`;

export const ContentCard = styled.div`
  width: 98%;
  height: 100%;

  flex-wrap: wrap;
  display: flex;
  
  margin: 0 auto;
  margin-top: 3rem;
`;