import React, { useContext } from 'react';
import { Link } from '@reach/router';
import { Store } from '../store/Store';

export default function Header() {
  const { state } = useContext(Store);

  return (
    <header className="header header-dark header-sticky">
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <Link to="/" className="navbar-brand">
          AMARO
        </Link>
        <div className="btn-group" role="group" aria-label="FAV">
          <Link to="/" className="btn btn-secondary">Home</Link>
          <Link to="/faves" className="btn btn-secondary">
Favourite(s)
            {state.favourites.length}
          </Link>
        </div>
      </nav>
    </header>
  );
}
