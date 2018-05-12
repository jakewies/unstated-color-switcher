import styled from 'styled-components'
import { lighten } from 'polished'

export const Outer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.bg || '#fff'};

  h1 {
    font-size: 4rem;
    text-transform: ${props => (props.bg ? 'uppercase' : 'initial')};
    color: ${props => (props.bg ? lighten(0.2, props.bg) : '#000')};
  }
`

export const Inner = styled.div`
  text-align: center;
`

export const Button = styled.button`
  border: none;
  padding: 1.2rem;
  font-size: 1.2rem;
  background: #eee;
  width: 150px;

  &:focus {
    outline: 0;
  }
`
