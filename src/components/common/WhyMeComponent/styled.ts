import styled, { css } from "styled-components";

import { FlexWrapper } from "../FlexWrapper";

export const WhyMeStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  padding: 80px 80px;
`;

export const MaskStyled = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.85);
  z-index: 0;
`;

export const Content = styled(FlexWrapper)`
  z-index: 1;
  width: 100%;
`;

export const TitleStyled = styled.h3`
  font-size: 42px;
  text-transform: uppercase;
  margin-bottom: 80px;
  color: #fff;
`;

export const CaseStyled = styled(FlexWrapper)<{
  isShowed: boolean;
  seconds: number;
}>`
  opacity: 0;

  ${({ isShowed, seconds }) =>
    isShowed &&
    css`
      transition: all ease ${seconds}s;
      opacity: 1;
    `}
`;
