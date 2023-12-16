import styled from "styled-components";
import { Separator } from "../Separator/Separator";
import { Row } from "react-bootstrap";

export const TitleStyled = styled.h3`
  font-size: 42px;
  text-transform: uppercase;
  color: #121212;
`;

export const SeparatorStyled = styled(Separator)`
  padding-bottom: 160px;
  padding-top: 160px;
`;

export const DescriptionText = styled.span`
  font-size: 18px;
  color: #121212;
  font-weight: 400;
`;

export const RowStyled = styled(Row)`
  justify-content: center;
  align-items: center;
`;
