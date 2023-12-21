import styled from "styled-components";

const FooterStyled = styled.footer`
  background-color: #fff;
  color: #121212;
  font-size: 12px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
`;

export const Footer = () => {
  return <FooterStyled>Крестьянское хозяйство "Дворица"</FooterStyled>;
};
