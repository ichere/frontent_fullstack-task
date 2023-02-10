import { Button } from "@chakra-ui/react";
import React from "react";

interface ParentCompProps {
  childComp?: React.ReactElement;
  bg: string;
  color: string;
  text: string;
}

export const LargeBtn = ({ childComp, bg, color, text }: ParentCompProps) => {
  return (
    <Button
      leftIcon={childComp}
      width="100%"
      height={"50px"}
      color={color}
      bg={bg}
      borderRadius={"10px"}
      border={"1px solid btnblue"}
      fontSize="20px"
    >
      {text}
    </Button>
  );
};
