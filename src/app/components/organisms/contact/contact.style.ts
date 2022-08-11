import styled from 'styled-components';

export const Contact = styled.div`
  background-color: ${props => props.theme.colors.white};
  padding-top: 43px;
  position: relative;
`;

export const Rectangle14 = styled.div`
  width: 470px;
  margin: auto;
  height: 327px;
  background-color: ${props => props.theme.colors.linen};
  @media (max-width: 950px) {
    height: 0px;
  }
`;
export const Frame41 = styled.div`
  background-color: ${props => props.theme.colors.white};
  padding: 40px 35.99px 40px 36px;
  transform: translate(30%, -80%);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  margin: auto;
  border: 1px solid #bb8a5d;
  @media (max-width: 950px) {
    transform: translate(-0%, -0%);
    bottom: auto;
    right: 28px;
  }
`;
export const Input = styled.p`
  height: 12px;
  width: 35px;
  color: ${props => props.theme.colors.black};
  display: flex;
  text-align: center;
  margin-bottom: 19px;
  letter-spacing: 1.2px;
  font-family: ${props => props.theme.fonts.inter12Regular.family};
  font-size: ${props => props.theme.fonts.inter12Regular.size};
  font-weight: ${props => props.theme.fonts.inter12Regular.weight};
  line-height: ${props => props.theme.fonts.inter12Regular.lineHeight};
`;
export const Line2 = styled.div`
  width: 156px;
  height: 1px;
  background-color: ${props => props.theme.colors.peachPuff};
  margin-bottom: 19px;
`;
export const InputTwo = styled.p`
  height: 15px;
  width: 37px;
  color: ${props => props.theme.colors.black};
  display: flex;
  text-align: center;
  margin-bottom: 19px;
  letter-spacing: 1.2px;
  font-family: ${props => props.theme.fonts.inter12Regular.family};
  font-size: ${props => props.theme.fonts.inter12Regular.size};
  font-weight: ${props => props.theme.fonts.inter12Regular.weight};
  line-height: ${props => props.theme.fonts.inter12Regular.lineHeight};
`;
export const Line3 = styled.img`
  width: 359.01px;
  margin-bottom: 19px;
`;
export const Textarea = styled.p`
  height: 15px;
  width: 71px;
  color: ${props => props.theme.colors.black};
  display: flex;
  text-align: center;
  margin-bottom: 19px;
  letter-spacing: 1.2px;
  font-family: ${props => props.theme.fonts.inter12Regular.family};
  font-size: ${props => props.theme.fonts.inter12Regular.size};
  font-weight: ${props => props.theme.fonts.inter12Regular.weight};
  line-height: ${props => props.theme.fonts.inter12Regular.lineHeight};
`;
export const Button = styled.p`
  margin: auto;
  padding: 0.5rem;
  background: #bb8a5e;
  border-radius: 10px 10px 10px 10px;
  cursor: pointer;
  width: 76px;
  color: ${props => props.theme.colors.black};
  text-align: center;
  letter-spacing: 1.2px;
  font-family: ${props => props.theme.fonts.inter12Regular.family};
  font-size: ${props => props.theme.fonts.inter12Regular.size};
  font-weight: ${props => props.theme.fonts.inter12Regular.weight};
  line-height: ${props => props.theme.fonts.inter12Regular.lineHeight};
`;
