import React from 'react';

class Counter extends React.Component{

    incrementCounter = () =>{
        this.setState( state => ({
            count : state.count+1
        }) );
        console.log(this.state.count);
    }

    render()
    {
        console.log(this.props.count);
        return(
            <div className="divCounter">
                <h1>{this.props.count}</h1>
                <button onClick={this.props.inc}>Inc++</button> 
            </div>
        );
    }

}

export default Counter;