/**
 * Created by Joey on 6/16/2017.
 */

import User from '../models/user';

/* eslint-disable no-param-reassign */
export default (req, accessToken, refreshToken, profile, done) => {
    console.log(JSON.stringify(profile));
    console.log('accesstoken: ' + accessToken);
    console.log('rft ' + refreshToken);
    if (req.user) {
        console.log('Existing user!');
        console.log('req.user ' + JSON.stringify(req.user));
        if (req.user.name == profile.username) {
            console.log('Already logged in...welcome back ' + req.user.name );
            return done(null, req.user);
        } else {
            req.logOut();
            console.log('already logged in but new user!');
            return done(true);
        }
    } else {
        User.findOrCreate(profile, function(err, user) {
           return done(err, user);
        });
    }
};
/* eslint-enable no-param-reassign */
