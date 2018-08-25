import React from 'react';

export default function RemoveButton(props){
    return(
        <button className="DeleteButton" onClick={() => props.removeFromCart(props.cartItem)}>Remove</button>
    )
}