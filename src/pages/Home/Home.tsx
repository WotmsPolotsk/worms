import { WormDescription } from "@worms/components/WormDescription";

import { HomeBgStyled, HomeContent, HomeStyled, MaskStyled } from "./styled";
import { Navigation } from "@worms/components/Navigation";
import { HeroSection } from "@worms/components/HeroSection";
import { BottomForm } from "@worms/components/BottomForm";
import { Gallery } from "@worms/components/Gallery";
import { ImageWithTextList } from "@worms/components/ImageWithTextList";
import { WhyMeComponent } from "@worms/components/WhyMeComponent";
import { YandexMap } from "@worms/components/YandexMap";
import { WormsVariants } from "@worms/components/WormsVariants";
import { Footer } from "@worms/components/Footer";

export const Home = () => {
  return (
    <HomeStyled>
      <HomeBgStyled>
        <MaskStyled />
      </HomeBgStyled>

      <HomeContent>
        <Navigation />
        <HeroSection />
        <WormsVariants />
        <ImageWithTextList />
        <WhyMeComponent />
        <Gallery />
        <WormDescription />
        <BottomForm />
        <YandexMap />
        <Footer />
      </HomeContent>
    </HomeStyled>
  );
};
