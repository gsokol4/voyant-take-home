import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import theme from '../theme-and-global-styles/theme'
import GlobalStyles from '../theme-and-global-styles/global.styles'
import Nav from '../components/nav/nav'
import Search from '../components/search/search'
import List from '../components/list/list'
import Find from '../components/find/find'


const IndexPage = () => {
  return (
  <ThemeProvider theme={theme}>
    <GlobalStyles/>
    <Nav/>
    <Find/>
  </ThemeProvider>
  )
}

export default IndexPage

export const Head = () => <title>The Doggos of Voyant</title>
