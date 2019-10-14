/* eslint-disable react/jsx-props-no-spreading */
import React, {lazy, useContext, Suspense} from "react";
import {Store} from "../store/Store";
import {toggleStore} from "../store/Actions";

const ProductsList = lazy(() => import("../components/ProductsList"));

export default function FavPage() {
  const {state, dispatch} = useContext(Store);

  const props = {
    products: state.favourites,
    state: {state, dispatch},
    toggleStore,
    favourites: state.favourites,
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="container-fluid px-xl-7 py-6">
        <div className="card-deck">
          <ProductsList {...props} />
        </div>
      </div>
    </Suspense>
  );
}
