import styled from 'styled-components';

export const Navigation = styled.div`
  background-color: ${props => props.theme.colors.transparentSilver};
  width: 100%;
  padding: 1rem 1rem;
  display: flex;
  justify-content: space-between;
  @media (max-width: 500px) {
  }
`;
export const MenuBurger = styled.img`
  width: 30px;
  height: 35px;
`;

export const img = styled.img`
  height: 100%;
  width: 100%;
  justify-content: space-between;
`;
