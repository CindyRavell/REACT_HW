import React from 'react';
import styled from 'styled-components';


const Buttonstyled = styled.button`
display: inline-block;
color: palevioletred;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
display: block;
&:hover{
    background-color: aqua;
}
`
const Button =(props)=>{
  
    return(
        
        <Buttonstyled>
            {props.name}
        </Buttonstyled>
    
    )
}
export {Button}