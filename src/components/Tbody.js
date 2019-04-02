import React, { Component } from 'react';

class Tbody extends Component{
	render(){
		return(		
	    <tr>
	    	<th scope="row">{this.props.user.id}</th>
	      <th>{this.props.user.author.key}</th>			      		     
	    </tr>			 
		)
	}
}

export default Tbody;