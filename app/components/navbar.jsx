/**
 * Created by Joey on 8/15/2017.
 */

import React from 'react';
import PropTypes from 'prop-types';

const Navbar = () => (
  <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">GitChat</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="sass.html">Home</a></li>
        <li><a href="badges.html">About</a></li>
        <li><a href="collapsible.html">Log in</a></li>
      </ul>
    </div>
  </nav>
);

module.exports = Navbar;

