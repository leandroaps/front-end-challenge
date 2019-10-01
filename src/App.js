import { Link } from '@reach/router';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

function App(props) {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <Link to="/" className="navbar-brand">
          Rick and Morty
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
      </nav>
      {props.children}
    </>
  );
}
export default App;
