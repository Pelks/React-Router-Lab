import React from 'react';
import Header from '../Header/Header';
import {Link} from 'react-router-dom';

function ProductsPage({products,match}) {
  return (
    <div>
      <Header/>
      <h1>Product Page</h1>
      <p> Check out our products below!</p>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
          <Link to={match.url + "/" + product.id}> {product.name}</Link></li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsPage
