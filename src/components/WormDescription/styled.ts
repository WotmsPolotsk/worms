import { Button } from "@worms/common/Button";
import { FlexWrapper } from "@worms/common/FlexWrapper";
import styled, { css, keyframes } from "styled-components";

export const CaseStyled = styled(FlexWrapper)<{
  isShowed: boolean;
}>`
  opacity: 0;

  ${({ isShowed }) =>
    isShowed &&
    css`
      transition: all ease 1.5s;
      opacity: 1;
    `}
`;

export const IconTextStyled = styled.h5`
  color: #fff;
  font-size: 18px;
  text-align: center;
  font-weight: 300;
`;

export const TitleStyled = styled.h3`
  font-size: 42px;
  text-transform: uppercase;
  margin-bottom: 80px;
  color: #fff;
`;

export const Description = styled(FlexWrapper)`
  gap: 16px;
  padding-top: 80px;
  width: 100%;
`;

export const DescriptionText = styled.span`
  font-size: 18px;
  color: #fff;
  font-weight: 300;
`;

const rotate = keyframes`
   0% { transform: translate(1px, 1px) rotate(0deg); }
  5% { transform: translate(-1px, -2px) rotate(-1deg); }
  10% { transform: translate(-3px, 0px) rotate(1deg); }
  15% { transform: translate(3px, 2px) rotate(0deg); }
  20% { transform: translate(1px, -1px) rotate(1deg); }
  25% { transform: translate(-1px, -2px) rotate(-1deg); }
  30% { transform: translate(-3px, 0px) rotate(1deg); }
  35% { transform: translate(3px, 2px) rotate(0deg); }
  45% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(0, 0) rotate(0deg); }

  100% { transform: translate(0, 0) rotate(0deg); }
`;

export const ButtonStyled = styled(Button)`
  font-size: 14px;

  animation: ${rotate} 1s;
  animation-iteration-count: infinite;

  &:hover {
    animation: none;
  }
`;
