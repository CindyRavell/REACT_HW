
import React from 'react';
import './number.css'

const array = Array.from({length: 100}, (_, i) => i + 1)

class Number extends React.Component {
  constructor(props){
    super(props)
    this.changeWord = this.changeWord.bind(this.props)
  }
 
  changeWord(num){
      if(num%3===0 &&num%5===0){
        return { background:'green',word:'FizzBuzz' }
      }else if(num%3===0){
        return { background:'red',word:'Fizz' }
      }else if(num%5===0){
        return { background:'yellow',word:'Buzz' }
      }else{
        return { background:this.background,word:this.word}
      }
    
  }

  render(){
  return (
    
        <div className='container'>{array.map((num,index)=>{
            const { background, word} = this.changeWord(num);
           return <p style={{backgroundColor: background}} key={index}>{num}  {word}</p>
                })}
        </div> 
 
  );
  }
}

export  {Number};


/**

import React from 'react';

class Number extends React.Component {
  constructor(props){
    super(props)
    this.state = {count:0, status:false, word:'',color:'',time:false}
  }

  changeColor=()=> {
        this.setState({status:false});
        if(!this.state.time){
            const time = setInterval(()=>{
               if(this.state.status===false){
                this.setState({count:this.state.count +1, time:true})
                this.changeWord()
                }
        }, 1000);

        if(this.state.status===true){
            clearInterval(time)
        }
        }
  }

  inactiveCount=()=>{
    this.setState({status:true, count:0, time:false, color:''})
    
  }
  changeWord=()=>{
      if(this.state.count%3===0 &&this.state.count%5===0){
        this.setState({word: 'FizzBuzz',color:'green'})
      }else if(this.state.count%3===0){
        this.setState({word: 'Fizz',color:'red'})
      }else if(this.state.count%5===0){
        this.setState({word: 'Buzz',color:'yellow'})
      }else{
        this.setState({word: '',color:''})
      }
  }

  

  render(){
  return (
    <div>
        
        <button onClick={this.changeColor}>Active</button>
        <button onClick={this.inactiveCount}>Reiniciar</button>
        <div id="reset" style={{backgroundColor: this.state.color }}>
                <h1>{this.state.count}</h1>
                <h1>{this.state.word}</h1>
        </div>  
        

    </div>
  );
  }
}

export  {Number};
 */
