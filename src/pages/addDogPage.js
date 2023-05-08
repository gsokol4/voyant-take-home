import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../theme-and-global-styles/theme.js";
import GlobalStyles from "../theme-and-global-styles/global.styles";
import Nav from "../components/nav/nav.js";
import AddForm from "../components/add-form/addForm.js";

const AddDogPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Nav />
      <AddForm />
    </ThemeProvider>
  );
};

export default AddDogPage;

export const Head = () => <title>Add your Dog!</title>;
