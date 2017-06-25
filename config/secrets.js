/** Important **/
/** You should not be committing this file to GitHub **/
/** Repeat: DO! NOT! COMMIT! THIS! FILE! TO! YOUR! REPO! **/
export const sessionSecret = process.env.SESSION_SECRET || 'Your Session Secret goes here';
export const google = {
  clientID: process.env.GOOGLE_CLIENTID || '62351010161-eqcnoa340ki5ekb9gvids4ksgqt9hf48.apps.googleusercontent.com',
  clientSecret: process.env.GOOGLE_SECRET || '6cKCWD75gHgzCvM4VQyR5_TU',
  callbackURL: process.env.GOOGLE_CALLBACK || '/auth/google/callback'
};

export const github = {
  clientID: process.env.GITHUB_CLIENTID || '86a2b8cf1b93dc91f2a2',
  clientSecret: process.env.GITHUB_SECRET || '5dcee05f0fbac2e531637b2b68fec79a73cfa8d3',
  callbackURL: process.env.GITHUB_CALLBACK || 'https://36fca9f8.ngrok.io/auth/github/callback'
};

export const mlab = {
  active: true,
  user: 'admin',
  pass: 'lokaqs123',
  uriHead: 'mongodb://',
  uriMid: ':',
  uriTail: '@ds127962.mlab.com:27962/codemedic',
};

