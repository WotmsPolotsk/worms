import { useWindowSize } from "@worms/hooks/useWindowSize";
import {
  CardWrapper,
  FrontStyled,
  Notification,
  MaskStyled,
  TitleStyled,
  BackStyled,
} from "./styled";
import { useEffect, useState } from "react";

interface WormVariantProps {
  title: string;
  description: string;
  image: string;
}

export const WormVariant = (props: WormVariantProps) => {
  const [isClick, setIsClick] = useState(false);
  const { title, description, image } = props;

  const { isInfiniteDesktopView } = useWindowSize();

  const onClick = () => {
    setIsClick((prev) => !prev);
  };

  useEffect(() => {
    if (isInfiniteDesktopView) {
      setIsClick(false);
    }
  }, [isInfiniteDesktopView]);

  return (
    <CardWrapper
      isClick={isClick}
      onClick={!isInfiniteDesktopView ? onClick : undefined}
    >
      <FrontStyled bgImage={image}>
        <TitleStyled>{title}</TitleStyled>
        <Notification>
          {isInfiniteDesktopView ? "Наведите" : "Нажмите"}, чтобы узнать больше
        </Notification>
        <MaskStyled />
      </FrontStyled>

      <BackStyled>{description}</BackStyled>
    </CardWrapper>
  );
};
