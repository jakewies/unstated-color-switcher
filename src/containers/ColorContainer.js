import { Container } from 'unstated'
import rcolor from 'rcolor'

const init = rcolor()

class ColorContainer extends Container {
  state = {
    color: init
  }

  make = () => {
    const color = rcolor()
    this.setState({
      color
    })
  }

  active = () => this.state.color
}

export default ColorContainer
