import {
  Box,
  Flex, Image, Stack, Text
} from "@chakra-ui/react";

import { Button } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();
    return (
      <Flex
        width={"100%"}
        bg="grey"
        p="20px"
        color={"white"}
        alignItems="center"
        textAlign={"center"}
      >
        <Box width="40%" className="logo" textAlign={"left"}>
          <Text>Logo</Text>
          <Image src="" alt="" />
        </Box>
        <Box>
          <Stack spacing={4} direction='row' align='center'>
            <Box>
            <Button onClick={() => navigate("/login")} colorScheme='blue'>Log In</Button>
            </Box>
            <Box>
            <Button onClick={() => navigate("/signup")} colorScheme='blue'>Sign Up</Button>
            </Box>
          </Stack>
        </Box>
      </Flex>
    );
  };
  
  export default NavBar;