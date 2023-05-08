import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../theme-and-global-styles/global.styles.js";
import theme from "../theme-and-global-styles/theme.js";
import Nav from "../components/nav/nav.js";
import Find from "../components/find/find.js";

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Nav />
      <Find />
    </ThemeProvider>
  );
};

export default IndexPage;

export const Head = () => <title>The Doggos of Voyant</title>;
