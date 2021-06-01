
import React from 'react';
import {UserContextConsumer} from '../context/UserContext.js';

import CarCard from './CarCard.js';

class UserCarsList extends React.Component{
    render(){
        return(
            <div>
                <div>
            </div>
            <UserContextConsumer>
                {({cars})=>(
                    <>
                        {cars.map((car)=>(
                            <CarCard key={car.id} car={car}/>
                        ))}
                    </>
                )}
            </UserContextConsumer>
            </div>
            
        );
    }
}
export default UserCarsList;
