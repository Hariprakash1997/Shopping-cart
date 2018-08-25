import React from 'react';

import ProductListing from '../Features/Product-listing/ProductListing';
import data from '../Data/Products.json';

export default function Homepage(props){
    return(
        <div>
            <h2 className="Homepage">5 GUNS THAT SHAPED THE WORLD</h2>
            <ProductListing products={data.products}/>
        </div>
    )
}