import React from 'react'
import { createRoot } from 'react-dom/client'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import Main from './components/Main/Main'

const GlobalStyle = createGlobalStyle`
  ${reset}
`

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <>
    <GlobalStyle />
    <Main />
  </>,
)
