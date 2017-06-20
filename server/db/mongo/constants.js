import { mlab } from '../../../config/secrets';

const { user, pass, uriHead, uriMid, uriTail, active } = mlab;
const dbURI = active ? uriHead + user + uriMid + pass + uriTail : false;

export const db = process.env.MONGOHQ_URL || process.env.MONGODB_URI || dbURI || 'mongodb://localhost/ReactWebpackNode';

export default {
  db
};
