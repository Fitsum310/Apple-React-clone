import React, {Component} from 'react';
import logo from './logo.svg';

import Nav from './Components/Nav/Nav'
import Footer from './Components/Footer/Footer'
import Main from './Components/Main/Main'



import './App.css';

class App extends Component {
	render(){
	  return (
	    <div>
	      <Nav /> 
	      <Main /> 
	      <Footer /> 
	    </div>
	  )		
	}

}

export default App
