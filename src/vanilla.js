import React from 'react';
import store from './store';

class Vanilla extends React.Component {
  constructor () {
    super();
    this.state = store.getState();
  }

  render () {
    const inventory = this.state.vanilla
    return (
      <ul>
        <li>Vanilla - {inventory}</li>
      </ul>
    )
  }
}

export default Vanilla