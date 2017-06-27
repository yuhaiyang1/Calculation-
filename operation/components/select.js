
import { createStore, bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import ReactDom from 'react-dom';
import {select} from '../actions';
import React, { Component, PropTypes } from 'react';
 class Select extends React.Component {
  constructor(props) {
		super(props);
    this.val = '';
    this.result = '';
  }
  firstChange(e){
    let data = this.props.data.todos;
    console.log(this.props.data.todos);
    this.props.actions.select(e.target.value);
    this.val = e.target.value;
    switch (this.val) {
      case '+':
        this.result = Number(data.firstVal)+Number(data.secondVal);
        console.log(this.result);
        break;
      case '-':
        this.result = Number(data.firstVal)-Number(data.secondVal);
        console.log(this.result);
        break;
      case '*':
        this.result = Number(data.firstVal)*Number(data.secondVal);
        console.log(this.result);
        break;
        case '/':
          this.result = Number(data.firstVal)/Number(data.secondVal);
          console.log(this.result);
          break;
      default:

    }
  }
  render() {
    return (
      <div>
        <select onChange={this.firstChange.bind(this)} value={this.val}>
          <option value='+' >+</option>
          <option value='-'>-</option>
          <option value='*'>*</option>
          <option value='/'>/</option>
        </select>
        {'结果:'+this.result}
      </div>
    );
  }
}


  function mapStateToProps(state) {
    return { data: state};
  }

  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators({select},dispatch),
    };
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Select) ;
