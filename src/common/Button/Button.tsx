import { ButtonStyled } from "./styled";

interface ButtonProps {
  text: string;
  className?: string;
  width?: string;
  bgColor?: string;
}

export const Button = (props: ButtonProps) => {
  const {
    text,
    width = "auto",
    bgColor = "#fff",
    className = "button",
  } = props;

  return (
    <ButtonStyled className={className} width={width} bgColor={bgColor}>
      {text}
    </ButtonStyled>
  );
};
