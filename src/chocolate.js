import React from 'react';
import store from './store';

class Chocolate extends React.Component {
  constructor () {
    super();
    this.state = store.getState();
  }

  componentDidMount() {
    store.subscribe(() => this.setState(store.getState()))
  }

  render () {
    const inventory = this.state.chocolate
    return (
        <li>Chocolate - {inventory}</li>
    )
  }
}

export default Chocolate