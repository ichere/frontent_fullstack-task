import {
  Box, Flex,
  Heading, Stack, Text
} from "@chakra-ui/react";
import NavBar from "../components/NavBar";

// import dayjs from "dayjs";
  
// import markIcon from "../assets/images/mark.png";
// import send from "../assets/images/send.png";
  
  export const HomePage = () => {
    return (
      <Box width="100%">
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
        <Flex width="100%" justifyContent={"space-between"}>
          <Box width={"100%"}>
            <Heading as="h2" fontSize={"20px"} mb="5px">
              Welcome, Monica
            </Heading>
            <Text fontSize={"50px"} fontWeight="semibold">
              {/* {dayjs().format("hh:mm A")} */}
            </Text>
          </Box>
          {/* <Flex justifyContent="flex-end">
            <Image
              mr="50px"
              width={"50px"}
              height="50px"
              src={send}
              alt=""
              cursor={"pointer"}
            />
            <Image
              width={"50px"}
              height="50px"
              src={markIcon}
              alt=""
              cursor={"pointer"}
            />
          </Flex> */}
        </Flex>
      </Box>
    );
  };
  