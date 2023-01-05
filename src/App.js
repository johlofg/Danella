import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'

import About from 'components/About'
import Portfolio from 'components/Portfolio'
import Header from './components/Header'
import Footer from './components/Footer'
import Dashboard from './pages/Dashboard'

const Main = styled.div`
  display: flex;
  flex-direction: column;  
  height: 100vh;
`

export const App = () => {
  return (

    <Main>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Portfolio />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Main>

  )
}
