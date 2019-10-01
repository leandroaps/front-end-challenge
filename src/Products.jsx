import React from 'react';

export default function Products(props) {
  const { products } = props;
  console.log(products);
  return products.map(product => {
    return (
      <div className="card" key={product.id}>
        <img src={product.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <section style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p className="card-text">
              Season: {product.season}
              <small className="text-muted"> Number: {product.number}</small>
            </p>
          </section>
        </div>
      </div>
    );
  });
}
