import LogoImage from "../../../assets/images/logo.png";
import Phone from "../../../assets/icons/phone.svg";
import Mail from "../../../assets/icons/mail.svg";

import { GridWrapper } from "../GridWrapper";
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
import { FlexWrapper } from "../FlexWrapper";

export const Navigation = () => {
  return (
    <NavigationStyled>
      <GridWrapper>
        <NavigationContentStyled>
          <LogoStyled>
            <ImageStyled src={LogoImage} />
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
