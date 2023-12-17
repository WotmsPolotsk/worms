import styled, { css } from "styled-components";

export const SeparatorStyled = styled.div<{
  bgColor?: string;
  isBottomPadding?: boolean;
  isTopPadding?: boolean;
}>`
  padding-bottom: ${({ isBottomPadding }) => (isBottomPadding ? "80px" : 0)};
  padding-top: ${({ isTopPadding }) => (isTopPadding ? "80px" : 0)};

  width: 100%;

  ${({ bgColor }) =>
    bgColor &&
    css`
      background-color: ${bgColor};
    `}
`;
