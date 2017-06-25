/**
 * Defining a User Model in mongoose
 * Code modified from https://github.com/sahat/hackathon-starter
 */

import bcrypt from 'bcrypt-nodejs';
import mongoose from 'mongoose';
import _ from 'lodash';
// Other oauthtypes to be added

/*
 User Schema
 */

const UserSchema = new mongoose.Schema({
  username: String,
  name: String,
  password: String,
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  createdAt: { type: Date, default: Date.now() },
  // Services
  github: {
      accessToken: String,
      login: { type: String, index: true },
      id: { type: String },
      avatar_url: { type: String },
      gravatar_id: { type: String },
      url: { type: String },
      html_url: { type: String },
      followers_url: { type: String },
      following_url: { type: String },
      gists_url: { type: String },
      starred_url: { type: String },
      subscriptions_url: { type: String },
      organizations_url: { type: String },
      repos_url: { type: String },
      events_url: { type: String },
      received_events_url: { type: String },
      type: { type: String },
      site_admin: Boolean,
      name: { type: String },
      company: { type: String },
      blog: { type: String },
      location: { type: String },
      email: { type: String },
      hireable: Boolean,
      bio: { type: String },
      public_repos: { type: String },
      public_gists: Number,
      followers: Number,
      following: Number,
      created_at: Date,
      updated_at: Date,
  },
});

 function encryptPassword(next) {
  const user = this;
  if (!user.isModified('password')) return next();
  return bcrypt.genSalt(5, (saltErr, salt) => {
    if (saltErr) return next(saltErr);
    return bcrypt.hash(user.password, salt, null, (hashErr, hash) => {
      if (hashErr) return next(hashErr);
      user.password = hash;
      return next();
    });
  });
}

/**
 * Password hash middleware.
 */
UserSchema.pre('save', encryptPassword);

/*
 Defining our own custom document instance method
 */
UserSchema.methods.comparePassword = function (candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
      if (err) return cb(err);
      return cb(null, isMatch);
    });
};

UserSchema.methods.checkAccessToken = function(token, cb) {
  if (this.github.accessToken === token) {
    return cb(null);
  }

};
/**
 * Statics
 */

UserSchema.statics.findExistingUser = function (profile, cb) {
  const queryById = this.findOne()
    .where('github.id', profile.id);

  // check if user exists from profile.id
  queryById.exec(function (err, user) {
    if (err) {
      console.log('[user.findOrCreate] - Error finding existing user via profile id.', err);
      console.log('------------------------------------------------------------');
      return cb({ message: 'Sorry, there was an error processing your information, please try again.' });
    }
    if (user) {
      console.log('[user.findOrCreate] - Found existing user via [' + profile.provider + '] profile id...');
      console.log('------------------------------------------------------------');
      return cb(null, user);
    }
    // no existing user registered with this profile.id
    // no existing user, create new one
      console.log('[user.findOrCreate] - No existing user found...');
      console.log('------------------------------------------------------------');
      return cb({ newUser: true });
    });
  };

export default mongoose.model('User', UserSchema);
