import React from 'react';


class Description extends React.Component {

  shouldComponentUpdate(nextProps){
    return this.props.currentName !== nextProps.currentName
  }
  componentDidUpdate(){

    const div = document.getElementById('this')
    div.animate([
      // keyframes
      { transform: 'translateX(-1000px)' },
      { transform: 'translateX(0px)' }
    ], {
      // timing options
      duration: 1000,
  
    });
  }
  render() {
    return (
      <React.Fragment>
        <div className="cards_description" id="this">
          Click to see the description
          <div className="description">
            {this.props.currentName}
          </div>
          <p className="description">{this.props.description}</p>
        </div>
      </React.Fragment>
    );
  }
}

export default Description;