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
  email: {
    type: String,
    unique: true,
    lowercase: true,
    index: true
  },
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
    github: {
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
