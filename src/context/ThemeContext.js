import React, { Component } from 'react';

const ThemeContext = React.createContext();
const {Provider, Consumer} = ThemeContext;


class ThemeContextProvider extends Component {
    state = {
        theme: "Day",
        isDay: true
    };

    toggleTheme =()=>{

        this.setState(({theme})=>({
            theme: theme === "Day"? "Night" :"Day",
        }));
    }
    render(){
        const {theme} = this.state;
        return(
            <Provider value ={{theme, toggleTheme: this.toggleTheme}}>
                {this.props.children}
            </Provider>
        )
    }

}
export{ThemeContext,ThemeContextProvider, Consumer as ThemeContextConsumer};