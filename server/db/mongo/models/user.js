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
  email: { type: String, unique: true, lowercase: true },
  password: String,
  tokens: Array,
  profile: {
    name: { type: String, default: '' },
    gender: { type: String, default: '' },
    location: { type: String, default: '' },
    website: { type: String, default: '' },
    picture: { type: String, default: '' }
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  createdAt: { type: Date, default: Date.now() },
  services: {
    google: {},
    github: {},
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

UserSchema.methods.isConfigured = function(type) {
  // check if current document has the provider configured or not
  return this.services[type].isConfigured;
};

UserSchema.methods.addProvider = function(profile, cb) {
  // add provider to existing User

  var userData = {
    state: 'enabled',

    isVerified: true,

    services: this.services || {}
  };

  _.extend(userData.services[profile.provider], {
    isConfigured: true,

    profileId: profile.id,

    username: profile.displayName,
    avatar: profile.avatar || null,

    accessToken: profile.accessToken,
    refreshToken: profile.refreshToken
  });

  this.set(userData);

  this.save(function(err, user) {
    if (err) {
      console.log('[user.addProvider] - Error saving existing user.', err);
      console.log('------------------------------------------------------------');
      return cb({ message: 'Sorry, there was an error processing your account, please try again.' });
    }
    console.log('[user.addProvider] - Saved existing user.');
    console.log('------------------------------------------------------------');
    return cb(null, user);
  });
};

/**
 * Statics
 */

export default mongoose.model('User', UserSchema);
