
import React from 'react';
import { UsersContext} from '../context/UserContext.js';

class UserCard extends React.Component{
    _handleOnDelete=()=>{
        const {user} = this.props;
        const {deleteUser} = this.context;

        console.log("USER CONTEXT" , this.context);
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
                        <button onClick={this._handleOnDelete}>Delete User</button>
                    </div>
                </div>
            </div>
        )
    }
}
UserCard.contextType = UsersContext;

export default UserCard;

