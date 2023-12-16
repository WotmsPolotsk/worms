import { Separator } from "../Separator/Separator";
import {
  BottomContent,
  ButtonStyled,
  HeroContentStyled,
  HeroSectionStyled,
  MaskStyled,
  SubtitleStyled,
  TitleStyled,
} from "./styled";

export const HeroSection = () => {
  return (
    <Separator bgColor="#fff">
      <HeroSectionStyled>
        <BottomContent justifyContent="space-between" alignItems="flex-end">
          <HeroContentStyled>
            <SubtitleStyled>Полоцк</SubtitleStyled>
            <TitleStyled>Продажа червей и биогумуса</TitleStyled>
          </HeroContentStyled>
          <ButtonStyled className="hero-button" text="Сделать заказ" />
        </BottomContent>
        <MaskStyled />
      </HeroSectionStyled>
    </Separator>
  );
};
