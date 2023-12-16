import styled, { keyframes } from "styled-components";

import HomePageBgImage from "../../../assets/images/home-page-bg.jpg";
import { FlexWrapper } from "../FlexWrapper";
import { Button } from "../Button/Button";

export const HeroSectionStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-image: url(${HomePageBgImage});
  background-position: center center;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  padding: 160px 80px 80px 80px;
`;

export const TopContent = styled(FlexWrapper)`
  z-index: 1;
`;

export const BottomContent = styled(FlexWrapper)`
  z-index: 1;
`;

export const MaskStyled = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 0;
`;

export const HeroContentStyled = styled.div`
  width: 70%;
  z-index: 1;
`;

export const TitleStyled = styled.h1`
  font-size: 86px;
  text-transform: uppercase;
  color: #fff;
`;

export const SubtitleStyled = styled.h4`
  padding-left: 3px;
  font-size: 42px;
  text-transform: uppercase;
  color: #fff;
`;

export const SvgStyled = styled.img`
  width: 22px;
`;

export const IconTextStyled = styled.h5`
  color: #fff;
  font-size: 18px;
  text-align: center;
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