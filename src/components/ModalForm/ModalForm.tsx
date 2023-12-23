import { useEffect, useRef } from "react";
import {
  ButtonStyled,
  ModalWindowContainer,
  ModalWindowStyled,
  TitleStyled,
} from "./styled";
import { FlexWrapper } from "@worms/common/FlexWrapper";
import { FormWithDescription } from "../FormWithDescription";

interface ModalFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalForm = (props: ModalFormProps) => {
  const { isOpen, onClose } = props;

  const ref = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (e: Event) => {
    const currentElem = ref?.current?.contains(e.target as Node);

    if (ref?.current && !currentElem) {
      e.preventDefault();
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [handleOutsideClick]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return isOpen ? (
    <ModalWindowContainer>
      <ModalWindowStyled ref={ref}>
        <FlexWrapper flexDirection="column" alignItems="center">
          <TitleStyled>
            Оставьте ваши контактные данные и мы вам перезвоним
          </TitleStyled>
          <FormWithDescription
            secondaryButon={
              <ButtonStyled
                onClick={() => onClose()}
                text="Отмена"
                width="100%"
              />
            }
          />
        </FlexWrapper>
      </ModalWindowStyled>
    </ModalWindowContainer>
  ) : null;
};
