import React from 'react';

import AddButton from './Add_Btn';
import RemoveButton from './Remove_btn';

export default function productListItem(props){

    console.log("props.cart : ", props.cart);

    // const thisItemInCart = props.cart.filter(item => item.id === props.product.id)[0];

    return(
        <div className="product-list-item">
            <h3 className="ProductName"> { props.product.name } </h3>
            <img className="ProductImage" height={100} 
            alt={props.product.name}
            src={`/products/${props.product.image}`} />
            <div className="ProductDescription">{props.product.description}</div>
            <div className="Price">Price - ${props.product.price}</div>
            <div>
                <AddButton 
                cartItem={props.cartItem} 
                product={props.product} 
                addToCart={props.addToCart} />

                {
                    props.cartItem ? 
                    <RemoveButton
                    cartItem={props.cartItem}
                    product={props.product}
                    removeFromCart={props.removeFromCart} /> : null
                }

            </div>
        </div>
    )
}