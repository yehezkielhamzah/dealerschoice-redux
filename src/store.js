import { createStore } from 'redux'

const reducer = (state = { flavors: [], chocolate: 10, vanilla: 10, strawberry: 10 }, action) => {
  if(action.type === 'SELL_CH') {
    state = {
      ...state, chocolate: state.chocolate - 1
    }
  }
  if(action.type === 'SELL_VA') {
    state = {
      ...state, vanilla: state.vanilla - 1
    }
  }
  if(action.type === 'SELL_ST') {
    state = {
      ...state, strawberry: state.strawberry - 1
    }
  }
  return state;
}

const store = createStore(reducer);

export default store;