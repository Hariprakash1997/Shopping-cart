import React from 'react';
import {connect} from 'react-redux';


// const cartQuantity = (cartItems) => {
//     console.log("cartItems : ", cartItems);
//     return cartItems.reduce((acc, item) => {
//         console.log("Reduce Item : ", item);
//         const filteredItem = acc.filter(item2 => item2.id === item.id)[0];
//         console.log("filteredItem  : ", filteredItem);
//         filteredItem !== undefined ? filteredItem.quantity++ : acc.push({ ...item, quantity: 1});
//         return acc;
//     }, [])
// }

// const sort = item => item.sort((a,b) => a.id < b.id);

// function sort(items){
//     return items.sort((a, b) => a.id < b.id)
// }

const cart = (props) => {
    return( 
    <table>
        <thead>
            <th>Item</th>
            <th>Quantity</th>
            <th></th>
            <th></th>
        </thead>
        <tbody>
            {
                props.cart.map(item => 
                    <tr>
                        <td>{item.name}</td>  
                        <td>{item.quantity}</td>  
                        <td>
                            <button
                            onClick={() => props.addToCart(item)}
                            >+</button>
                        </td>
                        <td>
                            <button
                            onClick={() => props.removeFromCart(item)}
                            >-</button>
                        </td>
                        <td>
                            <button
                            onClick={() => props.removeAllFromCart(item)}
                            >Remove all from cart</button>
                        </td>
                    </tr>)
            }
        </tbody>
    </table>
    )
}

const mapStateToProps = (state) => {
    return{
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addToCart : (item) => {
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
        },
        removeAllFromCart: (item) => {
            dispatch({
                type: "REMOVE_ALL",
                payload: item
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(cart);
