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
          <div className="swiper-container swiper-container-fade swiper-container-initialized swiper-container-horizontal">
            <h1 className="display-4">Hello, world!</h1>
            <p className="lead">
              This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.
            </p>
            <p>
              It uses utility classes for typography and spacing to space content out
              within the larger container.
            </p>
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
