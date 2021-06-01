import React from 'react';
import Button from './Button.js';
import {ThemeContextConsumer} from '../context/ThemeContext';

class Header extends React.Component{
    render(){
        return(
            <ThemeContextConsumer>
                {({theme, isDay})=>(
                    <div className={`${theme}-theme header`}>
                        <Button text='Toggle Theme'/>
                    </div>
                    
                )}
            </ThemeContextConsumer>
        )
    }
}

export default Header;