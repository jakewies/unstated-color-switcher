import React from 'react'
import { Subscribe } from 'unstated'
import ColorContainer from '../containers/ColorContainer'
import { Outer, Inner, Button } from './styled'

const App = () => (
  <Subscribe to={[ColorContainer]}>
    {color => {
      const active = color.active()
      return (
        <Outer bg={active}>
          <Inner>
            <h1>{active}</h1>
            <Button onClick={color.make}>Another one!</Button>
          </Inner>
        </Outer>
      )
    }}
  </Subscribe>
)

export default App
