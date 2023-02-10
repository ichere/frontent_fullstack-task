import {
  Box, FormControl,
  FormLabel, Input
} from "@chakra-ui/react";
  
  
  export const Formcontrol = ({ type, placeholder, label }) => {
    return (
      <Box width={"100%"}>
        <FormControl width="100%" mb="10px">
          <FormLabel width={"100%"} color="#000000">
            {label}
          </FormLabel>
          <Input
            width="100%"
            height={"50px"}
            type={type}
            placeholder={placeholder}
            border="1px solid #BEBEBE"
            borderRadius={"10px"}
          />
        </FormControl>
      </Box>
    );
  };
  