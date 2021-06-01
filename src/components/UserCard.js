
import React from 'react';
import {ThemeContextConsumer} from '../context/ThemeContext';
import {LoginContext} from '../context/LoginContext.js';

class UserCard extends React.Component{
    _handleOnDelete=()=>{
        const {user, deleteUser} = this.props;
        deleteUser(user.id);
    };
    
    render(){
        const{name, biography, avatar} = this.props.user;
        const{isLoggedIn,loginHandler,logOut}=this.context;
        const e = {user:"test",password:12345}
        if(isLoggedIn){
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
                            <button  className={`${theme}-button button`}onClick={()=>logOut()}>Log Out</button>
                            </>
                            )}
                        </ThemeContextConsumer>
                        </div>
                </div>
            </div>
        )
    }
}
}
            


export default UserCard;

UserCard.contextType = LoginContext;
