/**
 * Created by Joey on 8/15/2017.
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Navbar = ({ isLoggedIn }) => (
  <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">GitChat</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="sass.html">Home</a></li>
        <li><a href="badges.html">About</a></li>
        { isLoggedIn ? <li><a href="/logout">Log out</a></li> : <li><a href="/auth/github">Log in</a></li> }
      </ul>
    </div>
  </nav>
);

function mapStateToProps(state) {
  return {
    isLoggedIn: state.user.authenticated
  };
}

module.exports = connect(mapStateToProps)(Navbar);

