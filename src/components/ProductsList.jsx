import React from 'react';

export default function ProductsList(props) {
  const {
    products, toggleStore, favourites, state,
  } = props;

  return products.map((product) => (
    <div key={product.image}>
      {product.image && product.name && product.regular_price ? (
        <div className="card card-poster gradient-overlay">
          <img src={product.image} className="card-img-top" alt="..." />

          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">
Price:

              {product.regular_price}
            </p>
            <small>{product.installments}</small>
          </div>

          <div className="card-body">
            <button
              type="button"
              className="btn btn-dark"
              onClick={() => toggleStore(product, state.state, state.dispatch)}
            >
              {favourites.find((fav) => fav.image === product.image) ? 'REMOVE' : 'BUY'}
            </button>
          </div>
        </div>
      ) : null}
    </div>
  ));
}
