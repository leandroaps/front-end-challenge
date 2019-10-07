/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-props-no-spreading */
import React, {
  Suspense, lazy, useContext, useEffect,
} from 'react';
import { fetchDataAction, toggleStore } from '../store/Actions';

import { Store } from '../store/Store';

const ProductsList = lazy(() => import('../components/ProductsList'));

export default function HomePage() {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    state.products.length === 0 && fetchDataAction(dispatch);
  }, [dispatch, state]);

  const props = {
    products: state.products,
    state: { state, dispatch },
    toggleStore,
    favourites: state.favourites,
  };

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="container-fluid px-xl-7 py-6">
          <div className="jumbotron">
            <h1 className="display-4">razões para amar</h1>
            <p className="lead">Tendências, peças essenciais e conteúdo de moda original que te inspiram a experimentar diferentes estilos.</p>
            <a className="btn btn-primary btn-lg" href="/" role="button">
              Learn more
            </a>
          </div>
          <div className="card-deck">
            <ProductsList {...props} />
          </div>
        </div>
      </Suspense>
    </>
  );
}
