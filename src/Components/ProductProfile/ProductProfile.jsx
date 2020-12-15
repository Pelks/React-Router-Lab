import React from "react";
import {Link, Route, Redirect} from 'react-router-dom';
import Header from '../Header/Header';
import Technical from '../Technical/Technical';

function ProductProfile({products, match}) {
  const item = products.find((product) => product.id === match.params.productId);
  console.log (match.params.productId)
  if (!item) {
    return <Redirect to="/products"/>
  }
  return (
    <div>
    <Header/>
      <h2>
      {item.name}
      {item.icon}
      </h2>
      <p>{item.description}</p>
      <p>Product ID: {item.id}</p>
      <p>Catgeory: {item.category}</p>
      <Link to={match.url + "/technical-specifications"}>See technical specifications</Link>
      <Route path={match.path + "/technical-specifications"} render={(routerProps) => <Technical products={products} {...routerProps} />} />
    </div>
  );
}
export default ProductProfile;