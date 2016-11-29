import React,{ Component } from 'react';
import { render } from 'react-dom';
import * as comp from './component';

console.log(comp);
class App extends Component {
	render(){
		return (
			<div>
				<h1>React我来了</h1>
			</div>
		)
	}
};

let root = document.getElementById('app');
render(<App/>,root);