import { useRef, useState } from "react";
import {
  ButtonStyled,
  CaseStyled,
  Description,
  DescriptionText,
  IconTextStyled,
} from "./styled";
import { useIntersectionElement } from "@worms/hooks/useIntersectionElement";
import { SvgIcon } from "@worms/common/SvgIcon";
import { Apple, Dollar, Fish } from "@worms/assets";

import { Separator } from "@worms/common/Separator";
import { GridWrapper } from "@worms/common/GridWrapper";
import { FlexWrapper } from "@worms/common/FlexWrapper";
import { Title } from "@worms/common/Title";
import { useWindowSize } from "@worms/hooks/useWindowSize";
import { ModalForm } from "../ModalForm";

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
      <SvgIcon width="70px" height="70px" fill="#fff" iconSrc={item.icon} />
      <IconTextStyled>{item.title}</IconTextStyled>
    </CaseStyled>
  );
};

export const WormDescription = () => {
  const { isMobileView } = useWindowSize();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (value: boolean) => () => {
    setIsModalOpen(value);
  };

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
    <>
      <Separator isTopPadding isBottomPadding>
        <GridWrapper>
          <FlexWrapper width="100%" alignItems="center" flexDirection="column">
            <Title colorValue="#fff">Чем полезны наши черви?</Title>

            <FlexWrapper
              width="100%"
              justifyContent="center"
              gap={isMobileView ? "40px" : "80px"}
              alignItems="center"
              flexDirection={isMobileView ? "column" : "row"}
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
                десятки раз лучше навоза, белкового и питательного корма для
                птиц (курицы, утки, гуси, индюки, перепелы и др.), а также для
                свиней.
              </DescriptionText>

              <ButtonStyled
                onClick={openModal(true)}
                className="hero-button"
                text="Сделать заказ"
              />
            </Description>
          </FlexWrapper>
        </GridWrapper>
      </Separator>
      <ModalForm isOpen={isModalOpen} onClose={openModal(false)} />
    </>
  );
};
