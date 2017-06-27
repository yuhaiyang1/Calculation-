
import { createStore, bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ReactDom from 'react-dom'
import React, { Component, PropTypes } from 'react';
import * as actions from '../actions';
import First from './first';
import Second from './second';
import Select from './select';
// import Result from './result';
class Calculation extends React.Component {
  constructor(props) {
		super(props);
  }

  render() {
    return (
      <div>
        <First/>
        <Second/>
        <Select/>
        {/* <Result/> */}
        {/* <input/>
        <select>
          <option value='+' >+</option>
          <option value='-'>-</option>
          <option value='*'>*</option>
          <option value='/'>/</option>
        </select> */}
      </div>
    );
  }
}


  function mapStateToProps(state) {
    return { data: state.todos };
  }

  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators({...actions},dispatch),
    };
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Calculation) ;
