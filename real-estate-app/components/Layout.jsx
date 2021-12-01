import { Box } from "@chakra-ui/react";
import Head from "next/head";

export const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Real Estate</title>
      </Head>
      <Box maxWidth="1280px" m="auto">
        <header>NavBar</header>
        <main>{children}</main>
        <footer>Footer</footer>
      </Box>
    </>
  );
};
