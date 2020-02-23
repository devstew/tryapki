import * as React from 'react';

import SHOP_DATA from "./ShopData";

import CollectionPreview from "../../components/collection-preview/CollectionPreview";

class Shop extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      collections: SHOP_DATA
    }
  }

  render(){
    const { collections } = this.state;
    return(
      <div className="shop">
        {
          collections.map(({id, ...otherCollectionProps})  => (
            <CollectionPreview key={id} {...otherCollectionProps}/>
          ))
        }
      </div>
    )
  }
}

export default Shop;