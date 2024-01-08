import { Separator } from "@worms/common/Separator";
import { Col, Container, Row } from "react-bootstrap";
import { RowStyled } from "./styled";
import { FlexWrapper } from "@worms/common/FlexWrapper";
import { Biogumus, Dendrobena, Staratel } from "@worms/assets";
import { WormVariant } from "./WormVariant";
import { Title } from "@worms/common/Title";

export const WormsVariants = () => {
  const variants = [
    {
      title: "Червь старатель",
      image: Staratel,
      description:
        "Червь Старатель – селекционный вид навозного червя Eisenia foetida, отличающийся набором уникальных качеств: высокая скорость переработки отходов, неприхотливость, выносливость. Цель его выведения — естественное восстановление истощенных земледелием почв. В результате жизнедеятельности червей земля насыщается биогумусом, ценнейшим натуральным удобрением",
    },
    {
      title: "Биогумус",
      image: Biogumus,
      description:
        "Биогумус – органическое удобрение, получаемое при биотехнологической переработке органических отходов животноводства методом верми-компостирования с помощью технологической линии дождевого навозного червя вида Eisenia fоetid",
    },
    {
      title: "Червь дендробена",
      image: Dendrobena,
      description:
        "Червь RB дендробена — это представители семейства дождевых червей, два десятилетия назад, выведенных в Европе, специально для использования в качестве рыболовной наживки и признаны рыболовным червем №1.",
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
