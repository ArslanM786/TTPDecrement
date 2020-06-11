import React, {Component} from 'react';
import PropTypes from "prop-types"

class Counter extends Component {
 
    constructor(props){
        super(props)
        this.state ={count: this.props.start }
        
    }   
  
    decrement = () =>{
        if (this.state.count === 0){
            return alert("Cannot be less than zero!")
        }
        this.setState({
            count: this.state.count -1 
        })
    }
    render(){
        return (
            <div>
                <p> Current number: {this.state.count}</p>
                <button onClick={this.decrement}>Decrement</button>
                
            </div>
        )
    }

}
Counter.propTypes = {
    start: PropTypes.number.isRequired}

export default Counter;