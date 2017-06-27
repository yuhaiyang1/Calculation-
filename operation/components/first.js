
import { createStore, bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import ReactDom from 'react-dom';
import {first} from '../actions';
import React, { Component, PropTypes } from 'react';
 class First extends React.Component {
  constructor(props) {
		super(props);
    this.val = '';
  }
  firstChange(e){
    this.props.actions.first(e.target.value);
    this.val = e.target.value;
  }
  render() {
    return (
      <div>
        <input onChange={this.firstChange.bind(this)} value={this.val} type='Number'/>
      </div>
    );
  }
}


  function mapStateToProps(state) {
    return { data: state};
  }

  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators({first},dispatch),
    };
  }

  export default connect(mapStateToProps, mapDispatchToProps)(First) ;
