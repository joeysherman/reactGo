/**
 * Created by Joey on 6/16/2017.
 */

import mongoose from 'mongoose';

const { Schema } = mongoose;

const MessageSchema = new Schema({
    repoId: {
      type: Schema.Types.ObjectId,
      ref: 'Repo',
      required: true,
      index: true,
    },
    body: {
      type: String,
      required: true
    },
    author: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    }
  },
  {
    timestamps: true // Saves createdAt and updatedAt as dates. createdAt will be our timestamp.
  });

module.exports = mongoose.model('Message', MessageSchema);
