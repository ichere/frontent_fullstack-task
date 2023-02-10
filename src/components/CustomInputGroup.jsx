import {
  Box, Button,
  FormControl,
  FormLabel, Input, InputGroup,
  InputRightElement
} from "@chakra-ui/react";
import React from "react";

export const CustomInputGroup = ({ placeholder, type, label }) => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Box width={"100%"}>
      <FormControl width="100%" mb="10px">
        <FormLabel width={"100%"} color="#000000">
          {label}
        </FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : type}
            placeholder={placeholder}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </Box>
  );
};
