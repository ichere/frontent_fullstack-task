import { Box, Flex, Stack } from "@chakra-ui/react";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";

import NavBar from "./NavBar";

function AuthenticatedRoutes() {
  return (
    <Suspense fallback={<p></p>}>
      <BrowserRouter>
        <Stack direction={"row"} position="relative">
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
          <Flex width="100%" position={"relative"} top="90px">
            <Box
              width="80%"
              position={"relative"}
              left="260px"
              color="white"
              p="30px"
            >
              <Routes>
                <Route path="/" element={<HomePage />} />
              </Routes>
            </Box>
          </Flex>
        </Stack>
      </BrowserRouter>
    </Suspense>
  );
}

export default AuthenticatedRoutes;
