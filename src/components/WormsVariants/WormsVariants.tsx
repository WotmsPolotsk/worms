import { Separator } from "@worms/common/Separator";
import { Col, Container, Row } from "react-bootstrap";
import { RowStyled } from "./styled";
import { FlexWrapper } from "@worms/common/FlexWrapper";
import { Biogumus, Dendrobena, Staratel } from "@worms/assets";
import { WormVariant } from "./WormVariant";
import { Title } from "@worms/common/Title";
import { useWindowSize } from "@worms/hooks/useWindowSize";

export const WormsVariants = () => {
  const { isInfiniteDesktopView } = useWindowSize();

  const variants = [
    {
      title: "Червь старатель",
      image: Staratel,
      description:
        "Черви старатели — вид беспозвоночных, который был получен в результате скрещивания Владимерских и Чуйских червей. Их нужно использовать в качестве производителя чистого и натурального удобрения для растений — Биогумус, которое по своим свойствам в десятки раз лучше навоза, белкового и питательного корма для птиц, а также для свиней.",
    },
    {
      title: "Биогумус",
      image: Biogumus,
      description:
        "Черви старатели — вид беспозвоночных, который был получен в результате скрещивания Владимерских и Чуйских червей. Их нужно использовать в качестве производителя чистого и натурального удобрения для растений — Биогумус, которое по своим свойствам в десятки раз лучше навоза, белкового и питательного корма для птиц, а также для свиней.",
    },
    {
      title: "Червь дендробена",
      image: Dendrobena,
      description:
        "Черви старатели — вид беспозвоночных, который был получен в результате скрещивания Владимерских и Чуйских червей. Их нужно использовать в качестве производителя чистого и натурального удобрения для растений — Биогумус, которое по своим свойствам в десятки раз лучше навоза, белкового и питательного корма для птиц, а также для свиней.",
    },
  ];
  return (
    <Separator bgColor="#fff">
      <Container>
        <Row>
          <Col>
            <FlexWrapper width="100%" justifyContent="center">
              <Title>Что мы можем вам предложить?</Title>
            </FlexWrapper>
          </Col>
        </Row>
        <RowStyled>
          {variants.map((item) => {
            return (
              <Col lg={4} md={12} sm={12} xs={12}>
                <WormVariant
                  key={item.title + item.description}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                />
              </Col>
            );
          })}
        </RowStyled>
      </Container>
    </Separator>
  );
};
