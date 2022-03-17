import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
      <hr />
    )
  }
}

const root = document.querySelector('#root')
render(<App />, root);