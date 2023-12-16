import { FlexWrapper } from "../FlexWrapper";
import { GridWrapper } from "../GridWrapper";
import { Separator } from "../Separator/Separator";

import Apple from "../../../assets/icons/apple.svg";
import Dollar from "../../../assets/icons/dollar.svg";
import Fish from "../../../assets/icons/fish.svg";
import { useRef } from "react";
import { useIntersectionElement } from "../../../hooks/useIntersectionElement";
import {
  ButtonStyled,
  CaseStyled,
  Description,
  DescriptionText,
  IconTextStyled,
  TitleStyled,
} from "./styled";
import { SvgIcon } from "../SvgIcon/SvgIcon";

interface DescriprionCaseProps {
  item: {
    title: string;
    icon: string;
  };
}

const DescriprionCase = ({ item }: DescriprionCaseProps) => {
  const ref = useRef(null);

  const { isShowed } = useIntersectionElement({ ref });

  return (
    <CaseStyled
      ref={ref}
      isShowed={isShowed}
      flexDirection="column"
      alignItems="center"
      gap="32px"
    >
      <SvgIcon width="120px" height="120px" fill="#fff" iconSrc={item.icon} />
      <IconTextStyled>{item.title}</IconTextStyled>
    </CaseStyled>
  );
};

export const WormDescriprion = () => {
  const iconsData = [
    {
      title: "Увеличат доходы",
      icon: Dollar,
    },
    {
      title: "Повысят урожайность",
      icon: Apple,
    },
    {
      title: "Помогут в рыбалке",
      icon: Fish,
    },
  ];

  return (
    <Separator isTopPadding isBottomPadding>
      <GridWrapper>
        <FlexWrapper width="100%" alignItems="center" flexDirection="column">
          <TitleStyled>Чем полезны нащи черви?</TitleStyled>

          <FlexWrapper
            width="100%"
            justifyContent="space-around"
            alignItems="center"
          >
            {iconsData.map((item) => {
              return (
                <DescriprionCase key={item.icon + item.title} item={item} />
              );
            })}
          </FlexWrapper>

          <Description>
            <DescriptionText>
              Черви старатели — вид беспозвоночных, который был получен в
              результате скрещивания Владимерских и Чуйских червей. Их нужно
              использовать в качестве производителя чистого и натурального
              удобрения для растений — Биогумус, которое по своим свойствам в
              десятки раз лучше навоза, белкового и питательного корма для птиц
              (курицы, утки, гуси, индюки, перепелы и др.), а также для свиней.
            </DescriptionText>

            <ButtonStyled className="hero-button" text="Сделать заказ" />
          </Description>
        </FlexWrapper>
      </GridWrapper>
    </Separator>
  );
};
