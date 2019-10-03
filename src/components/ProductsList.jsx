import React from 'react';

export default function ProductsList(props) {
  const { products, toggleStore, favourites, state } = props;

  return products.map(product => {
    return (
      <div className="card" key={product.image}>
        <div className="card-header">{product.name}</div>
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <section style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p className="card-text">
              Season: {product.season}
              <small className="text-muted"> Number: {product.number}</small>
            </p>
            <button
              type="button"
              className="btn btn-dark"
              onClick={() => toggleStore(product, state.state, state.dispatch)}
            >
              {favourites.find(fav => fav.image === product.image)
                ? 'Unfav'
                : 'Fav'}
            </button>
          </section>
        </div>
      </div>
    );
  });
}
