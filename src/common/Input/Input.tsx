import { SvgIcon } from "../SvgIcon";
import {
  InputContainer,
  InputContainerStyled,
  InputStyled,
  Label,
  SvgStyled,
  ErrorLabel,
} from "./styled";

interface InputProps {
  iconSrc?: string;
  placeholder?: string;
  label?: string;
  value: string;
  error: string;
  onChange: (value: string) => void;
  onBlur: () => void;
}

export const Input = (props: InputProps) => {
  const { iconSrc, placeholder, label, value, onChange, onBlur, error } = props;

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
          $isError={Boolean(error)}
          onBlur={() => onBlur()}
          $isIconVisible={Boolean(iconSrc)}
          onChange={(e) => onChange(e.target.value)}
          value={value}
          placeholder={placeholder}
        />
      </InputContainer>
      {error && <ErrorLabel>{error}</ErrorLabel>}
    </InputContainerStyled>
  );
};
