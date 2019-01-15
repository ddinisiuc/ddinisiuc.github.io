import React,{Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import  Home from './components/Home';
import LedShow from './components/LedShow';
import Fire from './components/Fire';
import Navigation from './components/Navigation';
import './App.css';


class App extends Component{
	render(){
		return(

			<BrowserRouter>
    <div>
    <Navigation />
      		<div> 
            <div id="poshome"><Route exact path="/" component={Home} exact /></div>
     	   	<Route exact path="/ledshow" component={LedShow} />
     	   	<Route exact path="/fire" component={Fire} />

     	   	</div>

         		
    </div>

     </BrowserRouter>

			);
	}
}
export default App;