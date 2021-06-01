import React from 'react';
import {ThemeContextConsumer} from '../context/ThemeContext';
import {UserContextConsumer} from '../context/UserContext';
import UserCard from './UserCard';

class UserList extends React.Component{
    render(){
        return(
            <ThemeContextConsumer>
                {({theme})=>(
                    <UserContextConsumer>
                        {({ users })=>(
                            <div className ={`${theme}-theme`}>
                                <h1> List of Users </h1>
                                {users.map((user)=>(
                                    <UserCard key={user.id} user={user}/>
                                ))}
                            </div>
                        )}
                    </UserContextConsumer>
                )}
            </ThemeContextConsumer>
        );
    }
}
export default UserList;