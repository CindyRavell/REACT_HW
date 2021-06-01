import React, { Component } from 'react';
import {USERS} from './users.js';

const UsersContext = React.createContext();
const {Provider, Consumer} = UsersContext;

class UsersContextProvider extends Component{
    state={
        users: USERS
    }

    deleteUser = (userId)=>{
        this.setState ((prevState)=>({
            users: prevState.users.filter((user)=>user.id!==userId),
        }));
    };
    render(){
        const {users} = this.state;
        const {children} = this.props;
        return(
            <Provider
            value={{
                users,
                deleteUser:this.deleteUser,
                cars: users.map((user)=> user.car),
            }}
            >
                {children}
            </Provider>
        );
    }
}
export {UsersContext,UsersContextProvider,Consumer as UserContextConsumer}