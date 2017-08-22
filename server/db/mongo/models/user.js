/**
 * Defining a User Model in mongoose
 * Code modified from https://github.com/sahat/hackathon-starter
 */

import bcrypt from 'bcrypt-nodejs';
import async from 'async';
import mongoose from 'mongoose';
import axios from 'axios';
import _ from 'lodash';
import Repo from './repo';
// Other oauthtypes to be added

/*
 User Schema
 - Does user exist?
 - Create new user
 */

const UserSchema = new mongoose.Schema({
  name: String,
  password: String,
  picture: String,
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  createdAt: { type: Date, default: Date.now },
  repos: [{
    id: Number,
  }],
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
}, {
  timestamps: true
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

UserSchema.pre('init', (next, data) => {
  console.log('Pre hook data' + JSON.stringify(data));
  next();
});

function testAsync(n) {
  return new Promise((resolve) => {
    setTimeout(() => {
      this.repos.push({ id: n });
      resolve();
    }, 250 * n);
  });
}

UserSchema.pre('save', true, function(next, done) {
  const promises = [];
  const reposURL = 'https://api.github.com/users/' + this.name + '/repos?type=all';
  let repoURL = 'https://api.github.com/repos/' + this.name;
  next();
  axios.get(reposURL)
    .then((repos) => {
      let forks = repos.data.filter(function(repo) {
        return !repo.private && repo.fork;
      });
      console.log('Forks found: ' + forks.length)
      let forkSources = []
      let fetched = [];
      forks.forEach((fork) => {

      })
    })
    .catch((error) => {

    });
  // fetch all repos
  // decide which are forks and !private
  // decide if repo exists
  // if NO -> create repo
  // if YES -> $addToSet to users with user ID (this.id)
  Promise.all(promises).then((result) => {
     console.log('Done ' + result);
    });
});

/*
 Defining our own custom document instance method
 */
UserSchema.methods.comparePassword = function (candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
      if (err) return cb(err);
      return cb(null, isMatch);
    });
};

UserSchema.methods.reposAreAttached = function (repoArray) {
  const userRepos = this.repos;
  if (userRepos && Array.isArray(userRepos)) {
    const diff = _.differenceBy(this.repos, userRepos, 'github_id');
    if (diff.length) {
      console.log('difference in array: ' + diff);
    }
  }
};
// Axios Schema: [ 'status', 'statusText', 'headers', 'config', 'request', 'data' ]

UserSchema.statics.findOrCreate = function (profile, cb) {
    const queryById = this.findOne()
        .where('github.id', profile.id);
    const self = this;

    // check if user exists from profile.id
    queryById.exec((err, user) => {
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
            // no existing user, create new one
            console.log('[user.findOrCreate] - Creating new user...');
            console.log('------------------------------------------------------------');
            const userData = {
                name: profile.username,
                picture: profile.photos[0].value || null,
                password: Math.random().toString(36).slice(-8),
            };

            userData.github = {
                profileId: profile.id,
                username: profile.displayName,
                accessToken: profile.accessToken,
            };

            self.create(userData, (error, doc) => {
              if (error) {
                console.log('[user.findOrCreate] - Error saving new user.', error);
                console.log('------------------------------------------------------------');
              } else {
                console.log('[user.findOrCreate] - Saved new user.');
                console.log('------------------------------------------------------------');
              }
              return cb(error, doc);
            });
        });
    };

UserSchema.methods.checkAccessToken = function (token, cb) {
  if (this.github.accessToken === token) {
    return cb(null);
  }
};

/**
 * Statics
 */

export default mongoose.model('User', UserSchema);


/**
 {"id":"18039561","displayName":"Joey Sherman","username":"joeysherman","profileUrl":"https://github.com/joeysherman","photos":[{"value":"ht
tps://avatars1.githubusercontent.com/u/18039561?v=3"}],"provider":"github","_raw":"{\"login\":\"joeysherman\",\"id\":18039561,\"avatar_url\":\"https:
//avatars1.githubusercontent.com/u/18039561?v=3\",\"gravatar_id\":\"\",\"url\":\"https://api.github.com/users/joeysherman\",\"html_url\":\"https://gi
thub.com/joeysherman\",\"followers_url\":\"https://api.github.com/users/joeysherman/followers\",\"following_url\":\"https://api.github.com/users/joey
sherman/following{/other_user}\",\"gists_url\":\"https://api.github.com/users/joeysherman/gists{/gist_id}\",\"starred_url\":\"https://api.github.com/
users/joeysherman/starred{/owner}{/repo}\",\"subscriptions_url\":\"https://api.github.com/users/joeysherman/subscriptions\",\"organizations_url\":\"h
ttps://api.github.com/users/joeysherman/orgs\",\"repos_url\":\"https://api.github.com/users/joeysherman/repos\",\"events_url\":\"https://api.github.c
om/users/joeysherman/events{/privacy}\",\"received_events_url\":\"https://api.github.com/users/joeysherman/received_events\",\"type\":\"User\",\"site
_admin\":false,\"name\":\"Joey Sherman\",\"company\":null,\"blog\":\"\",\"location\":\"San Diego, CA\",\"email\":null,\"hireable\":true,\"bio\":\"Cra
ft brew and Code\",\"public_repos\":16,\"public_gists\":0,\"followers\":4,\"following\":10,\"created_at\":\"2016-03-23T21:47:40Z\",\"updated_at\":\"2
017-06-28T07:57:23Z\"}","_json":{"login":"joeysherman","id":18039561,"avatar_url":"https://avatars1.githubusercontent.com/u/18039561?v=3","gravatar_i
d":"","url":"https://api.github.com/users/joeysherman","html_url":"https://github.com/joeysherman","followers_url":"https://api.github.com/users/joey
sherman/followers","following_url":"https://api.github.com/users/joeysherman/following{/other_user}","gists_url":"https://api.github.com/users/joeysh
erman/gists{/gist_id}","starred_url":"https://api.github.com/users/joeysherman/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/us
ers/joeysherman/subscriptions","organizations_url":"https://api.github.com/users/joeysherman/orgs","repos_url":"https://api.github.com/users/joeysher
man/repos","events_url":"https://api.github.com/users/joeysherman/events{/privacy}","received_events_url":"https://api.github.com/users/joeysherman/r
eceived_events","type":"User","site_admin":false,"name":"Joey Sherman","company":null,"blog":"","location":"San Diego, CA","email":null,"hireable":tr
ue,"bio":"Craft brew and Code","public_repos":16,"public_gists":0,"followers":4,"following":10,"created_at":"2016-03-23T21:47:40Z","updated_at":"2017
-06-28T07:57:23Z"}}
**/
