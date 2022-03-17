import { createStore } from 'redux'

const reducer = (state = { flavors: [], chocolate: 10, vanilla: 10, strawberry: 10 }, action) => {
  if(action.type === 'SELL_CH') {
    state = {
      ...state, chocolate: state.chocolate - 1
    }
  }
  return state;
}

const store = createStore(reducer);

export default store;