import { GridWrapper } from "@worms/common/GridWrapper";
import {
  ButtonStyled,
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

export const Navigation = () => {
  return (
    <NavigationStyled>
      <GridWrapper>
        <NavigationContentStyled>
          <LogoStyled>
            <ImageStyled src={Logo} />
          </LogoStyled>

          <FlexWrapper gap="48px" alignItems="center">
            <ContactStyled>
              <ContactItem>
                <SvgStyled src={Phone} />
                +375 (33) 333-33-33
              </ContactItem>

              <ContactItem>
                <SvgStyled src={Mail} />
                test-email@gmail.com
              </ContactItem>
            </ContactStyled>

            <ButtonStyled text="Заказать сейчас" />
          </FlexWrapper>
        </NavigationContentStyled>
      </GridWrapper>
    </NavigationStyled>
  );
};
