import React, { Component } from 'react';

// import Users from './users.json';

import Thead from './Thead';

import Tbody from './Tbody';

const DatoRow = ["id", "name"];

const UrlJson = 'https://openlibrary.org/recentchanges.json?limit=10';

class Head extends Component{
	render(){
		return(
				<thead>
					<tr>
						{
			    		this.props.row.map((row,i)=>{
			    			return(
			    				<Thead key={i} row={row}/>
			  				)
			    		})
			    	}
					</tr>
				</thead>			 	
		)
	}
}



class Body extends Component{
	render(){
		return(
			<tbody>
	    	{
	    		this.props.users.map((user, i)=>{
	    			return(
	    				<Tbody key={i} user={user}/>
    				)
	    		})
	    	}			    	
			</tbody>
		)
				
	}
}


class UserIndex extends Component {

	constructor(){
		super()
		this.state = {
			users: []
		}
	}


	componentDidMount(){
		setInterval(async ()=>{
			const response = await fetch(UrlJson);
			const data = await response.json();
			console.log(data);
			this.setState({users: data})
		}, 1000)
	}


	render(){
		return(
			<div>

				<table className="table">				 			    
		     	<Head row={DatoRow}/>      		  						
			    <Body users={this.state.users}/>				 
				</table>

			</div>
		)
	}
}

export default UserIndex; 