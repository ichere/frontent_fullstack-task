import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { CustomInputGroup } from "../components/CustomInputGroup";
import { Formcontrol } from "../components/FormControl";
import { LargeBtn } from "../components/LargeBtn";
import NavBar from "../components/NavBar";

const LoginPage = () => {
  return (
    <Flex>
      <Stack
            flex="1"
            alignItems={"center"}
            borderRadius="2px"
            position={"fixed"}
            right="0"
            left={"0"}
            zIndex="1022"
          >
          <NavBar />
        </Stack>
      <Flex
      background={"white"}
      width="100%"
      height="100vh"
      alignItems={"center"}
      // justifyContent="center"
      p="30px 60px"
    >
      <Box width={"50%"} textAlign="left">
        <Box width={"80%"}>
          <Box mb="20px">
            <Heading color={"#000000"} fontSize="32px" as="h2">
              Welcome Back!
            </Heading>
            <Text color={"#828282"}>Login to access your account</Text>
          </Box>

          <Box>
            <Formcontrol
              type={"email"}
              placeholder={"Enter your email"}
              label="Email"
            />
          </Box>
          <Box>
            <CustomInputGroup
              placeholder={"Enter your password"}
              type={"password"}
              label={"Password"}
            />
          </Box>
          <Box mt="40px">
            <LargeBtn text={"Log in"} bg="btnblue" color="white" />
            <Box mt="20px">
              <LargeBtn
                text={"Log in with Google"}
                bg="white"
                color="#000"
                childComp={<FcGoogle size={24} />}
              />
            </Box>

            <Text textAlign={"center"} mt="10px">
              Don't have an account?{" "}
              <Text as="span" color="btnblue" cursor={"pointer"}>
                <Link to="/">Sign Up</Link>
              </Text>
            </Text>
          </Box>
        </Box>
      </Box>
      {/* <Box width={"50%"} height="100%">
        <BackgroundImage />
      </Box> */}
    </Flex>
    </Flex>
  );
};

export default LoginPage;
