import { Container } from 'unstated'
import rcolor from 'rcolor'

class ColorContainer extends Container {
  state = {
    value: null
  }

  update = () => {
    this.setState({
      value: rcolor()
    })
  }
}

export default ColorContainer
