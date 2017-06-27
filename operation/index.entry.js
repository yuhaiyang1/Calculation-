'use strict';
import React, {Component} from 'react';
import {render} from 'react-dom';
require('es6-promise').polyfill();
require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');
import 'isomorphic-fetch';
import {Spin} from 'antd';
import Calculation from './components';
import {EventEmitter} from 'fbemitter';
import {ActionBar,BdMain} from 'PureCom';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import reducer from  './reducers';
const store = createStore(reducer);
class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
		};
	}
	render() {
		return (
			<div style={{marginLeft: 225}} >
				<ActionBar title='四则运算' />
				<BdMain
					style={{left: 250,top: 120}}
				>
					<Spin spinning={this.state.loading} style={{minHeight: 300}} tip='加载中....' size='large'>
						<Calculation/>
					</Spin>
				</BdMain>
			</div>
		)
	}
}
render(
	<Provider store={store}>
		<Main />
	</Provider>	, document.getElementById('main'));
