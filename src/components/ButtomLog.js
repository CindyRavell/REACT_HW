
import React from 'react';
import {LoginContext,LoginContextConsumer} from '../context/LoginContext.js';

class Bottom extends React.Component{

    render(){
        console.log("seee the", this.props, "contexr",this.context)

        return(
            <LoginContextConsumer>
                {({ theme })=>(
                    <button className={`${theme}-button button`} onClick={this.context.toggleTheme}>{this.props.text}</button>
                )}
            </LoginContextConsumer>
            
        )
    }
}
Bottom.contextType = LoginContext;

export default Bottom;