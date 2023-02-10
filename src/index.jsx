import {
  ChakraProvider,
  createStandaloneToast,
  extendTheme
} from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const { toast, ToastContainer } = createStandaloneToast();

const theme = extendTheme({
  colors: {
    dark: "#000",
    grey: "#21212B",
    white: "#fff",
    btnblue: "#00AAFF",

    lightblue: {
      500: "#00AAFF",
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
      <ToastContainer />
    </ChakraProvider>
  </React.StrictMode>
);

export const errorNotifier = (errorMessage) => {
  return toast({
    title: "Error",
    description:
      typeof errorMessage === "string" ? errorMessage : "SOMETHING WENT WRONG",
    status: "error",
    duration: 5000,
    isClosable: true,
    position: "top-right",
  });
};

export const successNotifier = (info) => {
  return toast({
    title: "Success",
    description: info,
    status: "success",
    duration: 5000,
    isClosable: true,
    position: "top",
  });
};

export const shortNotifier = (info) => {
  return toast({
    title: "Success",
    description: info,
    status: "success",
    duration: 5000,
    isClosable: true,
    position: "bottom",
  });
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
