import { Separator } from "@worms/common/Separator";
import { ImageWithText } from "./ImageWithText";
import { ImageWithTextListStyled } from "./styled";
import { Chicken, Farm, Fishing } from "@worms/assets";
import { Col, Container, Row } from "react-bootstrap";
import { Title } from "@worms/common/Title";
import { FlexWrapper } from "@worms/common/FlexWrapper";
import { useWindowSize } from "@worms/hooks/useWindowSize";

export const ImageWithTextList = () => {
  const { isInfiniteDesktopView } = useWindowSize();

  return (
    <Separator bgColor="#fff">
      <ImageWithTextListStyled>
        <Container>
          <Row>
            <Col>
              <FlexWrapper justifyContent="center">
                <Title>Кому подойдут наши черви?</Title>
              </FlexWrapper>
            </Col>
          </Row>
        </Container>
        <ImageWithText title="Фермерам" imageSrc={Farm}>
          Черви старатели — вид беспозвоночных, который был получен в результате
          скрещивания Владимерских и Чуйских червей. Их нужно использовать в
          качестве производителя чистого и натурального удобрения для растений —
          Биогумус, которое по своим свойствам в десятки раз лучше навоза,
          белкового и питательного корма для птиц (курицы, утки, гуси, индюки,
          перепелы и др.), а также для свиней.
        </ImageWithText>
        <ImageWithText
          title="Рыбацким магазинам и рыбакам"
          isRightToLef={isInfiniteDesktopView}
          imageSrc={Fishing}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          reprehenderit dolorum dolores, error suscipit magnam laudantium
          corrupti exercitationem, vel magni rerum enim hic tempora eum
          accusamus beatae, quas dolor possimus nam ratione cum mollitia ex.
          Quidem laboriosam, distinctio repellendus est soluta, ut tenetur iste
          amet tempora reiciendis nobis quaerat sequi? Optio, explicabo.{" "}
        </ImageWithText>
        <ImageWithText title="Животноводам" imageSrc={Chicken}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          reprehenderit dolorum dolores, error suscipit magnam laudantium
          corrupti exercitationem, vel magni rerum enim hic tempora eum
          accusamus beatae, quas dolor possimus nam ratione cum mollitia ex.
          Quidem laboriosam, distinctio repellendus est soluta, ut tenetur iste
          amet tempora reiciendis nobis quaerat sequi? Optio, explicabo.{" "}
        </ImageWithText>
      </ImageWithTextListStyled>
    </Separator>
  );
};
