import { Row } from "react-bootstrap";
import styled, { css } from "styled-components";

export const ImageWithTextStyled = styled.div<{ isRightToLeft: boolean }>`
  ${({ isRightToLeft }) => isRightToLeft && "direction: rtl;"}

  width: 100%;
`;

export const ImageStyled = styled.img<{
  isShowed: boolean;
  isRightToLeft: boolean;
}>`
  width: 100%;
  object-fit: cover;

  padding: ${({ isRightToLeft }) =>
    isRightToLeft ? "0 0 0 200px" : "0 200px 0 0"};
  opacity: 0;

  ${({ isShowed }) =>
    isShowed &&
    css`
      transition: all ease 1.5s;
      padding: 0;
      opacity: 1;
    `};
`;

export const RowStyled = styled(Row)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const TitleStyled = styled.h5<{
  isShowed: boolean;
  isRightToLeft: boolean;
}>`
  font-size: 24px;
  text-transform: uppercase;
  color: #121212;
  opacity: 0;

  ${({ isShowed }) =>
    isShowed &&
    css`
      transition: all ease 1.5s;
      opacity: 1;
    `};
`;

export const TextStyled = styled.span<{
  isShowed: boolean;
  isRightToLeft: boolean;
}>`
  font-size: 18px;
  color: #121212;
  opacity: 0;

  ${({ isShowed }) =>
    isShowed &&
    css`
      transition: all ease 1.5s;
      opacity: 1;
    `};
`;
