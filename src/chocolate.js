import React from 'react';
import store from './store';

class Chocolate extends React.Component {
  constructor () {
    super();
    this.state = store.getState();
  }

  render () {
    const inventory = this.state.chocolate
    return (
      <ul>
        <li>Chocolate - {inventory}</li>
      </ul>
    )
  }
}

export default Chocolate