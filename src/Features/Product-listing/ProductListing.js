import React from 'react';
import { connect } from 'react-redux';

import ProductListItems from './Product_List_Item';

const productListing = props => {

    console.log("props.cart : ", props.cart);
    return(
        <div className="product-listing">

            {
                props.products.map( (product, index) => {
                    return (<ProductListItems key={index} product={product}
                    addToCart={props.addToCart}
                    removeFromCart={props.removeFromCart}
                    cartItem={props.cart.filter(cartItem => cartItem.id === product.id)[0]} />)
                })
            }

        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addToCart: (item) => {
            console.log("ADD item : ", item);
            dispatch({
                type: "ADD",
                payload: item
            })
        },
        removeFromCart: (item) => {
            dispatch({
                type: "REMOVE",
                payload: item
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(productListing);