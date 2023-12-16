import { BottomForm } from "../../common/BottomForm/BottomForm";
import { Gallery } from "../../common/Gallery/Gallery";
import { HeroSection } from "../../common/HeroSection";
import { ImageWithTextList } from "../../common/ImageWithTextList/ImageWithTextList";
import { Navigation } from "../../common/Navigation";
import { WhyMeComponent } from "../../common/WhyMeComponent";
import { WormDescriprion } from "../../common/WormDescription/WormDescription";
import { YandexMap } from "../../common/YandexMap/YandexMap";
import { HomeBgStyled, HomeContent, HomeStyled, MaskStyled } from "./styled";

export const Home = () => {
  return (
    <HomeStyled>
      <HomeBgStyled>
        <MaskStyled />
      </HomeBgStyled>

      <HomeContent>
        <Navigation />
        <HeroSection />
        <ImageWithTextList />
        <WhyMeComponent />
        <Gallery />
        <WormDescriprion />
        <BottomForm />
        <YandexMap />
      </HomeContent>
    </HomeStyled>
  );
};
