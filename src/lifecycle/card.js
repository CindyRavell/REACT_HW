import React from 'react';
import './card.css';
import Description from './description.js';
import Anuncios from './anuncios.js';
import ComponentCatchError from './buttonError.js'

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      display: true,
      error:null,
      description: null,
      currentName: null,
      hasError:false,
      errorMsg:"",
    };
  }

  componentDidCatch(error, errorInfo){
    console.log({error,errorInfo});
    this.setState({
      hasError:true,
      errorMsg: error.toString()
    });
  }
  componentDidMount() {
    /// serviceX.subscribe(user);
    fetch("https://ghibliapi.herokuapp.com/films")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          loading: true,
          cards: result,
          
        });
        console.log(this.state.cards)
      },
      // error handler
      (error) => {
        this.setState({
          hasError:true,
          errorMsg:error
        });
        console.log(error)
      }
    )
  }

  HandleCards(card){
    this.setState({currentName:card.title, description:card.description})
  }
  delete = () => {
    this.setState({ display: false });
  }
 
  
  render() {
    if(this.state.hasError){
      return(
        <div>
          Error: {this.state.errorMsg}
        </div>
      )
    }
    return (
      <div>
        <div className="cards">{this.state.cards.map((card,index)=><p className="card" key={index} onClick={e => this.HandleCards(card)} style={{cursor: 'pointer'}}   >{card.title}</p>) }</div>
        <Description
                currentName= {this.state.currentName}
                description ={this.state.description}
              />
        <ComponentCatchError/>
        <button onClick={this.delete}>
          x close advertisements
        </button>
        {this.state.display? <Anuncios/>:null}
      </div>
    );
  }
}

export default Card;