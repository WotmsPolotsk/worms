import { css } from "glamor";
import { ReactSVG } from "react-svg";

interface SvgIconProps {
  iconSrc: string;
  fill?: string;
  stroke?: string;
  height?: string;
  width?: string;
}

export const SvgIcon = ({
  iconSrc,
  fill,
  stroke,
  width = "24px",
  height = "24px",
}: SvgIconProps) => {
  const styles = css({
    " svg": {
      height,
      width,
      fill,
      stroke,
    },
  });

  return <ReactSVG {...styles} src={iconSrc} />;
};
