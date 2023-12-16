import { SvgIcon } from "../SvgIcon/SvgIcon";
import {
  InputContainer,
  InputContainerStyled,
  InputStyled,
  Label,
  SvgStyled,
} from "./styled";

interface InputProps {
  iconSrc?: string;
  placeholder?: string;
  label?: string;
  value: string;
  onChange: (value: string) => void;
}

export const Input = (props: InputProps) => {
  const { iconSrc, placeholder, label, value, onChange } = props;

  return (
    <InputContainerStyled>
      {label && <Label>{label}</Label>}
      <InputContainer>
        {iconSrc && (
          <SvgStyled>
            <SvgIcon iconSrc={iconSrc} width="20px" height="20px" />
          </SvgStyled>
        )}
        <InputStyled
          isIconVisible={Boolean(iconSrc)}
          onChange={(e) => onChange(e.target.value)}
          value={value}
          placeholder={placeholder}
        />
      </InputContainer>
    </InputContainerStyled>
  );
};
