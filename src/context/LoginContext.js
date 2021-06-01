import React, { Component } from 'react';

const LoginContext = React.createContext();
const {Provider, Consumer} = LoginContext;


class LoginContextProvider extends Component {
    state = {
        isLoggedIn:true,
        user:"",
        password:"",
    };

    loginHandler =()=>{
        this.setState(({isLoggedIn})=>({
            isLoggedIn: isLoggedIn === true? false :true,
            
        }));
    }

    render(){
        const {isLoggedIn, user, password} = this.state;
        return(
            <Provider value ={{isLoggedIn, loginHandler: this.loginHandler,user, password}}>
                {this.props.children}
            </Provider>
        )
    }

}
export{LoginContext,LoginContextProvider, Consumer as LoginContextConsumer};