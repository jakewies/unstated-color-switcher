import React from 'react'
import { Subscribe } from 'unstated'
import ColorContainer from '../containers/ColorContainer'
import { Outer, Inner, Button } from './styled'

const App = () => (
  <Subscribe to={[ColorContainer]}>
    {color => (
      <Outer bg={color.state.value}>
        <Inner>
          <h1>{color.state.value || 'No color selected!'}</h1>
          <Button onClick={color.update}>Hit Me!</Button>
        </Inner>
      </Outer>
    )}
  </Subscribe>
)

export default App
