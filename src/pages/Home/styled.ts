import { HomePageBgImage, WormsBgImage } from "@worms/assets";
import { FlexWrapper } from "@worms/common/FlexWrapper";
import styled from "styled-components";

export const HeroSectionStyled = styled.div`
  background-image: url(${HomePageBgImage});
  background-position: center center;
  background-size: cover;
  width: 100vw;
  height: 500px;
`;

export const HomeStyled = styled(FlexWrapper)`
  width: 100vw;
  background-image: url(${WormsBgImage});
  background-repeat: repeat;
  position: relative;
`;

export const HomeBgStyled = styled(FlexWrapper)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-image: url(${WormsBgImage});
  background-repeat: repeat;
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

export const HomeContent = styled.div`
  width: 100%;
  z-index: 1;
`;
