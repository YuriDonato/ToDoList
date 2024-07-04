import React from "react";
import { styled } from "@mui/system";

const Circle = styled("div")<{ color: string }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

interface CircleIconProps {
  color: string;
}

const CircleIcon: React.FC<CircleIconProps> = ({ color }) => {
  return <Circle color={color} />;
};

export default CircleIcon;
