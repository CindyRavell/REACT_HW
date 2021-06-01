import React, { Component } from 'react';

const LoginContext = React.createContext();
const {Provider, Consumer} = LoginContext;


class LoginContextProvider extends Component {
    constructor(props){
        super(props)
        this.loginHandler = this.loginHandler.bind(this)
        this.logOut = this.logOut.bind(this)
    }
    state = {
        isLoggedIn:true,
        user:"test",
        password:12345,
    };
    logOut (){

        this.setState({isLoggedIn:false})
    
    }

    loginHandler ({user,password}){
    
        if(this.state.user=== user&&this.state.password===password){
        this.setState(({isLoggedIn})=>({
            isLoggedIn: isLoggedIn === true? false :true,
            
        }));
    }
    }

    render(){
        const {isLoggedIn, user, password} = this.state;
        return(
            <Provider value ={{isLoggedIn, loginHandler: this.loginHandler,logOut: this.logOut,user, password}}>
                {this.props.children}
            </Provider>
        )
    }

}
export{LoginContext,LoginContextProvider, Consumer as LoginContextConsumer};