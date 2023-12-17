import ImageGallery from "react-image-gallery";

import { Container, Row, Col } from "react-bootstrap";
import { TitleStyled } from "./styled";
import { FlexWrapper } from "@worms/common/FlexWrapper";
import { Separator } from "@worms/common/Separator/Separator";
import { Gallery1, Gallery2 } from "@worms/assets";

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
