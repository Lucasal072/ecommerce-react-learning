import { ReactElement } from "react";

interface TextWithIconProps {
  icon: ReactElement;
  text: ReactElement;
  itemOrientation?: "right" | "left";
  className?: string;
}

const TextWithIcon: React.FC<TextWithIconProps> = ({
  icon,
  text,
  itemOrientation = "left",
}) => {
  return (
    <div
      className="flex items-center gap-3"
      style={{
        flexDirection: itemOrientation === "right" ? "row" : "row-reverse",
      }}
    >
      {text}
      {icon}
    </div>
  );
};

export default TextWithIcon;
