import axios from "axios";
import React from "react";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

class AddUser extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        users: []
      };
      this.nameInput = React.createRef();
      this.jobInput = React.createRef();
    }
  
    handleOnFormSubmit = (event) => {
      event.preventDefault();
      const APIUrl = "https://reqres.in/api/users/";
      const name = this.nameInput.current.value;
      const job = this.jobInput.current.value;
      axios.post(APIUrl, { name: name, job: job })
      .then((response) => {
        this.setState(state=>{
          if(state.users.every((item)=>item.id!==response.data.id)){
            return state.users.push(response.data)
          }
          
        })
      });
    };
    render() {
      return (
        <>
        <div className='sub'>
        <form onSubmit={this.handleOnFormSubmit}>
          <label>
            Name:
            <input type="text" name="user" ref={this.nameInput} />
          </label>
          <label>
            job:
            <input type="text" name="email" ref={this.jobInput} />
          </label>
          <div style={{ marginTop: 10 }}>
            <input type="submit" value="add User" />
          </div>
        </form>
        </div>
        <div>
        <Grid container spacing={3} >
         {this.state.users.map(user=>(
             <Grid item xs={4} key={user.id}>
             <Card >
               <CardContent className="text">
               <h1>{user.name}</h1>
                        <p> {user.job}</p>
               </CardContent>
             </Card>
           </Grid>
           ))}
           </Grid>
        </div>
        </>
      );
    }
  }
  export default AddUser;