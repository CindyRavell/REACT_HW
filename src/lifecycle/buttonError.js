import React from 'react';

class ButtonError extends React.Component {
    state={
            throwError:false
    }    
   

    buttonErrorHandling=()=>{
        console.log(this.state.throwError)
        this.setState({throwError:true})
    }
    
    render(){
        if(this.state.throwError){
            throw new Error('Button Error')
        }
        return(
            <button onClick={this.buttonErrorHandling}>
                launch Error
            </button>
        )
    }
}


class ComponentCatchError extends React.Component {
  state={
      hasError:false,
      errorMsg:""
  }

  componentDidCatch(error, errorInfo){
    console.log({error,errorInfo});
    this.setState({
      hasError:true,
      errorMsg: error.toString()
    });
  }

  Errorhandling=()=>{
      this.setState({hasError:false})
  }
  
  render() {
    if(this.state.hasError){
      return(
        <div>
          <p>Component Error: {this.state.errorMsg}</p>
          <button onClick={this.Errorhandling}>
            return
          </button>
        </div>
      )
    }
    return (
      <div>
        <ButtonError></ButtonError>
      </div>
    );
  }
}

export default ComponentCatchError;