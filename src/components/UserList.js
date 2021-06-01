import React from 'react';
import {ThemeContextConsumer} from '../context/ThemeContext';
import {UserContextConsumer} from '../context/UserContext';
import UserCard from './UserCard';
import {LoginContext,LoginContextConsumer} from '../context/LoginContext.js';


class UserList extends React.Component{
    render(){
        const{isLoggedIn,loginHandler}=this.context;
        console.log("se supone",this.context)
        if(isLoggedIn){
        return(
            <ThemeContextConsumer>
                {({theme})=>(
                    <>
                    <button  className={`${theme}-button button`}onClick={loginHandler}>Log Out</button>
                    <UserContextConsumer>
                        {({ users, deleteUser })=>(
                            <div className ={`${theme}-theme`}>
                                <h1> List of Users </h1>
                                {users.map((user)=>(
                                    <UserCard key={user.id} user={user} deleteUser={deleteUser}/>
                                ))}
                            </div>
                        )}
                    </UserContextConsumer>
                    </>
                )}
            </ThemeContextConsumer>
        );
    }
    return(
        <ThemeContextConsumer>
                        {({theme})=>(
                            <>
                            <button onClick={loginHandler} className={`${theme}-button button`}>Log In</button>
                            </>
                            )}
        </ThemeContextConsumer>
        
        )

    }
}
export default UserList;

UserList.contextType = LoginContext;


