
import React from 'react';
import {ThemeContext,ThemeContextConsumer} from '../context/ThemeContext';

class Bottom extends React.Component{

    render(){
        console.log("seee the", this.props, "contexr",this.context)

        return(
            <ThemeContextConsumer>
                {({ theme })=>(
                    <button className={`${theme}-button button`} onClick={this.context.toggleTheme}>{this.props.text}</button>
                )}
            </ThemeContextConsumer>
            
        )
    }
}
Bottom.contextType = ThemeContext;

export default Bottom;