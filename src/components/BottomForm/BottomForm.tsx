import { Col, Container } from "react-bootstrap";
import {
  ButtonStyled,
  DescriptionText,
  RowStyled,
  SeparatorStyled,
  TitleStyled,
} from "./styled";
import { FlexWrapper } from "@worms/common/FlexWrapper";
import { useState } from "react";
import { ModalForm } from "../ModalForm";

export const BottomForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (value: boolean) => () => {
    setIsModalOpen(value);
  };
  return (
    <>
      <SeparatorStyled bgColor="#fff">
        <Container>
          <RowStyled>
            <Col lg={10}>
              <FlexWrapper
                flexDirection="column"
                alignItems="flex-start"
                width="100%"
                gap="16px"
              >
                <TitleStyled>Остались вопросы?</TitleStyled>
                <DescriptionText>
                  Черви старатели — вид беспозвоночных, который был получен в
                  результате скрещивания Владимерских и Чуйских червей. Их нужно
                  использовать в качестве производителя чистого и натурального
                  удобрения для растений — Биогумус, которое по своим свойствам
                  в десятки раз лучше навоза, белкового и питательного корма для
                  птиц (курицы, утки, гуси, индюки, перепелы и др.), а также для
                  свиней.
                </DescriptionText>
                <ButtonStyled
                  onClick={openModal(true)}
                  className="hero-button"
                  text="Получить обратный звонок"
                />
              </FlexWrapper>
            </Col>
          </RowStyled>
        </Container>
      </SeparatorStyled>
      <ModalForm isOpen={isModalOpen} onClose={openModal(false)} />
    </>
  );
};
