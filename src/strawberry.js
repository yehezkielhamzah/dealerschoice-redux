import React from 'react';
import store from './store';

class Strawberry extends React.Component {
  constructor () {
    super();
    this.state = store.getState();
  }

  componentDidMount() {
    store.subscribe(() => this.setState(store.getState()))
  }

  render () {
    const inventory = this.state.strawberry
    return (
      <li>Strawberry - {inventory}</li>
  )
  }
}

export default Strawberry