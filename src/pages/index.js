import React from 'react'
import ReactDOM from 'react-dom'
import posthog from 'posthog-js'
import { ThemeProvider } from 'styled-components'
import theme from '../theme+globalStyles/theme'
import GlobalStyles from '../theme+globalStyles/Global.styles'
import { useEffect, useState } from 'react'
import Nav from '../components/nav/Nav'
import CourseHeader from '../components/courseHeader/CourseHeader'

posthog.init('phc_qpt8IKBIV5NujRMT5SYcSQ9zJU1QClrDfFvqirsRkmH', { api_host: 'https://app.posthog.com' })


const IndexPage = () => {
  return (
  <ThemeProvider theme={theme}>
    <GlobalStyles/>
    <Nav/>
    <CourseHeader/>
  </ThemeProvider>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
