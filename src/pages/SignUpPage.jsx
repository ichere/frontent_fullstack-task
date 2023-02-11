import { Box, Flex, Heading, Progress, Stack, Text } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { CustomInputGroup } from "../components/CustomInputGroup";
import { Formcontrol } from "../components/FormControl";
import { LargeBtn } from "../components/LargeBtn";
import NavBar from "../components/NavBar";



const SignUpPage = () => {
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
      width="100%"
      height="100vh"
      alignItems={"center"}
      // justifyContent="center"
      p="30px 60px"
      background={"white"}
    >
      <Box width={"50%"} textAlign="left">
        <Box width={"80%"}>
          <Box mb="20px">
            <Heading color={"#000000"} fontSize="32px" as="h2">
              Create Account!
            </Heading>
            <Text color={"#828282"}>Sign up to continue</Text>
            <Progress
              mt="10px"
              value={50}
              size="xs"
              colorScheme={"lightblue"}
            />
          </Box>
          <Box>
            <Formcontrol
              type={"text"}
              placeholder={"Enter your first name"}
              label="First name"
            />
          </Box>
          <Box>
            <Formcontrol
              type={"text"}
              placeholder={"Enter your last name"}
              label="Last name"
            />
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
              placeholder={"Create your password"}
              type={"password"}
              label={"Password"}
            />
          </Box>
          <Box mt="20px">
            <LargeBtn text={"Create account"} bg="btnblue" color="#fff" />
            <Box mt="20px">
              <LargeBtn
                text={"Sign up with Google"}
                bg="white"
                color="#000"
                childComp={<FcGoogle size={24} />}
              />
            </Box>

            <Text textAlign={"center"} mt="10px">
              Already have an account?{" "}
              <Text as="span" color="btnblue" cursor={"pointer"}>
                <Link to="/login">Log in</Link>
              </Text>
            </Text>
          </Box>
        </Box>
      </Box>
    </Flex>
    </Flex>
  );
};

export default SignUpPage;
