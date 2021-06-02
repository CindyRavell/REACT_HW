import "./App.css";
import axios from "axios";
import React from "react";
import AddUser from "./form/useradd.js";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
class App extends React.Component {
  state = {
    users: [],
    error: null
  };
  componentDidMount() {
    axios({
      method: "GET",
      url: "https://reqres.in/api/users/"
    })
      .then((jsonData) => {
        this.setState({
          users: jsonData.data.data
        });
      })
      .catch((e) => {
        this.setState({
          error: e
        });
        throw new Error(e);
      });
  }
  
  render() {
 
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <AddUser />
        <Grid container spacing={3} >
          {this.state.users.map((user, index) => {
            return (
                <Grid item xs={4} key={user.id}>
                  <Card >
                    <CardContent className="text">
                    <h2>
                      {user.first_name} {user.last_name}
                    </h2>
                    <img src={user.avatar} alt={user.avatar} />
                    <p>{user.email}</p>
                    </CardContent>
                  </Card>
                </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }
}

export default App;

/*
class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      job: ""
    };
  }
  handleName = (event) => {
    console.log(event.target.value);
    this.setState({ name: event.target.value });
  };
  handleJob = (event) => {
    console.log(event.target.value);
    this.setState({ job: event.target.value });
  };
  handleOnFormSubmit = (event) => {
    event.preventDefault();
    const APIUrl = "https://reqres.in/api/users/";
    const { name, job } = this.state;
    axios
      .post(APIUrl, { name: name, job: job })
      .then((response) => console.log(response));
  };
  render() {
    return (
      <form onSubmit={this.handleOnFormSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="user"
            value={this.state.user}
            onChange={this.handleName}
          />
        </label>
        <label>
          job:
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleJob}
          />
        </label>
        <div style={{ marginTop: 10 }}>
          <input type="submit" value="add User" />
        </div>
      </form>
    );
  }
}

class App extends React.Component {
  state = {
    users: [],
    error: null
  };
  componentDidMount() {
    axios({
      method: "GET",
      url: "https://reqres.in/api/users/"
    })
      .then((jsonData) => {
        console.log(jsonData);
        this.setState({
          users: jsonData.data.data
        });
      })
      .catch((e) => {
        this.setState({
          error: e
        });
        throw new Error(e);
      });
  }

  render() {
    console.log(this.state.users);
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <AddUser />
        <div>
          {this.state.users.map((user, index) => {
            return (
              <div key={user.id}>
                <h2>
                  {" "}
                  {user.first_name} {user.last_name}{" "}
                </h2>
                <img src={user.avatar} alt={user.avatar} />
                <p>{user.email}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
*/
/* function getMovies(){
    
    //without async
    const headers = new Headers();
    headers.append("Accept","application/json");
    const request = new Request("https://swapi.dev/api/films/",{
      method:'GET',
      headers
    })
    let data= null;
    fetch(request)
    .then(response=> response.json())
    .then(response=> data = response,
      (error)=>{
        throw new Error(error)
      }
      )
    .then(()=>console.log(data))
    
    }
  getMovies()
  */
