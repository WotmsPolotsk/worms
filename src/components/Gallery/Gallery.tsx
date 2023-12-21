import ImageGallery from "react-image-gallery";

import { Container, Row, Col } from "react-bootstrap";
import { FlexWrapper } from "@worms/common/FlexWrapper";
import { Separator } from "@worms/common/Separator/Separator";
import { Gallery1, Gallery2 } from "@worms/assets";
import { Title } from "@worms/common/Title";

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
  ];

  return (
    <Separator isTopPadding bgColor="#fff">
      <Container>
        <Row>
          <FlexWrapper alignItems="center" width="100%" flexDirection="column">
            <Col>
              <Title>Взгляните на наше производство</Title>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
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
