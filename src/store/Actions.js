import ProductData from './products.json';

export const fetchDataAction = async dispatch => {
  return dispatch({
    type: 'FETCH_DATA',
    payload: ProductData.products,
  });
};

export const toggleStore = (product, state, dispatch) => {
  const episodeInFavourites = state.favourites.includes(product);
  let dispatchObj = {
    type: 'ADD_FAV',
    payload: product,
  };
  if (episodeInFavourites)
    dispatchObj = {
      type: 'REMOVE_FAV',
      payload: state.favourites.filter(fav => fav.id !== product.id),
    };
  return dispatch(dispatchObj);
};
