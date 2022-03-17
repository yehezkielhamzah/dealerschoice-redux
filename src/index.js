import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom'
import axios from 'axios'
import store from './store'
import Chocolate from './chocolate'
import Strawberry from './strawberry'
import Vanilla from './vanilla'
import Sale from './sale'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      flavors: []
    }
  }

  async componentDidMount() {
    store.subscribe(() => this.setState(store.getState()))
    store.dispatch({type: 'SELL_CH'})
  }

  render () {
    const { flavors } = this.state
    return (
      <div id="container">
        <button>Add</button>
        <h2>Ice Cream Flavors</h2>
          <Chocolate  /> <Sale/>
          <Strawberry /> <Sale/>
          <Vanilla /> <Sale/>
      </div>
    )
  }
}

const root = document.querySelector('#root')
render(<App />, root);



