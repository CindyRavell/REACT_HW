
import React from 'react';
import {ThemeContextConsumer} from '../context/ThemeContext';

class CarCard extends React.Component{

    render(){
        const {model, year, kmh, isElectric} = this.props.car;

        return(
            <ThemeContextConsumer>
                {({ theme })=>(
                <div className={`${theme}-car container`}>
                    <div className="car">
                        <h1> Model <b>{model}</b> </h1>
                        <div><b>Year</b>{year}</div>
                        <div><b>KM/H</b>{kmh}</div>
                        <div><b>Fuel</b>{isElectric? "Electric":"Gasoline"}</div>
                    </div>
                </div>
                )}
            </ThemeContextConsumer>
            
        )
    }
}
export default CarCard;