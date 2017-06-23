/**
 * Created by Joey on 6/23/2017.
 */

import axios from 'axios';
import Repo from '../models/repo';

export function saveRepos(req, res) {
    axios.get('https://api.github.com/repos/joeysherman/admin-on-rest')
    .then((response) => {
        let newRepo = new Repo(response.data);
        newRepo.save((err, saved) => {
            if (err) {
                return res.send(err);
            }
            res.send('Saved new repo! ID: ' + saved._id);
        });
    })
    .catch(err => console.log(err));
}

export default {
    saveRepos,
};
