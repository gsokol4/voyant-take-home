import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import theme from '../theme-and-global-styles/theme'
import GlobalStyles from '../theme-and-global-styles/global.styles'
import Nav from '../components/nav/nav'


const IndexPage = () => {
  return (
  <ThemeProvider theme={theme}>
    <GlobalStyles/>
    <Nav/>
  </ThemeProvider>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
