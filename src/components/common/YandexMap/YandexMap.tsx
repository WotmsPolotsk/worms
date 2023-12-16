import { Col, Container, Row } from "react-bootstrap";
import { Separator } from "../Separator/Separator";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import styled from "styled-components";
import { FlexWrapper } from "../FlexWrapper";

const TitleStyled = styled.h3`
  font-size: 42px;
  text-transform: uppercase;
  margin-bottom: 80px;
  color: #fff;
`;

const SubtitleStyled = styled.h5`
  font-size: 24px;
  text-transform: uppercase;
  color: #fff;
`;

const TextStyled = styled.span`
  font-size: 18px;
  color: #fff;
  font-weight: 300;
`;

export const YandexMap = () => {
  return (
    <Separator isBottomPadding isTopPadding>
      <Container>
        <Row>
          <Col>
            <FlexWrapper width="100%" justifyContent="center">
              <TitleStyled>Где нас найти?</TitleStyled>
            </FlexWrapper>
          </Col>
        </Row>
        <Row>
          <Col lg={8}>
            <YMaps>
              <Map
                width="100%"
                height="500px"
                defaultState={{ center: [55.751574, 37.573856], zoom: 14 }}
              >
                <Placemark defaultGeometry={[55.751574, 37.573856]} />
              </Map>
            </YMaps>
          </Col>
          <Col lg={4}>
            <FlexWrapper flexDirection="column" gap="32px">
              <FlexWrapper flexDirection="column" gap="8">
                <SubtitleStyled>Адрес</SubtitleStyled>
                <TextStyled>
                  212121, Беларусь, Витебская область, г. Полоцк, ул. Пушкина 20
                </TextStyled>
              </FlexWrapper>

              <FlexWrapper flexDirection="column" gap="8">
                <SubtitleStyled>Контакты</SubtitleStyled>
                <TextStyled>тел: + 375 (33) 333-33-33</TextStyled>
                <TextStyled>email: test-email@gmail.com</TextStyled>
              </FlexWrapper>
            </FlexWrapper>
          </Col>
        </Row>
      </Container>
    </Separator>
  );
};
