import React, {Component} from 'react';
import './slide.css';

class slide extends Component{
  render(){
  return (
    <div id="slider">
  		<figure>
      	 <img src={this.props.src} alt="Have 1 pic here"/> 
      	 <img src={this.props.srcc} alt="Have 1 pic here"/>
      	 <img src={this.props.srccc} alt="Have 1 pic here"/>  
      	 <img src={this.props.src} alt="Have 1 pic here"/> 
      	 <img src={this.props.srccc} alt="Have 1 pic here"/>     	
     	</figure>
    </div>
  );
}
}

export default slide;
