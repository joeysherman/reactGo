/**
 * Created by Joey on 6/16/2017.
 */

import User from '../models/user';

/* eslint-disable no-param-reassign */
export default (req, accessToken, refreshToken, profile, done) => {
  User.findExistingUser(profile, function(err, user) {
    if (user) {
      return done(null, user);
    }
    if (err && err.newUser) {
      const data = JSON.parse(profile._raw);
      data.accesstoken = accessToken;
      const newUser = new User({
          name: data.name,
          username: data.login,
          github: data,
        });
      newUser.save(done);
    }
  });
};
/* eslint-enable no-param-reassign */
