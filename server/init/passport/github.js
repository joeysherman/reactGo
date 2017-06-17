/**
 * Created by Joey on 6/16/2017.
 */

import { passport as dbPassport } from '../../db';
import { github } from '../../../config/secrets';

const GitHubStrategy = require('passport-github').Strategy;

export default function (passport) {
  passport.use(new GitHubStrategy({
    clientID: github.clientID,
    clientSecret: github.clientSecret,
    callbackURL: github.callbackURL,
    passReqToCallback: true,
  }, dbPassport.github));
}
