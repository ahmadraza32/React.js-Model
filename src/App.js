import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { GlobalStyle } from './globalStyle'
import Model from './Model'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

const Button = styled.button`
  padding: 14px 32px;
  font-size: 1.3rem;
  cursor: pointer;
  border: none;
  border-radius: 4px;
`

const App = () => {
  const [showModel, setShowModel] = useState(false)

  return (
    <Container>
      <Button onClick={() => setShowModel(prev => !prev)}>Open Model</Button>
      <Model showModel={showModel} setShowModel={setShowModel} />
      <GlobalStyle />
    </Container>
  )
}

export default App
