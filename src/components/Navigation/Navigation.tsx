import { GridWrapper } from "@worms/common/GridWrapper";
import {
  ContactItem,
  ContactStyled,
  ImageStyled,
  LogoStyled,
  NavigationContentStyled,
  NavigationStyled,
  SvgStyled,
} from "./styled";
import { FlexWrapper } from "@worms/common/FlexWrapper";
import { Logo, Mail, Phone } from "@worms/assets";
import { useWindowSize } from "@worms/hooks/useWindowSize";

export const Navigation = () => {
  const { isMobileView } = useWindowSize();

  return (
    <>
      <NavigationStyled>
        <GridWrapper>
          <NavigationContentStyled>
            <LogoStyled>
              <ImageStyled src={Logo} />
            </LogoStyled>

            <FlexWrapper gap="48px" alignItems="center">
              {!isMobileView && (
                <ContactStyled>
                  <ContactItem href="tel:+375297145127">
                    <SvgStyled src={Phone} />
                    +375 (29) 714-51-27
                  </ContactItem>

                  <ContactItem href="mailto:test-email@gmail.com">
                    <SvgStyled src={Mail} />
                    test-email@gmail.com
                  </ContactItem>
                </ContactStyled>
              )}
            </FlexWrapper>
          </NavigationContentStyled>
        </GridWrapper>
      </NavigationStyled>
    </>
  );
};
