import React from 'react';
import store from './store';

class Vanilla extends React.Component {
  constructor () {
    super();
    this.state = store.getState();
  }

  componentDidMount() {
    store.subscribe(() => this.setState(store.getState()))
  }

  render () {
    const inventory = this.state.vanilla
    return (
      <li>Vanilla - {inventory}</li>
  )
  }
}

export default Vanilla