import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom'
import axios from 'axios'
import store from './store'
import Chocolate from './chocolate'
import Strawberry from './strawberry'
import Vanilla from './vanilla'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      flavors: []
    }
  }

  async componentDidMount() {
    const response = await axios.get('/api/flavors')
    const flavors = response.data
    this.setState({ flavors })
  }

  render () {
    const { flavors } = this.state
    return (
      <div id="container">
        <h2>Ice Cream Flavors</h2>
          <ul>
            <Chocolate />
            <Strawberry />
            <Vanilla />
          </ul>
      </div>
    )
  }
}

const root = document.querySelector('#root')
render(<App />, root);



