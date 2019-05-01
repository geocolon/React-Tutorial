import React, { Component } from 'react';

class Ninjas extends Component{
    render(){
        const { ninjas } = this.props;
        const ninjaList = ninjas.map(ninja => {
            return (
                 <div className="ninga">
                <div>Name: { name }</div>
                <div>Age: { age }</div>
                <div>Belt: { belt }</div>
                </div>
            )
        })
        return(
           <div className="className ninja-List">
               { ninjaList }
           </div>
        )
    }
}

export default Ninjas;