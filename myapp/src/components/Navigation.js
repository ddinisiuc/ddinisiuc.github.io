import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import './navigation.css';
import Foto from '../fire.png';
import Mandala from '../mandala.png'
import Performance from '../performance.png'
import News from '../news.png'
import Av from '../about.png'

export	 class Navigation extends Component{
	render(){
		return( 

		<div className="wrapper">
		      <div className="card">
			    <div className="foto"> 
			       <img src={Foto} alt="log"/>
			    </div>
			      <div className="link">
			         <NavLink to="/" >Home</NavLink>
			      </div>


		   </div>
		<div className="card">
			    <div className="foto"> 
			       <img src={Mandala} alt="log"/>
			    </div>
			    <div className="link">
					<NavLink to="/ledshow"  >Ledshow</NavLink>
				</div>
		</div>


		<div className="card">
			    <div className="foto"> 
			       <img src={Performance} alt="log"/>
			    </div>
			    <div className="link">
					<NavLink to="/Performance" >Performance</NavLink>
		  		</div>
		</div>

		<div className="card">
			    <div className="foto"> 
			       <img src={News} alt="log"/>
			    </div>
			    <div className="link">
		<NavLink to="/news"  >News </NavLink>
			</div>
		</div>

		<div className="card">
			    <div className="foto"> 
			       <img src={Av} alt="log"/>
			    </div>
			    <div className="link">
		<NavLink to="/about"  >About</NavLink>
			</div>
		</div>
				</div>
				

			)
	}
};
export default Navigation;