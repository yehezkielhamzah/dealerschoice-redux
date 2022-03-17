import { createStore } from 'redux'

const reducer = (state = { flavors: [], chocolate: 10, vanilla: 10, strawberry: 10 }, action) => {
  return state;
}

const store = createStore(reducer);

export default store;