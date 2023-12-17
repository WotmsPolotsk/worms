import { Col, Container } from "react-bootstrap";
import {
  DescriptionText,
  RowStyled,
  SeparatorStyled,
  TitleStyled,
} from "./styled";
import { Form } from "@worms/components/Form";
import { FlexWrapper } from "@worms/common/FlexWrapper";

export const BottomForm = () => {
  return (
    <SeparatorStyled bgColor="#fff">
      <Container>
        <RowStyled>
          <Col lg={6}>
            <FlexWrapper
              flexDirection="column"
              alignItems="flex-start"
              width="100%"
              gap="16px"
            >
              <TitleStyled>Хотите сделать заказ?</TitleStyled>
              <DescriptionText>
                Черви старатели — вид беспозвоночных, который был получен в
                результате скрещивания Владимерских и Чуйских червей. Их нужно
                использовать в качестве производителя чистого и натурального
                удобрения для растений — Биогумус, которое по своим свойствам в
                десятки раз лучше навоза, белкового и питательного корма для
                птиц (курицы, утки, гуси, индюки, перепелы и др.), а также для
                свиней.
              </DescriptionText>
            </FlexWrapper>
          </Col>
          <Col lg={4}>
            <Form />
          </Col>
        </RowStyled>
      </Container>
    </SeparatorStyled>
  );
};
