import React, { lazy, useContext, useEffect, Suspense } from 'react';
import { Store } from './store/Store';
import fetchData from './store/Actions';

const Products = lazy(() => import('./Products'));

export default function HomePage() {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    state.products.length === 0 && fetchData(dispatch);
  }, [dispatch, state]);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="card-columns">
          <Products products={state.products} />
        </div>
      </Suspense>
    </>
  );
}
