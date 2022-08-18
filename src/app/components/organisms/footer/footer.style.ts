import styled from 'styled-components';

export const Footer = styled.div`
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  border: solid 2px #dcc9ce;
  background: #dcc9ce;
  @media (max-width: 950px) {
    margin-top: 5rem;  }
  @media (max-width: 680px) {
    display: flex;
    flex-direction: column;
    gap:20px
  }
}
`;
export const Contact108RueLemercier75017Paris = styled.p`
  max-width: 267.58px;
  color: ${props => props.theme.colors.black};
  text-align: center;
  letter-spacing: 2.4px;
  font-family: ${props => props.theme.fonts.ingridDarling24Regular.family};
  font-size: ${props => props.theme.fonts.ingridDarling24Regular.size};
  font-weight: ${props => props.theme.fonts.ingridDarling24Regular.weight};
  line-height: ${props => props.theme.fonts.ingridDarling24Regular.lineHeight};
`;
export const ActualitesActualitesTelevisionLivreD = styled.p`
  max-width: 239.83px;
  color: ${props => props.theme.colors.black};
  text-align: center;
  letter-spacing: 3.2px;
  font-family: ${props => props.theme.fonts.clickerScript32Regular.family};
  font-size: ${props => props.theme.fonts.clickerScript32Regular.size};
  font-weight: ${props => props.theme.fonts.clickerScript32Regular.weight};
  line-height: ${props => props.theme.fonts.clickerScript32Regular.lineHeight};
  @media (max-width: 400px) {
    font-size: 12px;
  }
`;
