/**
 * Created by Joey on 6/25/2017.
 */

import React from 'react';

const HomePage = props => (
  <div className="container">
    <div className="col s12 m8 offset-m2 l6 offset-l3">
      <div className="card-panel grey lighten-5 z-depth-1">
        <div className="row valign-wrapper">
          <div className="col s2">
            <img src={props.picture} alt="" className="circle responsive-img"></img>
          </div>
          <div className="col s10">
              <span className="black-text">
                {props.name}
              </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
