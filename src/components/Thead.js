import React, { Component } from 'react';

class Thead extends Component{
	render(){
		return(		
	    <th scope="col">{this.props.row}</th>
		)
	}
}

export default Thead;