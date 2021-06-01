
import React from 'react';
import { UsersContext,UserContextConsumer} from '../context/UserContext.js';
import {ThemeContext,ThemeContextConsumer} from '../context/ThemeContext';

class UserCard extends React.Component{
    _handleOnDelete=()=>{
        const {user, deleteUser} = this.props;
        deleteUser(user.id);
    };
    
    render(){
        const{name, biography, avatar} = this.props.user;
        

        return(
            <div className = 'container'>
                <img src={avatar} alt={avatar} className="avatar"/>
                <div className="User-info">
                    <h1>{name}</h1>
                    <p>{biography}</p>
                        <div>
                        <ThemeContextConsumer>
                        {({theme})=>(
                            <>
                            <button onClick={this._handleOnDelete} className={`${theme}-button button`}>Delete User</button>
                            </>
                            )}
                        </ThemeContextConsumer>
                        </div>
                </div>
            </div>
        )
        
    }
}
            


export default UserCard;

