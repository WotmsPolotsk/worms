import ImageGallery from "react-image-gallery";

import Gallery1 from "../../../assets/images/gallery1.jpg";
import Gallery2 from "../../../assets/images/gallery2.jpg";
import { Container, Row, Col } from "react-bootstrap";
import { TitleStyled } from "./styled";
import { FlexWrapper } from "../FlexWrapper";
import { Separator } from "../Separator/Separator";

export const Gallery = () => {
  const images = [
    {
      original: Gallery1,
      thumbnail: Gallery1,
    },
    {
      original: Gallery2,
      thumbnail: Gallery2,
    },
    {
      original: Gallery1,
      thumbnail: Gallery1,
    },
    {
      original: Gallery2,
      thumbnail: Gallery2,
    },
    {
      original: Gallery1,
      thumbnail: Gallery1,
    },
    {
      original: Gallery2,
      thumbnail: Gallery2,
    },
    {
      original: Gallery1,
      thumbnail: Gallery1,
    },
    {
      original: Gallery2,
      thumbnail: Gallery2,
    },
    {
      original: Gallery1,
      thumbnail: Gallery1,
    },
    {
      original: Gallery2,
      thumbnail: Gallery2,
    },
    {
      original: Gallery1,
      thumbnail: Gallery1,
    },
    {
      original: Gallery2,
      thumbnail: Gallery2,
    },
    {
      original: Gallery1,
      thumbnail: Gallery1,
    },
    {
      original: Gallery2,
      thumbnail: Gallery2,
    },
  ];

  return (
    <Separator isTopPadding bgColor="#fff">
      <Container>
        <Row>
          <FlexWrapper alignItems="center" width="100%" flexDirection="column">
            <Col>
              <TitleStyled>Взгляните на наше производство</TitleStyled>
            </Col>
            <Col lg={8}>
              <ImageGallery
                lazyLoad
                showFullscreenButton={false}
                showPlayButton={false}
                items={images}
              />
            </Col>
          </FlexWrapper>
        </Row>
      </Container>
    </Separator>
  );
};
