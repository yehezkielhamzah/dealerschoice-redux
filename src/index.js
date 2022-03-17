import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux'
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
  }


  render () {
    const { flavors } = this.state
    return (
      <div id="container">
        <button>Add</button>
        <h2>Ice Cream Flavors</h2>
          <Strawberry /><button onClick={() => store.dispatch({type:'SELL_ST'})}>1 scoop strawberry</button>
          <Chocolate  /> <button onClick={() => store.dispatch({type:'SELL_CH'})}>1 scoop chocolate</button>
          <Vanilla /><button onClick={() => store.dispatch({type: 'SELL_VA'})}>1 scoop vanilla</button>
      </div>
    )
  }
}

const root = document.querySelector('#root')
render(<Provider store={store}><App /></Provider>, root);

