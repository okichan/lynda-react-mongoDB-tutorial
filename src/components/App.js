import React from 'react';
import Header from './Header'
import { log } from 'util';
import { get } from 'http';

class App extends React.Component {
	state = {
			pageHeader: "Naming Contests"
		}
	componentDidMount() {
      console.log('did mount');
   }
   
	
	componentWillUnmount() {
      console.log('will unmount');
	}


	render() {
		return (
			<div className="App">
				<Header message={ this.state.pageHeader }/>
				
			</div>      
		)
	}
}   

export default App
