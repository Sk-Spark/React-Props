import React from 'react';

import Counter from './counter';

class Board extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {c1: 0, c2:0};
    }

    incC1 = () =>{
        this.setState( state => ({
            c1 : state.c1+1
        }) );
    }

    incC2 = () =>{
        this.setState( state => ({
            c2 : state.c2+1
        }) );
    }

    render(){
        return(
            <div >
                <Counter count={this.state.c1} inc={this.incC2} />
                <Counter count={this.state.c2} inc={this.incC1} />
            </div>
        );
    }

}

export default Board;