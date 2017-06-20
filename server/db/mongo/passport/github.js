/**
 * Created by Joey on 6/16/2017.
 */

import UserModel from '../models/user';

/* eslint-disable no-param-reassign */
export default (req, accessToken, refreshToken, profile, done) => {
  console.log('[ github.strategy.profile ] - ' + JSON.stringify(profile));

  if (req.user) {
    // check for existing fb linked
    if (req.user.isConfigured(profile.provider)) {
      console.log('[ github.strategy.profile ] - user already configured with ' + provider);
      return done(null, req.user);
    }
    console.log('[ github.strategy.profile ] - existing req.user logged in but not configured with ' + provider);
    req.user.addProvider(profile, function (err, user) {
      if (err) return done(err);
      done(null, user);
    });
  } else {
    console.log('[ github.strategy.profile ] - user not logged in..searching for existing user');
    UserModel.find(profile.provider + '.' + profile.id, function (err, user) {
      if (err) return done(err);
      done(null, user);
    });
  }
};
/* eslint-enable no-param-reassign */
