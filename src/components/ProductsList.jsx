/* eslint-disable react/no-array-index-key */
import React from "react";

export default function ProductsList({products, toggleStore, favourites, state}) {
  return products.map(product => (
    <div key={product.image}>
      {product.image && product.name && product.regular_price ? (
        <div className="card card-poster gradient-overlay mt-2 mb-3">
          <img src={product.image} className="card-img-top" alt="..." />
          {product.discount_percentage ? (
            <div className="card-img-overlay">
              <span className="badge badge-secondary">{product.discount_percentage}</span>
            </div>
          ) : null}

          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {product.actual_price ? product.actual_price : product.regular_price}
            </h6>
            {product.installments ? (
              <p className="card-search-text">{product.installments}</p>
            ) : null}

            <ul className="list-group list-group-horizontal-sm small">
              {product.sizes.map((size, index) => (
                <li className="list-group-item" key={index}>
                  <small>{size.size}</small>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-footer">
            <button
              type="button"
              className="btn btn-dark"
              onClick={() => toggleStore(product, state.state, state.dispatch)}
            >
              {favourites.find(fav => fav.image === product.image) ? "REMOVE" : "BUY"}
            </button>
          </div>
        </div>
      ) : null}
    </div>
  ));
}
