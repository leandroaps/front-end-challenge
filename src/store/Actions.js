import ProductData from './products.json';

export default function fetchData(dispatch) {
  return dispatch({
    type: 'FETCH_DATA',
    payload: ProductData.products,
  });
}
