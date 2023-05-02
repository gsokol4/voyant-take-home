import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import theme from '../theme-and-global-styles/theme'
import GlobalStyles from '../theme-and-global-styles/global.styles'
import Nav from '../components/nav/nav'
import AddForm from '../components/add-form/addForm'


const AddDogPage = () => {
  return (
  <ThemeProvider theme={theme}>
    <GlobalStyles/>
    <Nav/>
    <AddForm/>
  </ThemeProvider>
  )
}

export default AddDogPage

export const Head = () => <title>Add your Dog!</title>
