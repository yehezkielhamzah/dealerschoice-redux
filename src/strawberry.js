import React from 'react';
import store from './store';

class Strawberry extends React.Component {
  constructor () {
    super();
    this.state = store.getState();
  }

  render () {
    const inventory = this.state.strawberry
    return (
      <ul>
        <li>Strawberry - {inventory}</li>
      </ul>
    )
  }
}

export default Strawberry