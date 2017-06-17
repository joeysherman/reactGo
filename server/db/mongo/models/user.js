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
  services: {
    google: {},
    github: {},
  },
});

const UserModel = mongoose.model('User', UserSchema);

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

UserSchema.statics.findOrCreate = function (profile, cb) {
  var queryById = this.findOne()
    .where('services.' + profile.provider + '.profileId', profile.id);

  var queryByEmail = this.findOne()
    .where('email', profile.emails[0].value);

  // check if user exists from profile.id
  queryById.exec(function(err, user) {
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
    // search by email to find general existing user
    queryByEmail.exec(function (err, user) {
      if (err) {
        console.log('[user.findOrCreate] - Error finding existing user via email.', err);
        console.log('------------------------------------------------------------');
        return cb({ message: 'Sorry, there was an error processing your information, please try again.' });
      }
      if (user) {
        console.log('[user.findOrCreate] - Found existing user via email address...');
        console.log('------------------------------------------------------------');
        user.addProvider(profile, function(err, user){
          if (err) return cb(err);

          cb(null, user);
        });
      }
      // no existing user, create new one
      console.log('[user.findOrCreate] - Creating new user...');
      console.log('------------------------------------------------------------');
      var userData = {
        name: {
          first: profile.name.givenName,
          last: profile.name.familyName
        },

        gender: profile.gender || null,

        email: profile.emails[0].value,

        password: Math.random().toString(36).slice(-8),

        state: 'enabled',

        isVerified: true,

        services: {}
      };

      userData.services[profile.provider] = {
        isConfigured: true,

        profileId: profile.id,

        username: profile.displayName,
        avatar: profile.avatar || null,

        accessToken: profile.accessToken,
        refreshToken: profile.refreshToken
      };

      var newUser = new UserModel(userData);

      newUser.save(function(err) {
        if (err) {
          console.log('[user.findOrCreate] - Error saving new user.', err);
          console.log('------------------------------------------------------------');
          return cb({ message: 'Sorry, there was an error processing your account, please try again.' });
        }
        console.log('[user.findOrCreate] - Saved new user.');
        console.log('------------------------------------------------------------');
        return cb(null, newUser);
      });
    });
  });
};

export default UserModel;
