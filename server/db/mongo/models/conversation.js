/**
 * Created by Joey on 6/16/2017.
 */

import mongoose from 'mongoose';

const { Schema } = mongoose;


// Schema defines how chat messages will be stored in MongoDB
const ConversationSchema = new Schema({
  participants: [{ type: Schema.Types.ObjectId, ref: 'User'}],

});

module.exports = mongoose.model('Conversation', ConversationSchema);
