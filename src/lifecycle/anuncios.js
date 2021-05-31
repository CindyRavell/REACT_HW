import React from 'react';


class Anuncios extends React.Component {
  
  componentWillUnmount() {
    alert('The component is going to be unmounted');
  }

  render() {
    return (
      <React.Fragment>
        <div className="cards_description">
        <img src={"https://upload.wikimedia.org/wikipedia/commons/8/86/Studio_Ghibli_portal_logo.png"} className="App-ghibli" alt="ghibli" />
        </div>
      </React.Fragment>
    );
  }
}

export default Anuncios;