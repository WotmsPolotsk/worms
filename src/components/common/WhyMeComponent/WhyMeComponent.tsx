import { FlexWrapper } from "../FlexWrapper";
import { IconTextStyled } from "../HeroSection/styled";
import { Separator } from "../Separator/Separator";
import { SvgIcon } from "../SvgIcon/SvgIcon";
import { CaseStyled, Content, TitleStyled, WhyMeStyled } from "./styled";

import BankImage from "../../../assets/icons/bank.svg";
import UsersImage from "../../../assets/icons/users.svg";
import CoinsImage from "../../../assets/icons/coins.svg";
import Shipping from "../../../assets/icons/shipping.svg";
import Handshake from "../../../assets/icons/handshake.svg";
import { useRef } from "react";
import { useIntersectionElement } from "../../../hooks/useIntersectionElement";

export const WhyMeComponent = () => {
  const ref = useRef(null);

  const { isShowed } = useIntersectionElement({ ref });

  const iconsData = [
    {
      title: "5+ лет на рынке",
      icon: BankImage,
    },
    {
      title: "1000+ клиентов",
      icon: UsersImage,
    },
    {
      title: "Лучшие цены",
      icon: CoinsImage,
    },
    {
      title: "Быстрая доставка",
      icon: Shipping,
    },
    {
      title: "Надежное сотрудничество",
      icon: Handshake,
    },
  ];

  let seconds = 1;
  return (
    <Separator isBottomPadding={false}>
      <WhyMeStyled>
        <Content flexDirection="column" alignItems="center" gap="80px">
          <TitleStyled>Почему выбирают именно нас?</TitleStyled>

          <FlexWrapper ref={ref} justifyContent="space-around" width="100%">
            {iconsData.map((item) => {
              seconds += 0.2;
              return (
                <CaseStyled
                  isShowed={isShowed}
                  seconds={seconds}
                  key={item.icon + item.title}
                  flexDirection="column"
                  alignItems="center"
                  gap="32px"
                >
                  <SvgIcon
                    width="70px"
                    height="70px"
                    fill="#fff"
                    iconSrc={item.icon}
                  />
                  <IconTextStyled>{item.title}</IconTextStyled>
                </CaseStyled>
              );
            })}
          </FlexWrapper>
        </Content>
      </WhyMeStyled>
    </Separator>
  );
};
