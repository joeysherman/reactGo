/**
 * Created by Joey on 6/23/2017.
 */

/**
 * Defining a Repo Model in mongoose
 * Code modified from https://github.com/sahat/hackathon-starter
 */

import mongoose from 'mongoose';

/*
 Repo Schema
 */

const RepoSchema = new mongoose.Schema({

});

export default mongoose.model('Repo', RepoSchema);
