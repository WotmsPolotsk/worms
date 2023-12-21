import { ADAPTIVE } from "@worms/utils/constants";
import styled, { css } from "styled-components";

export const FrontStyled = styled.div<{ bgImage: string }>`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url(${({ bgImage }) => bgImage});
  background-size: cover;
  background-position: center center;
  backface-visibility: hidden;
  border-radius: 5px;

  transform: perspective(600px) rotateY(0deg);
  transition: transform 0.5s linear;

  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
`;

export const BackStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: flex-end;
  backface-visibility: hidden;
  border-radius: 5px;
  background-color: #fff;

  font-size: 16px;

  ${ADAPTIVE.minWidth.desktop} {
    font-size: 18px;
  }

  transform: perspective(600px) rotateY(180deg);
  transition: transform 0.5s linear;

  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
`;

export const CardWrapper = styled.div<{ isClick: boolean }>`
  width: 100%;
  height: 400px;
  cursor: pointer;
  position: relative;

  ${ADAPTIVE.minWidth.desktop} {
    height: 500px;
  }

  ${({ isClick }) =>
    isClick &&
    css`
      ${FrontStyled} {
        transform: perspective(600px) rotateY(-180deg);
      }

      ${BackStyled} {
        transform: perspective(600px) rotateY(0deg);
      }
    `}

  &:hover {
    ${ADAPTIVE.minWidth.desktop} {
      ${FrontStyled} {
        transform: perspective(600px) rotateY(-180deg);
      }

      ${BackStyled} {
        transform: perspective(600px) rotateY(0deg);
      }
    }
  }
`;

export const MaskStyled = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 5px;

  background: rgba(0, 0, 0, 0.6);
  z-index: 0;
`;

export const TitleStyled = styled.h4`
  color: #fff;
  font-size: 22px;
  font-weight: 300;
  z-index: 1;
`;

export const Notification = styled.span`
  display: block;
  position: absolute;
  text-align: center;
  bottom: 15px;
  left: 50%;
  color: #fff;
  transform: translate(-50%, 0);

  font-size: 14px;
  font-weight: 300;
  z-index: 1;
`;
