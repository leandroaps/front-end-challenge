import React, { lazy, useContext, useEffect, Suspense } from 'react';
import { Store } from '../store/Store';
import { fetchDataAction, toggleStore } from '../store/Actions';

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
        <div className="card-columns">
          <ProductsList {...props} />
        </div>
      </Suspense>
    </>
  );
}
