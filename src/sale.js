import React from 'react';
import axios from 'axios';
import store from './store'
import {connect} from 'react-redux'

const Sale = ({sale}) => {
  return (
    <button onClick={sale}>purchase</button>
  )
}

const mapDispatch = (dispatch) => {
  return {

  }
  console.log(dispatch)
}

export default connect(null, mapDispatch)(Sale)