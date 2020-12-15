import React from "react";
import { Redirect } from "react-router-dom";
function Technical({ products, match }) {
  const item = products.find((product) => product.id === match.params.productId);
  if (!item) {
    return <Redirect to="/products" />;
  }
  return (
    <div>
      <p>{item.technicalSpecs}</p>
    </div>
  );
}
export default Technical;